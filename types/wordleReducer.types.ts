import { statusGame } from './index'

export type ACTION_TYPE =
	| { type: 'win'; payload: string }
	| { type: 'lost'; payload: string }
	| { type: 'stadistics'; payload: string }
	| { type: 'continue'; payload: string }
	| { type: 'onInput'; payload: string }
	| { type: 'delete' }
	| { type: 'reset' }

export type INITIAL_STATE = {
	turn: number
	currentWord: string
	completedWords: string[]
	gameStatus: statusGame
}
