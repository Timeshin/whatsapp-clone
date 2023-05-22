import { AxiosInstance } from 'axios'
import fetchInstance from '@/config/fetchInstance.config'
import { ICheckIsPhoneNumberExistProps, IExistsWhatsappResponse } from '@/types/services/usersService.types'

class UsersService {
	private readonly api: AxiosInstance

	constructor(api: AxiosInstance) {
		this.api = api
	}

	async checkIsPhoneNumberExist({ phoneNumber, idInstance, apiTokenInstance }: ICheckIsPhoneNumberExistProps) {
		const { data } = await this.api.post<IExistsWhatsappResponse>(
			`waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,
			{
				phoneNumber
			}
		)

		return data
	}
}

export default new UsersService(fetchInstance)
