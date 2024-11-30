import { routeTree } from '../routeTree.gen.ts'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import '@/01_app/styles/index.css'

const router = createRouter({ routeTree, basepath: '/hack_change_web' })

declare module '@tanstack/react-router' {
	interface Register {
		// Add your custom properties here
		router: typeof router
	}
}

function App() {
	return <RouterProvider router={router} />
}

export default App
