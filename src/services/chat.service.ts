import { AxiosInstance } from 'axios'
import fetchInstance from '@/config/fetchInstance.config'
import {
	GetMessageProps,
	IDeleteNotification,
	IDeleteNotificationResponse,
	IGetMessageResponse,
	ISendMessageProps,
	ISendMessageResponse
} from '@/types/services/chatService.types'

class ChatService {
	private readonly api: AxiosInstance

	constructor(api: AxiosInstance) {
		this.api = api
	}

	async sendMessage({ message, phoneNumber, idInstance, apiTokenInstance }: ISendMessageProps) {
		const chatId = `${phoneNumber}@c.us`

		const { data } = await this.api.post<ISendMessageResponse>(
			`waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
			{
				chatId,
				message
			}
		)

		return data
	}

	async getMessage({ idInstance, apiTokenInstance }: GetMessageProps) {
		const { data } = await this.api.get<IGetMessageResponse | null>(
			`waInstance${idInstance}/receiveNotification/${apiTokenInstance}`
		)

		return data
	}

	async deleteNotification({ idInstance, apiTokenInstance, receiptId }: IDeleteNotification) {
		const { data } = await this.api.delete<IDeleteNotificationResponse>(
			`waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`
		)

		return data
	}
}

export default new ChatService(fetchInstance)
