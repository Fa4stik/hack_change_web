import { Employee } from '@/04_entities/Card'
import { Handle, Position, NodeProps, Node } from '@xyflow/react'

type CardProps = Node<
	Partial<Employee> & {
		name: string
		role: string
		skills: string[]
	},
	'card'
>

export const Card = ({
	data: { name, role, skills },
}: Readonly<NodeProps<CardProps>>) => {
	return (
		<div className='flex flex-col gap-4 border-solid border-2 border-amber-200 rounded-2xl p-4'>
			<Handle type='target' position={Position.Top} id={`a`} isConnectable />
			<h3 className='font-bold'>{name}</h3>
			<p>{role}</p>
			<p className='flex gap-2'>
				{skills.map(skill => (
					<span
						key={skill}
						className='p-1 border-2 border-red-300 border-solid rounded-lg'
					>
						{skill}
					</span>
				))}
			</p>
			<Handle type='source' position={Position.Bottom} id={`a`} isConnectable />
		</div>
	)
}
