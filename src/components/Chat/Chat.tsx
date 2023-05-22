import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/mobx'
import dayjs from 'dayjs'

import { Input, Loader } from '@/components'
import { ContentLayout } from '@/layouts'
import { IoMdSend, IoIosArrowBack } from 'react-icons/io'
import { Steps } from '@/types/stores/stepsStore.types'

const Chat = () => {
	const { chatStore, stepStore } = useStores()
	const [messageText, setMessageText] = useState('')
	const contentRef = useRef<HTMLDivElement>(null)
	const { messages, state, phoneNumber } = chatStore

	const sendMessage = () => {
		chatStore.sendMessage(messageText)
		setMessageText('')
	}

	const goBack = () => {
		stepStore.setStep(Steps.PhoneStep)
	}

	const onChangeMessageText = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setMessageText(target.value)
	}

	const onKeyDownHandler = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key === 'Enter' && state.status !== 'loading') {
			sendMessage()
		}
	}

	useEffect(() => {
		const pollingInterval = setInterval(() => {
			chatStore.getMessage()
		}, 2000)

		return () => {
			clearInterval(pollingInterval)
		}
	}, [chatStore])

	useEffect(() => {
		if (!contentRef.current) return
		if (contentRef.current.scrollTop + contentRef.current.clientHeight !== contentRef.current.scrollHeight - 64) return

		contentRef.current.scrollTop = contentRef.current.scrollHeight
	}, [messages])

	return (
		<ContentLayout>
			<div className='w-[40vw]'>
				<div className='h-[70vh] flex flex-col justify-between'>
					<header className='flex items-center justify-between'>
						<span className='cursor-pointer' onClick={goBack}>
							<IoIosArrowBack size={24} color='gray' />
						</span>
						<p className='text-lg font-black'>{phoneNumber}</p>
					</header>
					<div ref={contentRef} className='h-full overflow-y-auto p-4 flex flex-col'>
						{messages?.map(({ id, isMine, text, timestamp }) => (
							<div
								key={id}
								className={`break-all p-2 rounded-md mb-2 ${
									isMine ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'
								}`}
							>
								<p>{text}</p>
								<p className='text-xs'>{dayjs.unix(timestamp).format('HH:mm')}</p>
							</div>
						))}
					</div>
					<div className='flex items-center justify-center gap-3'>
						<Input
							onChange={onChangeMessageText}
							value={messageText}
							onKeyDown={onKeyDownHandler}
							placeholder='Type a message'
							name='message'
						/>
						{state.status === 'loading' ? (
							<span className='w-[32px]'>
								<Loader />
							</span>
						) : (
							<span onClick={sendMessage} className='cursor-pointer'>
								<IoMdSend size={30} color='gray' />
							</span>
						)}
					</div>
				</div>
			</div>
		</ContentLayout>
	)
}

export default observer(Chat)
