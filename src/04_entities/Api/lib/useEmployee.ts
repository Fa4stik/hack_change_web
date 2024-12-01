import { getEmployee } from '@/04_entities/Api/lib/fetchEmployee.ts'
import { useQuery } from '@tanstack/react-query'

export const useEmployee = () => ({
	getEmployee: useQuery({
		queryKey: ['getEmployee'],
		queryFn: getEmployee,
	}),
})
