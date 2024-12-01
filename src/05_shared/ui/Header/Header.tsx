import Logo from './logo.svg?react'
import { SearchInput } from '@/05_shared/ui/Input'
import { EmptyUser } from '@/05_shared/assets'
import { tv } from 'tailwind-variants'
import { useState } from 'react'

const borderAnimation = tv({
	base: 'after:hover:translate-x-0 after:transition-all after:duration-300',
})

const borderAfter = tv({
	base: 'after:opacity-60 after:-translate-x-full after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-btn after:rounded-lg',
	extend: borderAnimation,
})

const border = tv({
	base: 'font-bold relative py-6 overflow-hidden',
	extend: borderAfter,
	variants: {
		active: {
			true: 'after:translate-x-0 after:opacity-100',
		},
	},
})

const items = [
	{ name: 'Главная', link: '#' },
	{ name: 'Структура организации', link: '#' },
	{ name: 'Документация', link: '#' },
	{ name: 'Форум', link: '#' },
	{ name: 'Cтатистика', link: '#' },
	{ name: 'Поддержка', link: '#' },
]

export const Header = () => {
	const [activeItem, setActiveItem] = useState(items[0].name)

	return (
		<header className='flex justify-between px-20 items-center shadow-lg -mx-6 mb-6'>
			<div>
				<Logo />
			</div>
			<div>
				<ul className='flex gap-4'>
					{items.map(item => (
						<li
							key={item.name}
							className={border({ active: activeItem === item.name })}
							onClick={() => setActiveItem(item.name)}
						>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
				</ul>
			</div>
			<div className='flex items-center gap-2'>
				<SearchInput rounded={'1em'} />
				<EmptyUser />
			</div>
		</header>
	)
}
