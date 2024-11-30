import { ChevronUp, EmptyUser } from '@/05_shared/assets'
import { tv } from 'tailwind-variants'

const border = tv({
	base: 'border-b-2 border-solid border-footer',
})

const item = tv({
	base: 'col-span-5 row-span-1 flex gap-5 items-center py-3',
	extend: border,
})

const subItem = tv({
	base: 'col-span-4 col-start-2',
	extend: item,
})

type SubItemProps = {
	name: string
}
const SubItem = ({ name }: Readonly<SubItemProps>) => {
	return (
		<div className={subItem()}>
			<EmptyUser />
			<p className='font-semibold'>{name}</p>
		</div>
	)
}

type ItemProps = {
	name: string
}
const Item = ({ name }: Readonly<ItemProps>) => {
	return (
		<div className={item()}>
			<ChevronUp />
			<EmptyUser />
			<p className='font-semibold'>{name}</p>
		</div>
	)
}

type ThreeProps = {}

export const Three = ({}: Readonly<ThreeProps>) => {
	return (
		<div className='grid columns-5 grid-rows-5'>
			<Item name={'Департамент инновационных решений'} />
			<SubItem name={'Отдел анализа трендов и технологий'} />
			<SubItem name={'Отдел разработки и тестирования инноваций'} />
			<SubItem
				name={'Отдел внедрения и сопровождения инновационных проектов'}
			/>
		</div>
	)
}
