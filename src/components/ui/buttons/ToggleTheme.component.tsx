import { useTheme } from '../../../context'
import '../../../styles/toggle.css'

interface stateThemeValues {
	theme: string
	updatedTheme: () => void
}

export const ToggleTheme = () => {
	const { theme, updatedTheme }: stateThemeValues = useTheme()
	return (
		<>
			<button
				className={`toggle ${theme === 'dark' && 'dark'}`}
				aria-label='Cambiar color de vista'
				onClick={() => updatedTheme()}
			>
				<img
					alt={theme === 'dark' ? 'luna' : 'sol'}
					title={
						theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'
					}
					className=' rounded-3xl shadow-inner shadow-[#00000040] transition'
					width='60px'
					height='30px'
					src={
						theme === 'dark'
							? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672942591/wordle/toggle%20dark/fondo-luna_fh4c4y.png'
							: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672942590/wordle/toggle%20light/fondo-sol_uebmpq.png'
					}
				/>
			</button>
		</>
	)
}
