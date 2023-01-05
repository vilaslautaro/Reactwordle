import { FC } from 'react'
import { useStatesModals, useTheme } from '../../../context'

interface stateThemeValues {
	theme: string
}

export const ButtonInstructions: FC = () => {
	const { theme }: stateThemeValues = useTheme()
	const { setInstructions } = useStatesModals()
	return (
		<img
			onClick={() => setInstructions(true)}
			src={
				theme === "dark" 
					? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-dark_c3qe1s.png'
					: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-light_grh8cf.png'
			}
			title="Instrucciones"
			className='cursor-pointer'
			width='27px'
			height='27px'
			alt='Logo instrucciones'
			aria-label='Abrir instrucciones'
		/>
	)
}
