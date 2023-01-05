interface Props {
	time: { minutes: number; seconds: number }
}

export const Timer = ({ time }: Props) => {
	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='font-normal text-sm sm:text-lg'>SIGUIENTE PALABRA</p>
			<p className='font-bold text-lg sm:text-2xl'>
				{time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
			</p>
		</div>
	)
}
