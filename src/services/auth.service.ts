import { AxiosInstance } from 'axios'
import fetchInstance from '@/config/fetchInstance.config'
import { ILoginResponse } from '@/types/services/authService.types'
import { IAuthTokens } from '@/types/common.types'

class AuthService {
	private readonly api: AxiosInstance

	constructor(api: AxiosInstance) {
		this.api = api
	}

	async login({ idInstance, apiTokenInstance }: IAuthTokens) {
		const { data } = await this.api.get<ILoginResponse>(`waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)

		return data
	}
}

export default new AuthService(fetchInstance)
