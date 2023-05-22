import { FormEvent } from 'react'
import onSubmitForm from '@/utils/onSubmitForm'
import { useStores } from '@/mobx'
import { observer } from 'mobx-react-lite'

import { ContentLayout } from '@/layouts'
import { Form } from '@/components'

const PhoneForm = () => {
	const { usersStore } = useStores()
	const { state } = usersStore

	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		onSubmitForm({
			event,
			errorCB: () => usersStore.setState({ status: 'error', message: 'fill field' }),
			successCB: ([phoneNumber]) => usersStore.checkIsPhoneNumberExist(phoneNumber)
		})
	}

	return (
		<ContentLayout>
			<div className='w-[20vw]'>
				<Form onSubmit={onSubmitHandler} method='GET' className='mt-6'>
					<Form.Title>Phone</Form.Title>
					<Form.Input type='number' name='IdInstance'>
						Person phone number
					</Form.Input>
					<Form.Button type='submit' disabled={state.status === 'loading'} isLoading={state.status === 'loading'}>
						Start chatting
					</Form.Button>
					{state.status === 'error' && <Form.Error>{state.message}</Form.Error>}
				</Form>
			</div>
		</ContentLayout>
	)
}

export default observer(PhoneForm)
