import { statusGame } from '../../../types'
import { useStatesModals } from '../../context'
import { getInstructionsStorage, savedInstructionsStorage } from '../../utils'
import { StadisticsModal } from './EstadisticsModal.component'
import { InstructionsModal } from './Instructions/InstructionsModal.component'

interface Props {
	time: { minutes: number; seconds: number }
	gameStatus: statusGame
}

export const ModalContainer = ({ time, gameStatus }: Props) => {
	const { stadistics, instructions, setStadistics, setInstructions } =
		useStatesModals()

	const closeModal = (string: string) => {
		if (string === 'instructions') {
			setInstructions(false)
			if (getInstructionsStorage()) {
				savedInstructionsStorage()
			}
		}
		if (string === 'stadistics') {
			setStadistics(false)
		}
	}
	return (
		<>
			{stadistics && (
				<StadisticsModal
					onClose={() => closeModal('stadistics')}
					time={time}
					gameStatus={gameStatus}
				/>
			)}
			{instructions && (
				<InstructionsModal onClose={() => closeModal('instructions')} />
			)}
		</>
	)
}
