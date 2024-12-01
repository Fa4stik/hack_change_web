import $api from '@/05_shared/lib/baseApi.ts'
import { Employee, EmployeeArraySchema } from '@/05_shared/model/types.ts'

export const getFilters = () =>
	[
		{ key: 'role', name: 'Роль' },
		{
			key: 'last_name',
			name: 'Фамилия',
		},
		{ key: 'first_name', name: 'Имя' },
		{ key: 'position', name: 'Позиция' },
		{ key: 'phone', name: 'Телефон' },
		{ key: 'department_id', name: 'Ид департамента' },
	] satisfies {
		key: keyof Employee
		name: string
	}[]

export const getEmployee = () =>
	$api.get('/employees').then(({ data }) => EmployeeArraySchema.parse(data))
