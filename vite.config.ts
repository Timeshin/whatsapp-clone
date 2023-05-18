import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default ({ mode }) => {
	process.env = { ...process.env, NODE_ENV: mode, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: '',
		resolve: {
			alias: {
				'@/variables': path.resolve(__dirname, './src/styles/_variables.scss')
			}
		},
		plugins: [react()],
		server: {
			host: true,
			strictPort: false,
			port: 3000
		},
		define: {
			'process.env': process.env
		}
	})
}
