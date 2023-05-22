import ChatService from '@/services/chat.service'
import { State } from '@/types/common.types'
import { IMessage } from '@/types/stores/chatStore.types'
import dayjs from 'dayjs'
import { makeAutoObservable } from 'mobx'
import { RootStore } from './index'

class ChatStore {
	rootStore: RootStore

	state: State = { status: 'initial' }

	messages: IMessage[] | null = null

	phoneNumber: string | null = null

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore
		makeAutoObservable(this)
	}

	setPhoneNumber(phoneNumber: string) {
		this.phoneNumber = phoneNumber
	}

	setState(state: State) {
		this.state = state
	}

	addMessage(message: IMessage) {
		this.messages = [...(this.messages ?? []), message]
	}

	removeMessages() {
		this.messages = null
	}

	async sendMessage(messageText: string) {
		this.setState({ status: 'loading' })
		const { apiTokenInstance, idInstance } = this.rootStore.authStore

		if (!apiTokenInstance || !idInstance || !this.phoneNumber) {
			this.setState({ status: 'error', message: 'Something went wrong' })
			return
		}

		try {
			const { idMessage } = await ChatService.sendMessage({
				apiTokenInstance: apiTokenInstance,
				idInstance: idInstance,
				message: messageText,
				phoneNumber: this.phoneNumber
			})

			const message: IMessage = {
				id: idMessage,
				text: messageText,
				timestamp: dayjs().unix(),
				isMine: true
			}

			this.addMessage(message)
			this.setState({ status: 'success' })
		} catch (error) {
			this.setState({ status: 'error', message: 'Cannot send a message' })
		}
	}

	async getMessage() {
		const { apiTokenInstance, idInstance } = this.rootStore.authStore

		if (!apiTokenInstance || !idInstance) return

		try {
			const response = await ChatService.getMessage({ apiTokenInstance, idInstance })

			if (!response) return

			const { body, receiptId } = response

			await ChatService.deleteNotification({ apiTokenInstance, idInstance, receiptId })

			if (body.typeWebhook !== 'outgoingMessageReceived' || body.messageData.typeMessage !== 'textMessage') {
				this.getMessage()
				return
			}

			const message: IMessage = {
				id: body.idMessage,
				text: body.messageData.textMessageData.textMessage,
				timestamp: body.timestamp,
				isMine: false
			}

			if (this.messages?.some(({ id }) => id === body.idMessage)) return

			this.addMessage(message)
		} catch (error) {
			console.error(error)
		}
	}
}

export default ChatStore
