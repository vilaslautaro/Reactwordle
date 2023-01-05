import { createContext, ReactNode, useContext, useState } from 'react'
import { savedTimeStorage } from '../utils'

interface ContextState {
	word: string
	updatedWord: (word: string, time: number) => void
}

interface ProviderProps {
	children: ReactNode[] | ReactNode
}

const WordNow = createContext({} as ContextState)

export const useWordNow = () => {
	const context = useContext(WordNow)
	if (!context) throw new Error('There is no word provider')
	return context
}

export const WordNowContextProvider = ({ children }: ProviderProps) => {
	const [word, setWord] = useState<string>('')

	const updatedWord = (word: string, time: number) => {
		setWord(word)
		savedTimeStorage(time)
	}

	return (
		<WordNow.Provider value={{ word, updatedWord }}>
			{children}
		</WordNow.Provider>
	)
}

export default WordNow
