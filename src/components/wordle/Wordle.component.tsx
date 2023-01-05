import { FC, useCallback, useEffect, useReducer } from 'react'
import { useWordNow, useGamesStadistics, useStatesModals } from '../../context'
import { useCountdown, useWindowEvents } from '../../hooks'
import wordleReducer, { initialState } from './wordleReducer.reducer'
import { EmptyRow, CompletedRow, CurrentRow } from '../rows'
import { ModalContainer } from '../modals/ContainerModals.component'
import { Keyboard } from '../keyboard/Keyboard.component'
import { statusGame } from '../../../types'
import { keys } from '../../data'

export const Wordle: FC = () => {
	const { time } = useCountdown(300)
	const { word: wordNow } = useWordNow()
	const { updatedGames, games } = useGamesStadistics()
	const { setStadistics } = useStatesModals()

	const [{ completedWords, turn, currentWord, gameStatus }, dispatchWordle] =
		useReducer(wordleReducer, initialState)

	const onEnter = useCallback(() => {
		if (currentWord === wordNow) {
			updatedGames({ won: games.won + 1, played: games.played + 1 })
			dispatchWordle({ type: 'win', payload: currentWord })
			setStadistics(true)
			return
		}

		if (turn === 6) {
			updatedGames({ won: games.won, played: games.played + 1 })
			setStadistics(true)
			return dispatchWordle({ type: 'lost', payload: currentWord })
		}

		dispatchWordle({ type: 'continue', payload: currentWord })
	}, [currentWord, wordNow, turn])

	const handleKeyDown = (e: KeyboardEvent) => onKeyPressed(e.key.toUpperCase())

	const onKeyPressed = useCallback(
		(key: string) => {
			if (gameStatus !== statusGame.Playing) return

			if (key === 'BACKSPACE' && currentWord.length > 0)
				return dispatchWordle({ type: 'delete' })

			if (currentWord.length >= 5) return

			if (keys.includes(key))
				return dispatchWordle({ type: 'onInput', payload: key })
		},
		[gameStatus, currentWord, turn]
	)

	useEffect(() => {
		dispatchWordle({ type: 'reset' })
	}, [wordNow])

	useEffect(() => {
		if (currentWord.length === 5 && turn <= 6) return onEnter()
	}, [currentWord, turn])

	useWindowEvents('keydown', handleKeyDown)

	return (
		<div className='w-full grid place-content-center mx-auto '>
			<div className='pt-10 mx-auto'>
				{completedWords.map((word, i) => (
					<CompletedRow key={i} word={word} solution={wordNow} />
				))}
				{gameStatus === statusGame.Playing && <CurrentRow word={currentWord} />}
				{Array.from(Array(6 - turn)).map((_, i) => (
					<EmptyRow key={i} />
				))}
			</div>
			<div className='mx-auto pb-24'>
				<Keyboard keys={keys} onKeyPressed={onKeyPressed} />
			</div>
			<ModalContainer time={time} gameStatus={gameStatus} />
		</div>
	)
}
