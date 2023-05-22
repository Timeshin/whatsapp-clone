import { Button, Input } from '@/components'
import { IFormComponent } from './Form.types'

const Form: IFormComponent = ({ children, ...props }) => <form {...props}>{children}</form>

Form.Title = ({ children }) => <h1 className='text-3xl font-semibold text-center text-green-800'>{children}</h1>

Form.Button = ({ children, ...props }) => (
	<div className='mt-6'>
		<Button
			className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-green-500'
			{...props}
		>
			{children}
		</Button>
	</div>
)

Form.Input = ({ children, ...props }) => (
	<div className='mt-4'>
		<label className='block text-sm text-gray-600'>{children}</label>
		<Input
			className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200'
			{...props}
		/>
	</div>
)

Form.Error = ({ children }) => (
	<span className='w-full mt-2 flex justify-center text-red-600 text-sm text-center'>{children}</span>
)

export default Form
