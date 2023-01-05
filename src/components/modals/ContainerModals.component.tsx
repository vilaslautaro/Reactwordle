import { lazy, Suspense, useCallback } from 'react'
import { statusGame } from '../../types'
import { useStatesModals } from '../../context'
import { getInstructionsStorage, savedInstructionsStorage } from '../../utils'

const InstructionsModal = lazy(
	() => import('./instructions/InstructionsModal.component')
)
const StadisticsModal = lazy(
	() => import('./stadistics/StadisticsModal.component')
)

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
			<Suspense fallback={<span>Cargando...</span>}>
				{stadistics && (
					<StadisticsModal
						onClose={() => closeModal('stadistics')}
						time={time}
						gameStatus={gameStatus}
					/>
				)}
			</Suspense>
			<Suspense fallback={<span>Cargando...</span>}>
				{instructions && (
					<InstructionsModal onClose={() => closeModal('instructions')} />
				)}
			</Suspense>
		</div>
	)
}
