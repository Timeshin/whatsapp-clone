import { FC, InputHTMLAttributes } from 'react'

export type Input = InputHTMLAttributes<HTMLInputElement>

const Input: FC<Input> = ({ className, ...props }) => (
	<input
		type='text'
		className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200 ${
			className ?? ''
		}`}
		{...props}
	/>
)

export default Input
