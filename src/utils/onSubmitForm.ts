import { IOnSubmitForm } from '@/types/utils/onSubmitForm'

const onSubmitForm = ({ event, successCB, errorCB }: IOnSubmitForm) => {
	event.preventDefault()
	const formData = Object.fromEntries(new FormData(event.target as HTMLFormElement))
	const formDataValuesArray = Object.values(formData)

	if (formDataValuesArray.some((formValue) => !formValue)) {
		errorCB()
		return
	}

	successCB(formDataValuesArray as string[])
}

export default onSubmitForm
