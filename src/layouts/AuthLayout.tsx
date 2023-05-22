import { FC, ReactNode, useEffect } from 'react'
import localStorageAuthData from '@/utils/localStorageAuthData'
import { useStores } from '@/mobx'
import { Steps } from '@/types/stores/stepsStore.types'
import { observer } from 'mobx-react-lite'

import { FiLogOut } from 'react-icons/fi'

interface IAuthLayout {
	children: ReactNode
}

const AuthLayout: FC<IAuthLayout> = ({ children }) => {
	const isAuth = localStorageAuthData.checkIsAuth()
	const { apiTokenInstance, idInstance } = localStorageAuthData.getAuthData()
	const { stepStore, authStore } = useStores()

	const onLogout = () => {
		authStore.logout()
	}

	useEffect(() => {
		if (!isAuth) {
			stepStore.setStep(Steps.LoginStep)
			return
		}

		stepStore.setStep(Steps.PhoneStep)
		authStore.setAuthTokens({ idInstance, apiTokenInstance })
		authStore.setIsAuth(true)
	}, [apiTokenInstance, isAuth, stepStore, authStore, idInstance])

	return (
		<>
			{authStore.isAuth && (
				<button
					type='button'
					className='absolute top-2 left-2 m-4 py-2 px-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
					onClick={onLogout}
				>
					<div className='flex items-center justify-center'>
						<FiLogOut className='mr-2' />
						<span>Log out</span>
					</div>
				</button>
			)}

			{children}
		</>
	)
}

export default observer(AuthLayout)
