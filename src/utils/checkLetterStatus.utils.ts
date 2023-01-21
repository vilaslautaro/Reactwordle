import { LetterStatus } from '../types/status.types'

interface propsAndReturn {
	(letter: string, position: number, solution: string): LetterStatus
}

export const checkLetterStatus: propsAndReturn = (
	letter,
	position,
	solution
) => {
	if (solution.includes(letter)) {
		return solution[position] === letter ? 'correct' : 'present'
	} else {
		return 'absent'
	}
}
