import { useTheme } from "../../context"

interface stateThemeValues {
	theme: string
	updatedTheme: () => void
}

export const ToggleTheme = () => {
	const { theme, updatedTheme }: stateThemeValues = useTheme()
	return (
		<button
			className='cursor-pointer'
			aria-label='Cambiar modo de vista'
			onClick={() => updatedTheme()}
		>
			{theme === "dark" ? 'Light' : 'Dark'}
		</button>
	)
}
