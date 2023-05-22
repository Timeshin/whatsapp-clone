import { FC, FormHTMLAttributes, ReactNode } from 'react'
import { IButton as ICustomButtonProps } from '../ui/Button'
import { Input as CustomInputProps } from '../ui/Input'

export interface IForm extends FormHTMLAttributes<HTMLFormElement> {
	children: ReactNode
}

interface ITitle {
	children: ReactNode
}

interface IInput extends CustomInputProps {
	children: ReactNode
}

interface IButton extends ICustomButtonProps {
	children: ReactNode
}

interface IError {
	children: ReactNode
}

export interface IFormComponent extends FC<IForm> {
	Title: FC<ITitle>
	Input: FC<IInput>
	Button: FC<IButton>
	Error: FC<IError>
}
