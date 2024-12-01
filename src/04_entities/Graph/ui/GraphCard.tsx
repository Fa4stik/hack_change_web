import { Handle, Position, NodeProps, Node } from '@xyflow/react'
import { Employee } from '@/05_shared/model/types.ts'
import { EmptyUser } from '@/05_shared/assets'
import { MainButton } from '@/05_shared/ui/Button'

type CardProps = Node<Employee, 'default'>

export const GraphCard = ({
	data: { first_name, last_name, role },
}: Readonly<NodeProps<CardProps>>) => {
	return (
		<div className='flex flex-col items-center gap-4 border-solid border-2 border-stroke rounded-lg p-6'>
			<Handle type='target' position={Position.Top} id={`a`} isConnectable />
			<EmptyUser />
			<h3 className='font-bold text-xl'>{first_name + ' ' + last_name}</h3>
			<p className='opacity-50'>{role}</p>
			<MainButton onClick={() => {}} color={'gray'}>
				О сотруднике
			</MainButton>
			<Handle type='source' position={Position.Bottom} id={`a`} isConnectable />
		</div>
	)
}
