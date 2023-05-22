import { FC, ReactNode } from 'react'

interface IContentLayout {
	children: ReactNode
}

const ContentLayout: FC<IContentLayout> = ({ children }) => (
	<div className='flex items-center justify-center min-h-screen bg-[#111b21]'>
		<div className='w-fit max-w-[50vw] p-6 m-auto bg-white rounded-md shadow-md'>{children}</div>
	</div>
)

export default ContentLayout
