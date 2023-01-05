import React, { FC } from 'react'
import { useTheme } from '../../context'
import { Key } from './Key.component'

interface KeyboardProps {
	keys: string[]
	onKeyPressed: (letter: string) => void
}

const Keyboard: FC<KeyboardProps> = ({ keys, onKeyPressed }) => {
	const handleInput = (e: any) => onKeyPressed(e.target.textContent)
	const { theme } = useTheme()

	return (
		<>
			<div className='hidden bg-keyboard-light dark:bg-keyboard-dark pt-8 pb-11 px-9 font-Roboto sm:flex flex-wrap rounded-2xl mx-auto max-w-2xl w-full mt-14 text-light-gray dark:text-white'>
				<div className='flex flex-wrap my-0 mx-auto'>
					{Array.from(Array(10)).map((_, i) => (
						<Key key={i} handleClickKey={handleInput}>
							{keys[i]}
						</Key>
					))}
				</div>
				<div className='flex flex-wrap my-0 mx-auto'>
					{Array.from(Array(10)).map((_, i) => (
						<Key key={i + 10} handleClickKey={handleInput}>
							{keys[i + 10]}
						</Key>
					))}
				</div>
				<div className='flex flex-wrap my-0 mx-auto'>
					<Key size='big' handleClickKey={() => onKeyPressed('ENTER')}>
						ENTER
					</Key>
					{Array.from(Array(7)).map((_, i) => (
						<Key key={i + 20} handleClickKey={handleInput}>
							{keys[i + 20]}
						</Key>
					))}
					<Key size='big' handleClickKey={() => onKeyPressed('BACKSPACE')}>
						<img
							className='text-black'
							src={
								theme === 'dark'
									? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672936888/wordle/union-dark_gxpnd0.png'
									: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672936788/wordle/Union_bbfgqp.png'
							}
							alt='Delete icon'
							aria-label='Borrar letra'
						/>
					</Key>
				</div>
			</div>
		</>
	)
}

export default React.memo(Keyboard)
