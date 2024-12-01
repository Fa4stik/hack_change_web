import {
	addEdge,
	Connection,
	Controls,
	Edge,
	Node,
	ReactFlow,
	useEdgesState,
	useNodesState,
} from '@xyflow/react'
import { useEmployee } from '@/04_entities/Api'
import { useCallback, useEffect } from 'react'
import { GraphCard } from '@/04_entities/Graph/ui/GraphCard.tsx'
import '@xyflow/react/dist/style.css'

const initialNodes: Node[] = [
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
]
const initialEdges: Edge[] = [
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

const nodeTypes = { cardEmployee: GraphCard }

type GraphProps = {}

export const GraphThree = ({}: Readonly<GraphProps>) => {
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

	const {
		getEmployee: { data, isSuccess },
	} = useEmployee()

	const onConnect = useCallback(
		(params: Connection) => setEdges(eds => addEdge(params, eds)),
		[setEdges],
	)

	useEffect(() => {
		if (!data || !isSuccess) {
			return
		}

		const levelMap: { [key: number]: number } = {}
		const levelCounts: { [key: number]: number } = {}

		const nodes: Node[] = data.map(employee => {
			const level = employee.manager_id
				? (levelMap[employee.manager_id] || 0) + 1
				: 0
			levelMap[employee.id] = level
			levelCounts[level] = (levelCounts[level] || 0) + 1

			return {
				id: `node-${employee.id}`,
				type: 'cardEmployee',
				data: employee,
				position: { x: (levelCounts[level] - 1) * 300, y: level * 300 },
			}
		})

		const edges: Edge[] = data.flatMap(employee =>
			employee.manager_id
				? [
						{
							id: `edge-${employee.id}-${employee.manager_id}`,
							source: `node-${employee.manager_id}`,
							sourceHandle: `a`,
							target: `node-${employee.id}`,
							targetHandle: `a`,
						},
					]
				: [],
		)

		setEdges(edges)
		setNodes(nodes)
	}, [data, isSuccess])

	return (
		<div className='w-full h-full'>
			<ReactFlow
				nodes={nodes}
				nodeTypes={nodeTypes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
			>
				{/*{import.meta.env.DEV && <DevTools />}*/}
				<Controls />
			</ReactFlow>
		</div>
	)
}
