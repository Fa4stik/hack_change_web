import { ChevronUp, EmptyUser } from '@/05_shared/assets'
import { tv } from 'tailwind-variants'
import { useEmployee } from '@/04_entities/Api'
import { useEffect, useReducer, useState } from 'react'

const border = tv({
	base: 'border-b-2 border-solid border-footer',
})

const item = tv({
	base: 'col-span-5 row-span-1 flex gap-5 items-center py-3',
	variants: {
		level: {
			2: 'col-span-5 col-start-2',
			3: 'col-span-3 col-start-3',
			4: 'col-span-1 col-start-4',
		},
	},
	extend: border,
})

type UnitProps = {
	name: string
}
const Unit = ({ name }: Readonly<UnitProps>) => {
	return (
		<div className={item({ level: 3 })}>
			<EmptyUser />
			<p className='font-semibold'>{name}</p>
		</div>
	)
}

type DivisionProps = {
	name: string
	units: number[]
}
const Division = ({ name, units }: Readonly<DivisionProps>) => {
	const [isShowUnit, updateShowUnit] = useReducer(x => !x, false)

	return (
		<>
			<div className={item({ level: 2 })} onClick={updateShowUnit}>
				<EmptyUser />
				<p className='font-semibold'>{name}</p>
			</div>
			{isShowUnit &&
				units.map(id => <Unit key={id} name={`Подразделение ${id}`} />)}
		</>
	)
}

type DepartmentProps = {
	name: string
	divisions: number[]
	units: number[]
}
const Department = ({ name, divisions, units }: Readonly<DepartmentProps>) => {
	const [isShowDivisions, updateShowDivision] = useReducer(x => !x, false)

	return (
		<>
			<div className={item()} onClick={updateShowDivision}>
				<ChevronUp />
				<EmptyUser />
				<p className='font-semibold'>{name}</p>
			</div>
			{isShowDivisions &&
				divisions.map(id => (
					<Division key={id} name={`Отдел ${id}`} units={units} />
				))}
		</>
	)
}

type ThreeProps = {}

export const Three = ({}: Readonly<ThreeProps>) => {
	const [departments, setDepartments] = useState<number[]>([])
	const [divisions, setDivisions] = useState<number[]>([])
	const [units, setUnits] = useState<number[]>([])

	const {
		getEmployee: { data, isSuccess },
	} = useEmployee()

	useEffect(() => {
		if (!data || !isSuccess) {
			return
		}

		const departments = new Set<number>()
		const divisions = new Set<number>()
		const units = new Set<number>()

		data.forEach(({ department_id, unit_id, division_id }) => {
			department_id && departments.add(department_id)
			division_id && divisions.add(division_id)
			unit_id && units.add(unit_id)
		})

		setDepartments(Array.from(departments))
		setDivisions(Array.from(divisions))
		setUnits(Array.from(units))
	}, [data, isSuccess])

	return (
		<div className='grid columns-5 grid-rows-5'>
			{departments.map(id => (
				<Department
					key={id}
					name={`Департамент ${id}`}
					divisions={divisions}
					units={units}
				/>
			))}
		</div>
	)
}
