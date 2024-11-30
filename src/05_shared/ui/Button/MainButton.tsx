import { Button, createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
	palette: {
		primary: {
			main: '#FF002D',
		},
	},
})

type MainButtonProps = {
	onClick: () => void
	children: string
}

export const MainButton = ({
	children,
	onClick,
}: Readonly<MainButtonProps>) => {
	return (
		<ThemeProvider theme={theme}>
			<Button variant='contained' onClick={onClick}>
				{children}
			</Button>
		</ThemeProvider>
	)
}
