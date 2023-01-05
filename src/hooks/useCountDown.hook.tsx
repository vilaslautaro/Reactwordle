import { useEffect, useState, useCallback } from 'react'
import { useWordNow } from '../context'
import { getTimeStorage } from '../utils'

export const useCountdown = (seconds: number) => {
	const { updatedWord } = useWordNow()
	const [time, setTime] = useState({ minutes: 0, seconds: 0 })
	const [timesTraveled, setTimesTraveled] = useState<number>(
		() => getTimeStorage() | 0
	)

	const updatedTimeTraveled = useCallback(() => {
		if (timesTraveled < 972) {
			setTimesTraveled((time) => time + 1)
		} else {
			setTimesTraveled(0)
		}
	}, [timesTraveled])

	const updatedTime = useCallback(() => {
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
			updatedWord(timesTraveled)
			setTime({ minutes: Math.floor(seconds / 60), seconds: seconds % 60 })
		}
	}, [time])

	useEffect(() => {
		const interval = setInterval(() => {
			updatedTimeTraveled()
			updatedTime()
		}, 1000)
		return () => clearInterval(interval)
	}, [time])

	return { time }
}
