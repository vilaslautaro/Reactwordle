import { useCallback } from 'react'
import { statusGame } from '../../types'
import { useStatesModals } from '../../context'
import { getInstructionsStorage, savedInstructionsStorage } from '../../utils'
import { StadisticsModal } from './stadistics/StadisticsModal.component'
import { InstructionsModal } from './instructions/InstructionsModal.component'

interface Props {
	time: { minutes: number; seconds: number }
	gameStatus: statusGame
}

export const ModalContainer = ({ time, gameStatus }: Props) => {
	const { stadistics, instructions, setStadistics, setInstructions } =
		useStatesModals()

	const closeModal = useCallback((value: string) => {
		if (value === 'instructions') {
			setInstructions(false)
			if (getInstructionsStorage()) {
				savedInstructionsStorage()
			}
		}
		if (value === 'stadistics') {
			setStadistics(false)
		}
	}, [])

	return (
		<div className='font-Roboto z-20'>
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
		</div>
	)
}
