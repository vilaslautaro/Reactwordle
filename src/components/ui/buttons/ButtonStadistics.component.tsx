import { useStatesModals, useTheme } from "../../../context"

export const ButtonStadistics = () => {
	const { setStadistics } = useStatesModals()
	const { theme } = useTheme()

	return (
		<button
			className='cursor-pointer mr-3 sm:mr-5'
			aria-label='Abrir estadisticas'
			onClick={() => setStadistics(true)}
		>
			<img
				src={
					theme === 'dark'
						? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672946132/wordle/estadistica/estadistica_dark_vtkuzi.png'
						: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672946207/wordle/estadistica/estadistica_light_lfr8od.png'
				}
				alt='boton estadisticas '
				className='rounded transition '
				width='30'
				height='24px'
				aria-label='Estadisticas'
				title='Estadisticas'
			/>
		</button>
	)
}
