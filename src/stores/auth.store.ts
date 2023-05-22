import { IAuthTokens, State } from '@/types/common.types'
import { makeAutoObservable } from 'mobx'
import AuthService from '@/services/auth.service'
import localStorageAuthData from '@/utils/localStorageAuthData'
import { RootStore } from './index'
import { Steps } from '@/types/stores/stepsStore.types'

class AuthStore {
	rootStore: RootStore

	state: State = { status: 'initial' }

	isAuth = false

	idInstance: string | null = null

	apiTokenInstance: string | null = null

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
		makeAutoObservable(this)
	}

	setIsAuth(isAuth: boolean) {
		this.isAuth = isAuth
	}

	setState(state: State) {
		this.state = state
	}

	setAuthTokens({ idInstance, apiTokenInstance }: IAuthTokens) {
		this.idInstance = idInstance
		this.apiTokenInstance = apiTokenInstance
	}

	async login({ idInstance, apiTokenInstance }: IAuthTokens) {
		this.setState({ status: 'loading' })

		try {
			const response = await AuthService.login({ idInstance, apiTokenInstance })

			if (response.stateInstance !== 'authorized') {
				throw Error('not authorized')
			}

			localStorageAuthData.logIn({ idInstance, apiTokenInstance })
			this.setAuthTokens({ idInstance, apiTokenInstance })
			this.setIsAuth(true)
			this.setState({ status: 'success' })
		} catch (error) {
			this.setIsAuth(false)
			this.setState({ status: 'error', message: error !== 'not authorized' ? "user doesn't exist" : error })
		}
	}

	logout() {
		this.setIsAuth(false)
		this.rootStore.stepStore.setStep(Steps.LoginStep)
		localStorageAuthData.logout()
	}
}

export default AuthStore
