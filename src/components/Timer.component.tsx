import { useCountdown } from '../hooks'

interface Props {
	seconds: number
}

const Timer = ({ seconds }: Props) => {
	const { time } = useCountdown(seconds)

	return (
		<div>
			{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
		</div>
	)
}

export default Timer
