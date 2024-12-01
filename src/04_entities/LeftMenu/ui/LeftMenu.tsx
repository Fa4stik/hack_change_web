import { tv } from 'tailwind-variants'
import { useEffect, useState } from 'react'
import { useUiStore } from '@/04_entities/Store'

const linkStyles = tv({
	base: 'w-full py-4 hover:bg-footer rounded-lg text-center cursor-pointer text-sm whitespace-nowrap',
	variants: {
		active: {
			true: 'bg-footer',
		},
	},
})

type LinkProps = {
	children: string
	link: string
	isActive?: boolean
	onClick: () => void
}
const Link = ({ link, children, isActive, onClick }: Readonly<LinkProps>) => {
	return (
		<li className={linkStyles({ active: isActive })} onClick={onClick}>
			<a href={link}>{children}</a>
		</li>
	)
}

type LeftMenuProps = {
	items: { name: string; link: string }[]
}

export const LeftMenu = ({ items }: Readonly<LeftMenuProps>) => {
	const [activeItem, setActiveItem] = useState(items[0].name)

	const setBreadcrumb = useUiStore(state => state.setBreadcrumb)

	useEffect(() => {
		setBreadcrumb(activeItem)
	}, [activeItem])

	return (
		<nav className='max-w-56 flex-grow'>
			<ul className='flex flex-col gap-2'>
				{items.map(item => (
					<Link
						key={item.name}
						link={item.link}
						onClick={() => setActiveItem(item.name)}
						isActive={activeItem === item.name}
					>
						{item.name}
					</Link>
				))}
			</ul>
		</nav>
	)
}
