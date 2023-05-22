import { createContext, useContext } from 'react'
import AuthStore from './auth.store'
import ChatStore from './chat.store'
import StepStore from './steps.store'
import UsersStore from './users.store'

export class RootStore {
	stepStore: StepStore
	authStore: AuthStore
	usersStore: UsersStore
	chatStore: ChatStore

	constructor() {
		this.stepStore = new StepStore(this)
		this.authStore = new AuthStore(this)
		this.usersStore = new UsersStore(this)
		this.chatStore = new ChatStore(this)
	}
}

const StoresContext = createContext(new RootStore())

export const useStores = () => useContext(StoresContext)
