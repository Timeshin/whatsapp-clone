import { FormEvent } from 'react'
import { useStores } from '@/mobx'
import { observer } from 'mobx-react-lite'
import onSubmitForm from '@/utils/onSubmitForm'

import { ContentLayout } from '@/layouts'
import { Form } from '@/components'

const LoginForm = () => {
	const { authStore } = useStores()
	const { state } = authStore

	const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		onSubmitForm({
			event,
			errorCB: () => authStore.setState({ status: 'error', message: 'fill fields' }),
			successCB: ([idInstance, apiTokenInstance]) => authStore.login({ idInstance, apiTokenInstance })
		})
	}

	return (
		<ContentLayout>
			<div className='w-[20vw]'>
				<Form onSubmit={onSubmitHandler} method='GET' className='mt-6'>
					<Form.Title>WhatsApp</Form.Title>
					<Form.Input type='number' name='IdInstance'>
						IdInstance
					</Form.Input>
					<Form.Input type='text' name='ApiTokenInstance'>
						ApiTokenInstance
					</Form.Input>
					<Form.Button type='submit' disabled={state.status === 'loading'} isLoading={state.status === 'loading'}>
						Login
					</Form.Button>
					{state.status === 'error' && <Form.Error>{state.message}</Form.Error>}
				</Form>
			</div>
		</ContentLayout>
	)
}

export default observer(LoginForm)
