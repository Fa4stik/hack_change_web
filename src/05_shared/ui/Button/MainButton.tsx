import { Button, createTheme, ThemeProvider } from '@mui/material'

type MainButtonProps = {
	onClick: () => void
	children: string
	color?: 'red' | 'gray'
}

export const MainButton = ({
	children,
	onClick,
	color = 'red',
}: Readonly<MainButtonProps>) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: color === 'red' ? '#FF002D' : '#F2F3F7',
			},
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						color: color === 'red' ? 'white' : 'black',
						boxShadow: 'none',
						'&:hover': {
							boxShadow: 'none',
						},
					},
				},
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Button variant='contained' onClick={onClick}>
				<span className='font-bold'>{children}</span>
			</Button>
		</ThemeProvider>
	)
}
