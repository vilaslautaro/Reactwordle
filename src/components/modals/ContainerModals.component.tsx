import { useStatesModals } from '../../context'
import { EstadisticsModal } from './EstadisticsModal.component'
import { InstructionsModal } from './InstructionsModal.component'

export const ModalContainer = () => {
	const { stadistics, instructions, setStadistics, setInstructions } =
		useStatesModals()

	const closeModal = (string: string) => {
		if (string === 'instructions') {
			setInstructions(false)
		}
		if (string === 'stadistics') {
			setStadistics(false)
		}
	}
	return (
		<>
			{stadistics && (
				<EstadisticsModal onClose={() => closeModal('stadistics')} />
			)}
			{instructions && (
				<InstructionsModal onClose={() => closeModal('instructions')} />
			)}
		</>
	)
}
