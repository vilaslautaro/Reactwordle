import { ACTION_TYPE, INITIAL_STATE, statusGame } from '../../../types'

export const initialState: INITIAL_STATE = {
	turn: 1,
	currentWord: '',
	completedWords: [],
	gameStatus: statusGame.Playing,
}

export default function wordleReducer(
	state: typeof initialState,
	action: ACTION_TYPE
) {
	switch (action.type) {
		case 'win': {
			return {
				...state,
				gameStatus: statusGame.Won,
				completedWords: [...state.completedWords, action.payload.toUpperCase()],
			}
		}
		case 'lost': {
			return {
				...state,
				gameStatus: statusGame.Lost,
				completedWords: [...state.completedWords, action.payload.toUpperCase()],
			}
		}
		case 'continue': {
			return {
				...state,
				completedWords: [...state.completedWords, action.payload.toUpperCase()],
				turn: state.turn + 1,
				currentWord: '',
			}
		}
		case 'onInput': {
			return {
				...state,
				currentWord: state.currentWord + action.payload.toUpperCase(),
			}
		}
		case 'delete': {
			return {
				...state,
				currentWord: state.currentWord.slice(0, -1),
			}
		}
		case 'reset': {
			return (state = initialState)
		}
		default: {
			return state
		}
	}
}
