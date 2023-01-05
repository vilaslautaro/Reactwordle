import { FC } from 'react'
import { ButtonInstructions } from './ButtonInstructions.component'
import { ButtonStadistics } from './ButtonStadistics.component'
import { ToggleTheme } from './ToggleTheme.component'

export const Header: FC = () => {
	return (
		<header className='font-Roboto flex flex-wrap mx-auto mb-5 py-4 mt-14 px-5 rounded-2xl row items-center justify-between  bg-white-bg-light dark:bg-bglight-white max-w-2xl max-h-20'>
			<ButtonInstructions />
			<p className='text-4xl leading-10 font-semibold text-light-black dark:text-light-white'>
				WORDLE
			</p>
			<div className='flex flex-wrap row items-center justify-around '>
				<ButtonStadistics />
				<ToggleTheme />
			</div>
		</header>
	)
}
