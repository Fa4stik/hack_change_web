import { z } from 'zod'

export const EmployeeSchema = z.object({
	department_id: z.number().nullable(),
	division_id: z.number().nullable(),
	email: z.string(),
	first_name: z.string(),
	id: z.number(),
	last_name: z.string(),
	manager_id: z.number().nullable(),
	phone: z.string(),
	position: z.string(),
	role: z.string(),
	unit_id: z.number().nullable(),
})
export const EmployeeArraySchema = EmployeeSchema.array()

export type Employee = z.infer<typeof EmployeeSchema>
export type EmployeeArray = z.infer<typeof EmployeeArraySchema>
