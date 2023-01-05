import { arrayWords } from '../data'

//This file and function is created with the intention of emulating the call to the api with the words
export const getWords = () => {
	return arrayWords.filter((word: string) => word.length === 5)
}
