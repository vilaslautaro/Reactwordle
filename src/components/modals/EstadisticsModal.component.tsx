import { Timer } from '../Timer.component'

interface Props {
	onClose: () => void
	lost?: boolean
}

export const EstadisticsModal = ({ onClose, lost = false }: Props) => {
	return (
		<div>
			<p>Estadisticas</p>
			<div>
				<div>
					<p>{8}</p>
					<p>Jugadas</p>
				</div>
				<div>
					<p>{2}</p>
					<p>Victorias</p>
				</div>
			</div>
			{lost && <p>La palabra era: {'PERRO'}</p>}
			<Timer seconds={300} />
			<button onClick={onClose}>Aceptar</button>
		</div>
	)
}
