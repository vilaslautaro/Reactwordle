import { useGamesStadistics, useWordNow } from '../../../context'
import { statusGame } from '../../../types'
import { usePortal } from '../../../hooks'
import { Timer } from './Timer.component'

interface Props {
	onClose: () => void
	time: { minutes: number; seconds: number }
	gameStatus: statusGame
}

export const StadisticsModal = ({ onClose, time, gameStatus }: Props) => {
	const createPortal = usePortal('modal-stadistics', 'div')
	const { word } = useWordNow()
	const { games } = useGamesStadistics()
	return (
		<>
			{createPortal(
				<div className='w-full fixed left-0 bottom-0 top-0  bg-neutral-800 z-30 flex items-center justify-center bg-white-bg-transparent dark:bg-dark-bg'>
					<div className='bg-white dark:bg-dark dark:text-white mx-5 px-6 sm:px-20 pb-11 pt-12 max-w-lg w-full border-black dark:border-gray border-2 border-solid rounded-2xl'>
						<p className='font-extrabold text-2xl sm:text-4xl text-center mb-10'>
							Estadísticas
						</p>
						<div className='flex flex-row flex-nowrap items-center justify-between mb-12'>
							<div className='flex flex-col items-center justify-center mb-3'>
								<p className='font-extrabold text-2xl sm:text-4xl'>
									{games.played}
								</p>
								<p className='font-normal text-sm sm:text-xl'>Jugadas</p>
							</div>
							<div className='flex flex-col items-center justify-center mb-3'>
								<p className='font-extrabold text-2xl sm:text-4xl'>
									{games.won}
								</p>
								<p className='font-normal text-sm sm:text-xl'>Victorias</p>
							</div>
						</div>
						{gameStatus === statusGame.Lost && (
							<p className='font-normal text-sm sm:text-lg mb-4 text-center'>
								La palabra era: <span className='font-bold'>{word}</span>
							</p>
						)}
						<Timer time={time} />
						<div className='grid place-content-center mx-auto'>
							<button
								className='bg-green font-bold text-lg sm:text-2xl text-white rounded mt-8 w-64 pb-2 pt-1 hover:bg-opacity-90'
								onClick={onClose}
							>
								Aceptar
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
