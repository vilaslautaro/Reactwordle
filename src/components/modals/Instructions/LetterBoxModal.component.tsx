import { FC } from "react"
import { LetterStatus } from "../../../../types"

interface LetterProps {
	value: string
	status: LetterStatus
}

export const LetterBoxModal: FC<LetterProps> = ({ value, status }) => {
	const statusLetter =
		status === 'correct'
			? 'bg-green'
			: status === 'present'
			? 'bg-yellow'
			: status === 'absent'
			? 'bg-gray'
			: 'bg-white dark:bg-dark'

	return (
		<div
			className={`${statusLetter} font-Roboto flex font-bold ml-[11px] w-[76px] h-[76px] text-black dark:text-white items-center 
			justify-center rounded border-black dark:border-gray border-2 border-solid`}
		>
			<p className='text-4xl font-bold text-center'>{value}</p>
		</div>
	)
}
