export interface ILoginResponse {
	stateInstance: 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting'
}
