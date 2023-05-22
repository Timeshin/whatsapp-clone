import UsersService from '@/services/users.service'
import { State } from '@/types/common.types'
import { Steps } from '@/types/stores/stepsStore.types'
import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'

class UsersStore {
	rootStore: RootStore

	state: State = { status: 'initial' }

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
		makeAutoObservable(this)
	}

	setState(state: State) {
		this.state = state
	}

	async checkIsPhoneNumberExist(phoneNumber: string) {
		const { apiTokenInstance, idInstance } = this.rootStore.authStore
		this.state = { status: 'loading' }

		try {
			const { existsWhatsapp } = await UsersService.checkIsPhoneNumberExist({
				apiTokenInstance: apiTokenInstance ?? '',
				idInstance: idInstance ?? '',
				phoneNumber
			})

			if (existsWhatsapp === false) {
				throw Error("Phone number doesn't exist")
			}

			this.state = { status: 'success' }
			this.rootStore.chatStore.removeMessages()
			this.rootStore.chatStore.setPhoneNumber(phoneNumber)
			this.rootStore.stepStore.setStep(Steps.ChatStep)
		} catch (error) {
			this.setState({ status: 'error', message: "Phone number doesn't exist" })
		}
	}
}

export default UsersStore
