import { tv } from 'tailwind-variants'

const footer = tv({
	base: 'w-full flex justify-between px-6 py-4 bg-footer rounded-xl mt-auto',
})

type FooterProps = {}

export const Footer = ({}: Readonly<FooterProps>) => {
	return (
		<footer className={footer()}>
			<p>© 2024 АО «МTC». 18+</p>
			<p>Служба технической поддержки: 8 800 250 09 33. Бесплатно по России.</p>
		</footer>
	)
}
