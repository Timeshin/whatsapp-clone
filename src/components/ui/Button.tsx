import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { Loader } from '@/components'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	isLoading?: boolean
}

const Button: FC<IButton> = ({ children, className, isLoading, disabled, ...props }) => (
	<button
		type='button'
		disabled={disabled}
		className={`w-full h-9 flex justify-center items-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-green-500 disabled:bg-green-600 ${
			className ?? ''
		}`}
		{...props}
	>
		{isLoading ? <Loader /> : children}
	</button>
)

export default Button
