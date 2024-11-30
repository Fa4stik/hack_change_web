import { createLazyFileRoute } from '@tanstack/react-router'
import { Landing } from '@/02_pages/Landing'

export const Route = createLazyFileRoute('/')({
	component: RouteComponent,
})

function RouteComponent() {
	return <Landing />
}
