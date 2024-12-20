import {
	createTheme,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Theme,
	ThemeProvider,
} from '@mui/material'
import { useState } from 'react'
import { getFilters } from '@/04_entities/Api/lib/fetchEmployee.ts'

const theme = createTheme({
	typography: {},
	components: {
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					color: '#1D2023',
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

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

function getStyles(name: string, personName: string[], theme: Theme) {
	return {
		fontWeight: personName.includes(name)
			? theme.typography.fontWeightMedium
			: theme.typography.fontWeightRegular,
	}
}

type MultiSelectProps = {}

export const MultiSelect = ({}: Readonly<MultiSelectProps>) => {
	const [personName, setPersonName] = useState<string[]>([])

	const handleChange = (event: SelectChangeEvent<typeof personName>) => {
		const {
			target: { value },
		} = event
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		)
	}

	return (
		<ThemeProvider theme={theme}>
			<Select
				multiple
				value={personName}
				displayEmpty
				onChange={handleChange}
				input={<OutlinedInput label='Фильтры' />}
				MenuProps={MenuProps}
				renderValue={selected => {
					if (selected.length === 0) {
						return <em>Выберите фильтры...</em>
					}

					return selected.join(', ')
				}}
				fullWidth
				size={'small'}
			>
				{getFilters().map(({ name }) => (
					<MenuItem
						key={name}
						value={name}
						style={getStyles(name, personName, theme)}
					>
						{name}
					</MenuItem>
				))}
			</Select>
		</ThemeProvider>
	)
}
