import { Graph, Table } from '@/05_shared/assets'
import { tv } from 'tailwind-variants'

const button = tv({
	base: 'p-2 rounded-lg ',
	variants: {
		active: {
			true: 'bg-footer',
		},
	},
})

const icons = {
	table: Table,
	graph: Graph,
}

type IconButtonProps = {
	type: 'table' | 'graph'
	isActive?: boolean
	title: string
	onClick: () => void
}

export const IconButton = ({
	type,
	isActive,
	onClick,
	title,
}: Readonly<IconButtonProps>) => {
	const Icon = icons[type]
	return (
		<button
			title={title}
			className={button({ active: isActive })}
			onClick={onClick}
		>
			<Icon />
		</button>
	)
}
