import { LetterBox } from './LetterBox.component'

export const Wordle = () => {
	return (
		<div className='w-full grid place-content-center mx-auto'>
			<div className='mx-auto'>
				<div className='flex flex-row gap-3 uppercase flex-nowrap'>
					<LetterBox value='A' status='correct' />
					<LetterBox value='B' status='present' />
					<LetterBox value='C' status='absent' />
				</div>
			</div>
		</div>
	)
}
