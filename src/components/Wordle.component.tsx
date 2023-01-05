import { FC, ReactElement, useEffect, useState } from 'react'
import { LetterBox } from './LetterBox.component'
import { BoxFlexRow } from './ui/BoxFlexRow.component'
import { EmptyRow } from './rows/EmptyRow.component'
import { useWindowEvents } from '../hooks'
import { statusGame } from '../../types'
import { keys } from '../data/keys'
import { CompletedRow } from './rows/CompletedRow.component'
import { CurrentRow } from './rows/CurrentRow.component'

export const Wordle: FC = (): ReactElement => {
	const [wordNow, setWordNow] = useState<string>('holas')
	const [turn, setTurn] = useState<number>(1)
	const [currentWord, setCurrentWord] = useState<string>('')
	const [completedWords, setCompletedWords] = useState<string[]>([])
	const [gameStatus, setGameStatus] = useState<statusGame>(statusGame.Playing)

	const handleKeyDown = (e: KeyboardEvent) => onKeyPressed(e.key.toUpperCase())

	//insert key
	const onInput = (letter: string) =>
		setCurrentWord((currentWord) => currentWord + letter)

	//delete letter of the word
	const onDelete = () =>
		setCurrentWord((currentWord) => currentWord.slice(0, -1))

	const onEnter = async () => {
		//win
		if (currentWord === wordNow) {
			setCompletedWords((completedWords) => [...completedWords, currentWord])
			setGameStatus(statusGame.Won)
			return
		}

		//lost
		if (turn === 6) {
			setCompletedWords((completedWords) => [...completedWords, currentWord])
			setGameStatus(statusGame.Lost)
			return
		}

		//stadistics
		setCompletedWords((completedWords) => [...completedWords, currentWord])
		setTurn((turn) => turn + 1)
		setCurrentWord('')
	}

	const onKeyPressed = (key: string) => {
		if (gameStatus !== statusGame.Playing) return

		if (key === 'BACKSPACE' && currentWord.length > 0) return onDelete()

		if (key === 'ENTER' && currentWord.length === 5 && turn <= 6)
			return onEnter()

		if (currentWord.length >= 5) return

		if (keys.includes(key)) return onInput(key)
	}

	useWindowEvents('keydown', handleKeyDown)

	useEffect(() => {
		setTimeout(() => {
			setWordNow('holis')
		}, 300000)
	})

	return (
		<div className='w-full grid place-content-center mx-auto'>
			<div className='py-10 mx-auto'>
				{completedWords.map((word, i) => (
					<CompletedRow key={i} word={word} solution={wordNow} />
				))}
				{gameStatus === statusGame.Playing && <CurrentRow word={currentWord} />}
				{Array.from(Array(6 - turn)).map((_, i) => (
					<EmptyRow key={i} />
				))}
			</div>
		</div>
	)
}
