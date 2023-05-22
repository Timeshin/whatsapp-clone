import { Steps } from '@/types/stores/stepsStore.types'
import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'

class StepStore {
	rootStore: RootStore

	step: Steps = Steps.LoginStep

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
		makeAutoObservable(this)
	}

	setStep(step: Steps) {
		this.step = step
	}
}

export default StepStore
