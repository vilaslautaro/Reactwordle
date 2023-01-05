import { FC } from 'react'
import { LetterStatus } from '../../types'

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
			: status === 'absent'
			? 'bg-gray'
			: 'bg-letter-empty'

	return (
		<div
			className={`${statusLetter} asdflex font-bold ml-[9px] mb-[9px] sm:ml-[11px] sm:mb-[11px] w-[50px] sm:w-[76px] h-[50px] sm:h-[76px] text-white items-center justify-center rounded`}
		>
			<p className='text-2xl sm:text-4xl text-center py-2.5 sm:px-4 sm:py-5'>
				{value}
			</p>
		</div>
	)
}
