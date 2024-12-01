import { routeTree } from '../routeTree.gen.ts'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import '@/01_app/styles/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		// Add your custom properties here
		router: typeof router
	}
}

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
