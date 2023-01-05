import { FC } from 'react'
import { Key } from './Key.component'

interface KeyboardProps {
	keys: string[]
	onKeyPressed: (letter: string) => void
}

export const Keyboard: FC<KeyboardProps> = ({ keys, onKeyPressed }) => {
	const handleInput = (e: any) => onKeyPressed(e.target.textContent)

	return (
		<>
			<div className='flex flex-wrap my-0 mx-auto gap-5px max-w-xl w-full'>
				{Array.from(Array(10)).map((_, i) => (
					<Key key={i} handleClickKey={handleInput}>
						{keys[i]}
					</Key>
				))}
				{Array.from(Array(10)).map((_, i) => (
					<Key key={i + 10} handleClickKey={handleInput}>
						{keys[i + 10]}
					</Key>
				))}
				<Key size='big' handleClickKey={() => onKeyPressed('ENTER')}>
					ENTER
				</Key>
				{Array.from(Array(7)).map((_, i) => (
					<Key key={i + 20} handleClickKey={handleInput}>
						{keys[i + 20]}
					</Key>
				))}
				<Key size='big' handleClickKey={() => onKeyPressed('BACKSPACE')}>
					DEL
				</Key>
			</div>
		</>
	)
}
