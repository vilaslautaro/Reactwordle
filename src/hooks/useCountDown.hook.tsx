import { useEffect, useState } from 'react'
import { useWordNow } from '../context/wordNow.context'
import { generateNewWord, getTimeStorage } from '../utils'

export const useCountdown = (seconds: number) => {
	const [time, setTime] = useState({ minutes: 0, seconds: 0 })
	const [timesTraveled, setTimesTraveled] = useState<number>(() => getTimeStorage() | 0)
	const { updatedWord } = useWordNow()

	useEffect(() => {
		const interval = setInterval(() => {
			if (timesTraveled < 972) {
				setTimesTraveled((time) => time + 1)
			} else {
				setTimesTraveled(0)
			}
			if (time.seconds > 0) {
				setTime((prevTime) => ({
					...prevTime,
					seconds: prevTime.seconds - 1,
				}))
			} else if (time.minutes > 0) {
				setTime((prevTime) => ({
					...prevTime,
					minutes: prevTime.minutes - 1,
					seconds: 59,
				}))
			} else {
				const newWord = generateNewWord(timesTraveled)
				updatedWord(newWord, timesTraveled)
				setTime({ minutes: Math.floor(seconds / 60), seconds: seconds % 60 })
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [time])

	return { time }
}
