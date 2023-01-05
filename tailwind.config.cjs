/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		colors: {
			'dark-bg': '#262B3CE3',
			'dark': '#262B3C',
			'white-bg': '#E5E5E5',
			'white-bg-light': '#F3F3F3',
			'white-bg-transparent': '#F3F3F3e3',
			green: '#6AAA64',
			yellow: '#CEB02C',
			gray: '#939B9F',
			'light-gray': '#56575E',
			'light-black': '#202537',
			black: '#000000',
			'light-white': '#DADCE0',
			'bglight-white': '#DADCE008',
			white: '#FFFFFF',
			'letter-empty': '#939B9F4D',
			'letter-light': '#818181',
			'letter-dark': '#565F7E',
		},
		fontFamily: {
			Roboto: ['Roboto', 'Arial', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
}
