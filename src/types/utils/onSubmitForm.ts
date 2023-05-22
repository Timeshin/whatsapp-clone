import { FormEvent } from 'react'

export interface IOnSubmitForm {
	event: FormEvent<HTMLFormElement>
	successCB: (formValues: string[]) => void
	errorCB: () => void
}
