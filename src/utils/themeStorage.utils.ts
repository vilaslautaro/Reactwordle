type Props = 'dark' | 'light'

export const savedThemeStorage = (theme: Props) => {
	addClassToHtmlTag(theme)
	localStorage.setItem('theme', JSON.stringify(theme))
}

const addClassToHtmlTag = (theme: Props) => {
	const themeValue = getThemeStorage()
	const htmlTag = document.documentElement.classList
	if (htmlTag.value === '') {
		htmlTag.add(theme)
	} else {
		htmlTag.replace(themeValue, theme)
	}
}

export const getThemeStorage = () => {
	const themeValue: string | null = localStorage.getItem('theme')

	if (themeValue) {
		return JSON.parse(themeValue)
	}
	return false
}
