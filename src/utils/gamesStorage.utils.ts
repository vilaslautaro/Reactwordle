type Props = { won: number; played: number }

export const savedGamesStorage = (games: Props) => {
	localStorage.setItem('games', JSON.stringify(games))
}

export const getGamesStorage = () => {
	const gamesValue: string | null = localStorage.getItem('games')

	if (gamesValue) {
		return JSON.parse(gamesValue)
	}
	return false
}
