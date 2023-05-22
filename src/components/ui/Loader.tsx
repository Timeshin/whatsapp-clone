import { FC } from 'react'

interface ILoader {
	size?: number
}

const Loader: FC<ILoader> = ({ size = 25 }) => (
	<div
		style={{ width: `${size}px`, height: `${size}px` }}
		className='inline-block h-8 w-8 animate-spin rounded-full border-4 text-gray-400 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
		role='status'
	/>
)

export default Loader
