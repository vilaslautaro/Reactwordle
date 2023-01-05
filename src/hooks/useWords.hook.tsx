import { useEffect, useState } from 'react'
import { getWords } from '../services/getWords.services'

export const useGetWords = () => {
	const [words, setWords] = useState<string[]>([''])

	const fetchWords = () => {
		const response = getWords()
		setWords(response)
	}

	useEffect(() => {
		fetchWords()
	}, [])

	return { words }
}
