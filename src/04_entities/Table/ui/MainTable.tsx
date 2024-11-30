import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { EmptyUser } from '@/05_shared/assets'

type MainTableProps = {}

export const MainTable = ({}: Readonly<MainTableProps>) => {
	return (
		<div className='w-full h-full'>
			<DataGrid
				rows={rows}
				columns={columns}
				sx={{
					borderRadius: '2em',
				}}
			/>
		</div>
	)
}

const columns: GridColDef[] = [
	{
		field: 'avatar',
		headerName: 'Фото',
		headerAlign: 'center',
		flex: 1,
		renderCell: () => (
			<div className='grid place-items-center h-full'>
				<EmptyUser width={40} height={40} />
			</div>
		),
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'name',
		headerName: 'Имя',
		flex: 2,
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'secondName',
		headerName: 'Фамилия',
		flex: 2,
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'thirdName',
		headerName: 'Отчество',
		flex: 2,
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'position',
		headerName: 'Должность',
		flex: 2,
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'unit',
		headerName: 'Название отдела',
		flex: 2,
	},
	{
		headerAlign: 'center',
		align: 'center',
		field: 'department',
		headerName: 'Подразделение',
		flex: 2,
	},
]

const rows: GridRowsProp = [
	{
		id: 1,
		avatar: 'a1',
		name: 'Рамиль',
		secondName: 'Иванов',
		thirdName: 'Сергеевич',
		position: 'Разработчик',
		unit: 'Отдел разработки',
		department: 'Департамент инновационных решений',
	},
	{
		id: 2,
		avatar: 'a2',
		name: 'Анна',
		secondName: 'Петрова',
		thirdName: 'Александровна',
		position: 'Аналитик',
		unit: 'Отдел анализа трендов и технологий',
		department: 'Департамент инновационных решений',
	},
	{
		id: 3,
		avatar: 'a3',
		name: 'Игорь',
		secondName: 'Сидоров',
		thirdName: 'Владимирович',
		position: 'Тестировщик',
		unit: 'Отдел разработки и тестирования инноваций',
		department: 'Департамент инновационных решений',
	},
]
