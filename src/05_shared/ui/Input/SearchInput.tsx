import {
	createTheme,
	InputAdornment,
	TextField,
	ThemeProvider,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchInputProps = {
	rounded: '1em' | '4em'
}

export const SearchInput = ({ rounded }: Readonly<SearchInputProps>) => {
	const theme = createTheme({
		typography: {},
		components: {
			MuiOutlinedInput: {
				styleOverrides: {
					root: {
						borderRadius: rounded,
					},
					notchedOutline: {
						borderColor: 'transparent',
					},
				},
			},
			MuiInputBase: {
				styleOverrides: {
					root: {
						backgroundColor: '#F2F3F7',
						color: '#1D2023',
					},
					input: {
						color: '#1D2023',
					},
				},
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<TextField
				placeholder={'Поиск'}
				fullWidth
				size={'small'}
				variant='outlined'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
		</ThemeProvider>
	)
}
