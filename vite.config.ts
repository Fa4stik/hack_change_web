import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react',
			svgrOptions: {
				svgoConfig: {
					plugins: [
						'removeXMLNS',
						{
							name: 'removeAttrs',
							params: {
								attrs: 'path:fill',
							},
						},
						{
							name: 'preset-default',
						},
					],
				},
			},
		}),
		TanStackRouterVite(),
	],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: true,
	},
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
