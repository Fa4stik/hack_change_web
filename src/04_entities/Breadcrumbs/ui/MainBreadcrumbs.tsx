import { Breadcrumbs, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { useUiStore } from '@/04_entities/Store'

type MainBreadcrumbsProps = {}

export const MainBreadcrumbs = ({}: Readonly<MainBreadcrumbsProps>) => {
	const breadcrumbs = useUiStore(state => state.breadcrumbs)
	return (
		<Breadcrumbs
			separator={<NavigateNextIcon fontSize='small' />}
			aria-label='breadcrumb'
		>
			{breadcrumbs.map(b => (
				<Typography key='3' sx={{ color: 'text.primary' }}>
					{b}
				</Typography>
			))}
		</Breadcrumbs>
	)
}
