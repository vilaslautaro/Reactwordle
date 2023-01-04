/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		colors: {
			'bg-color-dark': 'rgba(38, 43, 60, 0.89)',
			'bg-color-white': 'rgba(38, 43, 60, 0.89)',
			green: '#6AAA64',
			yellow: '#CEB02C',
			gray: '#939B9F',
			'text-light-gray': '#56575E',
			'text-light-black': '#202537',
			'text-black': '#000000',
			'text-light-white': '#DADCE0',
			'text-white': '#FFFFFF',
		},
		fontFamily: {
			Roboto: ['Roboto', 'Arial', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
