import { FC } from 'react'
import { LetterStatus } from '../../types'

interface LetterProps {
	value: string
	status: LetterStatus
}

export const LetterBox: FC<LetterProps> = ({ value, status }) => {
	const statusLetter =
			  status === 'correct' ? 'bg-green'
			: status === 'present' ? 'bg-yellow'
			: status === 'absent' ? 'bg-gray'
			: 'bg-letter-empty'

	return (
		<input
			type='text'
			inputMode='text'
			readOnly
			value={value}
			className={`text-2xl sm:text-4xl text-center select-none border-none outline-none
				${statusLetter} flex font-bold ml-[9px] mb-[9px] sm:ml-[11px] sm:mb-[11px]
				 w-[50px] sm:w-[76px] h-[50px] sm:h-[76px]
				 text-white items-center justify-center rounded`}
		/>
	)
}
