import { FC } from 'react'
import { ButtonInstructions } from './buttons/ButtonInstructions.component'
import { ButtonStadistics } from './buttons/ButtonStadistics.component'
import { ToggleTheme } from './buttons/ToggleTheme.component'

export const Header: FC = () => {
	return (
		<header
			className='font-Roboto grid grid-cols-3 mx-auto 
		mb-5 py-4 mt-14 px-5 rounded-2xl row items-center
		bg-white-bg-light dark:bg-bglight-white max-w-2xl max-h-20'
		>
			<ButtonInstructions />
			<p
				className='text-4xl leading-10 font-semibold text-light-black dark:text-light-white
			text-center'
			>
				WORDLE
			</p>
			<div className='flex row items-center justify-end'>
				<ButtonStadistics />
				<ToggleTheme />
			</div>
		</header>
	)
}
