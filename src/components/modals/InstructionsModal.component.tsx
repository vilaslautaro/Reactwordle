interface Props {
	onClose: () => void
}

export const InstructionsModal = ({ onClose }: Props) => {
	return (
		<div>
			InstructionsModal
			<button onClick={onClose}>cerrar</button>
		</div>
	)
}
