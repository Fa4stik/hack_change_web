import * as React from 'react'
import { Outlet, createRootRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createRootRoute({
	component: RootComponent,
})

function RootComponent() {
	const navigate = useNavigate()

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			e.preventDefault()

			if (e.ctrlKey && e.code === 'KeyL') {
				navigate({ to: '/' })
			}

			if (e.ctrlKey && e.code === 'KeyD') {
				navigate({ to: '/structure/table' })
			}

			if (e.ctrlKey && e.code === 'KeyG') {
				navigate({ to: '/structure/graph' })
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	)
}
