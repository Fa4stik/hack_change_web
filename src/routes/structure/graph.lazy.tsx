import { createLazyFileRoute } from '@tanstack/react-router'
import { GraphStructure } from '@/02_pages/GraphStructure'

export const Route = createLazyFileRoute('/structure/graph')({
	component: RouteComponent,
})

function RouteComponent() {
	return <GraphStructure />
}
