import { IAuthTokens } from '@/types/common.types'

const localStorageAuthData = {
	checkIsAuth() {
		return !!localStorage.getItem('idInstance') && !!localStorage.getItem('apiTokenInstance')
	},

	getAuthData() {
		const idInstance = localStorage.getItem('idInstance') ?? JSON.stringify('')
		const apiTokenInstance = localStorage.getItem('apiTokenInstance') ?? JSON.stringify('')

		return {
			idInstance: JSON.parse(idInstance) as string,
			apiTokenInstance: JSON.parse(apiTokenInstance) as string
		}
	},

	logIn({ idInstance, apiTokenInstance }: IAuthTokens) {
		localStorage.setItem('idInstance', JSON.stringify(idInstance))
		localStorage.setItem('apiTokenInstance', JSON.stringify(apiTokenInstance))
	},

	logout() {
		localStorage.removeItem('idInstance')
		localStorage.removeItem('apiTokenInstance')
	}
}

export default localStorageAuthData
