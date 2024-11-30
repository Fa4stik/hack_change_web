import { tv } from 'tailwind-variants'
import LandingSvg from './1440px.svg?react'

const main = tv({
	base: 'w-screen h-screen font-mts flex justify-center ',
})

type LandingProps = {}

export const Landing = ({}: Readonly<LandingProps>) => {
	return (
		<main className={main()}>
			<div className='max-w-screen-2xl'>
				<LandingSvg />
			</div>
		</main>
	)
}
