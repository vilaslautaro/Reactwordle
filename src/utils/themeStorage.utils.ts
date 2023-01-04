type Props = 'dark' | 'light'

export const savedThemeStorage = (theme: Props) => {
	const htmlTag = document.documentElement.classList
	const themeValue = getTheme()
	if (htmlTag.value === '') {
		htmlTag.add(theme)
	} else {
		htmlTag.replace(themeValue, theme)
	}
	localStorage.setItem('theme', JSON.stringify(theme))
}

export const getTheme = () => {
	const themeValue: string | null = localStorage.getItem('theme')

	if (themeValue) {
		return JSON.parse(themeValue)
	}
	return false
}
