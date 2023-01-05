import { createContext, ReactNode, useContext, useState } from 'react'
import { getInstructionsStorage } from '../utils'

interface ContextState {
	instructions: boolean
	setInstructions: (value: boolean) => void
	stadistics: boolean
	setStadistics: (value: boolean) => void
}

interface ProviderProps {
	children: ReactNode[] | ReactNode
}

interface updatedGamesFn {
	(games: gamesProps): void
}

interface gamesProps {
	won: number
	played: number
}

const StatesModals = createContext({} as ContextState)

export const useStatesModals = () => {
	const context = useContext(StatesModals)
	if (!context) throw new Error('There is no word provider')
	return context
}

export const StatesModalsContextProvider = ({ children }: ProviderProps) => {
	const [instructions, setInstructions] = useState<boolean>(
		() => getInstructionsStorage() || false
	)
	const [stadistics, setStadistics] = useState<boolean>(false)

	return (
		<StatesModals.Provider
			value={{
				instructions,
				setInstructions,
				stadistics,
				setStadistics,
			}}
		>
			{children}
		</StatesModals.Provider>
	)
}

export default StatesModals
