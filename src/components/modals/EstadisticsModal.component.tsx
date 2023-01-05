interface Props {
	onClose: () => void
}

export const EstadisticsModal = ({ onClose }: Props) => {
	return (
		<div>
			EstadisticsModal
			<button onClick={onClose}>Cerrar</button>
		</div>
	)
}
