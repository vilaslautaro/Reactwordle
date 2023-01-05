import {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { getThemeStorage, savedThemeStorage } from '../utils'

interface ContextState {
	theme: string
	updatedTheme: () => void
}

interface ProviderProps {
	children: ReactNode[] | ReactNode
}

const Theme = createContext({} as ContextState)

export const useTheme = () => {
	const context = useContext(Theme)
	if (!context) throw new Error('There is no word provider')
	return context
}

export const ThemeContextProvider = ({ children }: ProviderProps) => {
	const [theme, setTheme] = useState(() => getThemeStorage() || 'light')

	const updatedTheme = useCallback(() => {
		if (theme === 'dark') {
			setTheme('light')
			savedThemeStorage('light')
		} else {
			setTheme('dark')
			savedThemeStorage('dark')
		}
	}, [theme])

	useEffect(() => {
		savedThemeStorage(theme)
	}, [])

	return (
		<Theme.Provider
			value={{
				theme,
				updatedTheme,
			}}
		>
			{children}
		</Theme.Provider>
	)
}

export default Theme
