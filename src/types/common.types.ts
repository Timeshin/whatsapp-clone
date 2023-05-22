export type State =
	| { status: 'initial' }
	| { status: 'success' }
	| { status: 'error'; message: string }
	| { status: 'loading' }

export interface IAuthTokens {
	idInstance: string
	apiTokenInstance: string
}
