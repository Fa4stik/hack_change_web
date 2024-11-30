/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				footer: '#F2F3F7',
				stroke: '#DFDFDF',
				text: '#1D2023',
				link: '#0077DB',
				btn: '#FF002D',
			},
			fontFamily: {
				mts: ['MTS Compact', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
