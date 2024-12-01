import { tv } from 'tailwind-variants'
import { Footer } from '@/05_shared/ui/Footer'
import { WrapperTable } from '@/03_features/WrapperTable'
import { Header } from '@/05_shared/ui/Header'
import { MainModal } from '@/04_entities/Modal'

const main = tv({
	base: 'w-screen min-h-screen px-6 font-mts flex flex-col',
})

type TableStructureProps = {}

export const TableStructure = ({}: Readonly<TableStructureProps>) => {
	return (
		<main className={main()}>
			<Header />
			<div className='flex flex-col gap-6 flex-1'>
				<WrapperTable />
				<Footer />
			</div>
			<MainModal />
		</main>
	)
}
