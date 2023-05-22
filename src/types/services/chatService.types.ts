import { IAuthTokens } from '../common.types'

export interface ISendMessageProps extends IAuthTokens {
	message: string
	phoneNumber: string
}

export interface ISendMessageResponse {
	idMessage: string
}

export type GetMessageProps = IAuthTokens

export interface IGetMessageResponse {
	receiptId: number
	body: {
		typeWebhook:
			| 'incomingMessageReceived'
			| 'outgoingMessageReceived'
			| 'outgoingAPIMessageReceived'
			| 'outgoingMessageStatus'
			| 'stateInstanceChanged'
			| 'statusInstanceChanged'
			| 'deviceInfo'
			| 'incomingCall'
		instanceData: {
			idInstance: number
			wid: string
			typeInstance: string
		}
		timestamp: number
		idMessage: string
		senderData: {
			chatId: string
			chatName: string
			sender: string
			senderName: string
		}
		messageData: {
			typeMessage:
				| 'textMessage'
				| 'imageMessage'
				| 'videoMessage'
				| 'documentMessage'
				| 'audioMessage'
				| 'locationMessage'
				| 'contactMessage'
				| 'extendedTextMessage'
				| 'quotedMessage'
			textMessageData: {
				textMessage: string
				description: string
				title: string
				previewType: string
				jpegThumbnail: string
			}
		}
	}
}

export interface IDeleteNotification extends IAuthTokens {
	receiptId: number
}

export interface IDeleteNotificationResponse {
	result: boolean
}
