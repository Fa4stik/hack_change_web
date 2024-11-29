export type Department = {
	id: number
	name: string
	parentId: number | null
	createdAt: string
	updatedAt: string
}

export type Employee = {
	id: number
	name: string
	jobPosition: string
	departmentId: number
	skills: string[]
	region: string
	role: string
	managerId: number | null
	createdAt: string
	updatedAt: string
}
