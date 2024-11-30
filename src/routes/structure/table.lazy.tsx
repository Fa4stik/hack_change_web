import { createLazyFileRoute } from '@tanstack/react-router'
import { TableStructure } from '@/02_pages/TableStructure/ui/TableStructure.tsx'

export const Route = createLazyFileRoute('/structure/table')({
	component: RouteComponent,
})

function RouteComponent() {
	return <TableStructure />
}
