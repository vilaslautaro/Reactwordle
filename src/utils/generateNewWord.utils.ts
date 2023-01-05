import { getWords } from '../services/getWords.services'

export const generateNewWord = (number: number) => {
	const words: string[] = getWords()

	// remove accents accents tildes and more
	return words[number].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
