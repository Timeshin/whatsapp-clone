import './styles/globals.css'

const App = () => (
	<div className='flex items-center justify-center min-h-screen bg-[#111b21]'>
		<div className='w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-md'>
			<h1 className='text-3xl font-semibold text-center text-green-800'>WhatsApp</h1>

			<form className='mt-6'>
				<div>
					<label className='block text-sm text-gray-600'>IdInstance</label>
					<input
						type='text'
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200'
					/>
				</div>

				<div className='mt-4'>
					<label className='block text-sm text-gray-600'>ApiTokenInstance</label>
					<input
						type='password'
						className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200'
					/>
				</div>

				<div className='mt-6'>
					<button
						type='submit'
						className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform rounded-md bg-green-600 hover:bg-green-500 focus:outline-none focus:bg-green-500'
					>
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
)

export default App
