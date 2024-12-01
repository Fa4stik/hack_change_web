import { LeftMenu } from '@/04_entities/LeftMenu'
import { SearchInput } from '@/05_shared/ui/Input'
import { CardThree } from '@/04_entities/Table'
import { MultiSelect } from '@/05_shared/ui/Select'
import { MainBreadcrumbs } from '@/04_entities/Breadcrumbs'
import { IconButton } from '@/05_shared/ui/Button'
import { useState } from 'react'
import { GraphThree } from '@/04_entities/Graph'

export const WrapperTable = () => {
	const [activeType, setActiveType] = useState<'table' | 'graph'>('table')

	return (
		<div className='flex gap-6 flex-1'>
			<LeftMenu
				items={[
					{ name: 'Каталог структур', link: '#' },
					{ name: 'Создать структуру', link: '#' },
					{ name: 'Структура организации', link: '#' },
					{ name: 'Импортировать структуру', link: '#' },
				]}
			/>
			<div className='w-full flex flex-col gap-4 mt-4 flex-1'>
				<div className='flex justify-between'>
					<MainBreadcrumbs />
					<div className='flex gap-2'>
						{(
							[
								{ name: 'graph', title: 'Представление в виде графа' },
								{ name: 'table', title: 'Представление в виде таблицы' },
							] as const
						).map(({ name, title }) => (
							<IconButton
								key={name}
								type={name}
								isActive={activeType == name}
								title={title}
								onClick={() => setActiveType(name)}
							/>
						))}
					</div>
				</div>
				<div className='flex gap-4'>
					<div className='w-4/5'>
						<SearchInput rounded={'4em'} />
					</div>
					<div className='w-1/5'>
						<MultiSelect />
					</div>
				</div>
				{activeType === 'table' ? <CardThree /> : <GraphThree />}
			</div>
		</div>
	)
}
