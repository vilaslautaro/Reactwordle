import { getWords } from '../services/getWords.services'

export const generateNewWord = (number: number) => {
	const words: string[] = getWords()

	return words[number].toUpperCase()
}
