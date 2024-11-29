import '@/01_app/styles/index.css'
import { tv } from 'tailwind-variants'
import '@xyflow/react/dist/style.css'
import {
	addEdge,
	Connection,
	Controls,
	MiniMap,
	ReactFlow,
	useEdgesState,
	useNodesState,
	Node,
	Edge,
} from '@xyflow/react'
import { useCallback, useEffect } from 'react'
import { Card } from '@/04_entities/Card'
import { mockEmployees } from '@/05_shared/mock/structure.ts'

const main = tv({
	base: 'w-screen h-screen',
})

export const initialNodes: Node[] = [
	{
		id: 'node-1',
		type: 'cardEmployee',
		data: {
			name: 'Name',
			role: 'Role',
			skills: ['skill'],
		},
		position: { x: 150, y: 0 },
	},
	{
		id: 'node-2',
		type: 'cardEmployee',
		data: {
			name: 'Name',
			role: 'Role',
			skills: ['skill'],
		},
		position: { x: 0, y: 150 },
	},
	{
		id: 'node-3',
		type: 'cardEmployee',
		data: {
			name: 'Name',
			role: 'Role',
			skills: ['skill'],
		},
		position: { x: 300, y: 150 },
	},
]
export const initialEdges: Edge[] = [
	{
		id: 'e1-2',
		source: 'node-1',
		sourceHandle: 'a',
		target: 'node-2',
		targetHandle: 'a',
	},
	{
		id: 'e1-3',
		source: 'node-1',
		sourceHandle: 'a',
		target: 'node-3',
		targetHandle: 'a',
	},
]

const nodeTypes = { cardEmployee: Card }

function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

	const onConnect = useCallback(
		(params: Connection) => setEdges(eds => addEdge(params, eds)),
		[setEdges],
	)

	useEffect(() => {
		const levelMap: { [key: number]: number } = {}
		const levelCounts: { [key: number]: number } = {}

		const nodes: Node[] = mockEmployees.map(employee => {
			const level = employee.managerId
				? (levelMap[employee.managerId] || 0) + 1
				: 0
			levelMap[employee.id] = level
			levelCounts[level] = (levelCounts[level] || 0) + 1

			return {
				id: `node-${employee.id}`,
				type: 'cardEmployee',
				data: {
					name: employee.name,
					role: employee.role,
					skills: employee.skills,
				},
				position: { x: (levelCounts[level] - 1) * 300, y: level * 200 },
			}
		})

		const edges: Edge[] = mockEmployees.flatMap(employee =>
			employee.managerId
				? [
						{
							id: `edge-${employee.id}-${employee.managerId}`,
							source: `node-${employee.managerId}`,
							sourceHandle: `a`,
							target: `node-${employee.id}`,
							targetHandle: `a`,
						},
					]
				: [],
		)

		console.log(edges)

		setEdges(edges)
		setNodes(nodes)
	}, [])

	return (
		<main className={main()}>
			<ReactFlow
				nodes={nodes}
				nodeTypes={nodeTypes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				<Controls />
				<MiniMap />
			</ReactFlow>
		</main>
	)
}

export default App
