import { FC } from 'react'
import { LetterStatus } from '../../../types'

interface LetterProps {
	value: string
	status: LetterStatus
}

export const LetterBox: FC<LetterProps> = ({ value, status }) => {
	const statusLetter =
		status === 'correct'
			? 'bg-green'
			: status === 'present'
			? 'bg-yellow'
			: 'bg-gray'

	return (
		<div
			className={`${statusLetter} flex font-bold ml-[11px] mb-[11px] w-[76px] h-[76px] text-white items-center justify-center rounded`}
		>
			<p className='text-4xl text-center px-4 py-6'>{value}</p>
		</div>
	)
}
