import { tv } from 'tailwind-variants'
import { Footer } from '@/05_shared/ui/Footer'
import { LeftMenu } from '@/04_entities/LeftMenu'
import { SearchInput } from '@/05_shared/ui/Input'
import { CardThree, MainTable, Three } from '@/04_entities/Table'
import { MultiSelect } from '@/05_shared/ui/Select'
import { useUiStore } from '@/04_entities/Store'

const main = tv({
	base: 'w-screen h-screen p-6 font-mts',
})

type TableStructureProps = {}

export const TableStructure = ({}: Readonly<TableStructureProps>) => {
	const isShowTable = useUiStore(state => state.isShowTable)

	return (
		<main className={main()}>
			<div className='flex flex-col h-full'>
				<div className='flex gap-6'>
					<LeftMenu
						items={[
							{ name: 'Каталог структур', link: '#' },
							{ name: 'Создать структуру', link: '#' },
							{ name: 'Структура организации', link: '#' },
							{ name: 'Импортировать структуру', link: '#' },
						]}
					/>
					<div className='w-4/5 flex flex-col gap-4'>
						<SearchInput />
						{isShowTable ? <MainTable /> : <Three />}
					</div>
					<div className='w-1/5 flex flex-col gap-4'>
						<MultiSelect />
						<CardThree />
					</div>
				</div>
				<Footer />
			</div>
		</main>
	)
}
