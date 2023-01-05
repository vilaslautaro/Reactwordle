import { useStatesModals } from '../../context'

export const ButtonStadistics = () => {
	const { setStadistics } = useStatesModals()
	return (
		<button
			className='cursor-pointer mx-1'
			aria-label='Abrir estadisticas'
			onClick={() => setStadistics(true)}
		>
			EST
		</button>
	)
}
