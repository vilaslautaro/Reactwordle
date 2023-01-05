import { useCountdown } from '../hooks'

interface Props {
	seconds: number
}

export const Timer = ({ seconds }: Props) => {
	const { time } = useCountdown(seconds)

	return (
		<div>
			<p>SIGUIENTE PALABRA</p>
			<p>
				{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
			</p>
		</div>
	)
}
