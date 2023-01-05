import { createContext, ReactNode, useContext, useState } from 'react'
import { getGamesStorage, savedGamesStorage } from '../utils'

interface ContextState {
	games: gamesProps
	updatedGames: (games: gamesProps) => void
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

const GamesStadistics = createContext({} as ContextState)

export const useGamesStadistics = () => {
	const context = useContext(GamesStadistics)
	if (!context) throw new Error('There is no word provider')
	return context
}

export const GamesStadisticsContextProvider = ({ children }: ProviderProps) => {
	const [games, setGames] = useState<gamesProps>(
		() => getGamesStorage() || { won: 0, played: 0 }
	)

	const updatedGames: updatedGamesFn = (newGames) => {
		setGames(newGames)
		savedGamesStorage(newGames)
	}

	return (
		<GamesStadistics.Provider
			value={{
				games,
				updatedGames,
			}}
		>
			{children}
		</GamesStadistics.Provider>
	)
}

export default GamesStadistics
