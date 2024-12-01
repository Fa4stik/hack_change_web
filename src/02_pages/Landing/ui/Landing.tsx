import { tv } from 'tailwind-variants'
import Header from './01_header.svg?react'
import Intro from './02_introduction.svg?react'
import Cards from './03_cards.svg?react'
import areas from './04_areas.png'
import Communication from './05_communication.svg?react'
import Benefits from './07_benefits.svg?react'
import Console from './08_console.svg?react'
import Sales from './09_sales.svg?react'
import Trial from './10_trial.svg?react'
import Faq from './11_faq.svg?react'
import Collab from './12_collab.svg?react'
import Footer from './13_footer.svg?react'

const main = tv({
	base: 'w-screen min-h-screen font-mts bg-footer',
})

type LandingProps = {}

export const Landing = ({}: Readonly<LandingProps>) => {
	return (
		<main className={main()}>
			<div className='max-w-screen-2xl mx-auto bg-footer flex flex-col gap-20'>
				<Header className={'w-full flex justify-center'} />
				<Intro className={'w-full flex justify-center'} />
				<Cards className={'w-full flex justify-center'} />
				<img
					src={areas}
					alt='areas'
					className='max-w-[1440px] object-contain px-32'
				/>
				<Communication className={'w-full flex justify-center -my-24'} />
				{/*<Mobile />*/}
				<Benefits className={'w-full flex justify-center -mt-32'} />
				<Console className={'w-full flex justify-center'} />
				<Sales className={'w-full flex justify-center px-32 -my-10'} />
				<Trial className={'w-full flex justify-center px-32 -my-10'} />
				<Faq className={'w-full flex justify-center -my-10'} />
				<Collab className={'w-full flex justify-center -my-20'} />
				<Footer className={'w-full flex justify-center'} />
			</div>
		</main>
	)
}
