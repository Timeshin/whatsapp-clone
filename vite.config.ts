import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import path from 'path'

export default ({ mode }) => {
	process.env = { ...process.env, NODE_ENV: mode, ...loadEnv(mode, process.cwd()) }

	return defineConfig({
		base: '/whatsapp-clone',
		resolve: {
			alias: {
				'@/styles': path.resolve(__dirname, './src/styles/'),
				'@/types': path.resolve(__dirname, './src/types/'),
				'@/mobx': path.resolve(__dirname, './src/stores/'),
				'@/config': path.resolve(__dirname, './src/config/'),
				'@/services': path.resolve(__dirname, './src/services/'),
				'@/utils': path.resolve(__dirname, './src/utils/'),
				'@/components': path.resolve(__dirname, './src/components/'),
				'@/layouts': path.resolve(__dirname, './src/layouts/')
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
