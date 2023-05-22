import { IAuthTokens } from '../common.types'

export interface ICheckIsPhoneNumberExistProps extends IAuthTokens {
	phoneNumber: string
}

export interface IExistsWhatsappResponse {
	existsWhatsapp: boolean
}
