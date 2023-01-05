import { useEffect, useState } from 'react'
import { getTheme, savedThemeStorage } from '../utils'

export const useTheme = () => {
	const valueTheme = getTheme()

	const [theme, setTheme] = useState<boolean>(
		valueTheme === 'dark' ? true : false
	)

	useEffect(() => {
		if (theme) {
			savedThemeStorage('dark')
		} else {
			savedThemeStorage('light')
		}
	}, [theme])

	return { theme, setTheme }
}
