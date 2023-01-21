type Props = 'dark' | 'light'

export const savedThemeStorage = (theme: Props) => {
	addClassToHtmlTag(theme)
	localStorage.setItem('theme', JSON.stringify(theme))
}

const addClassToHtmlTag = (theme: Props) => {
	const themeValue = getThemeStorage()
	const htmlTag = document.documentElement.classList

	htmlTag.value === '' ? htmlTag.add(theme) : htmlTag.replace(themeValue, theme)
}

export const getThemeStorage = () => {
	const themeValue: string | null = localStorage.getItem('theme')

	return themeValue ? JSON.parse(themeValue) : false
}
