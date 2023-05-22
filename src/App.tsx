import { lazy, Suspense, useCallback } from 'react'
import { useStores } from '@/mobx'
import { observer } from 'mobx-react-lite'
import { Steps } from '@/types/stores/stepsStore.types'

const LoginForm = lazy(() => import('./components/LoginForm/LoginForm'))
const PhoneForm = lazy(() => import('./components/PhoneForm/PhoneForm'))
const Chat = lazy(() => import('./components/Chat/Chat'))
import { Loader } from '@/components'
import { AuthLayout } from '@/layouts'

import '@/styles/globals.css'

const App = () => {
	const { stepStore } = useStores()
	const { step } = stepStore

	const currentStepComponent = useCallback(() => {
		switch (step) {
			case Steps.LoginStep:
				return <LoginForm />
			case Steps.PhoneStep:
				return <PhoneForm />
			case Steps.ChatStep:
				return <Chat />
			default:
				return <LoginForm />
		}
	}, [step])

	return (
		<Suspense
			fallback={
				<div className='w-screen h-screen flex justify-center items-center'>
					<Loader size={100} />
				</div>
			}
		>
			<AuthLayout>{currentStepComponent()}</AuthLayout>
		</Suspense>
	)
}

export default observer(App)
