import { memo } from 'react'
import { LetterBox } from './LetterBox.component'
import { BoxFlexRow } from './BoxFlexRow.component'

interface CurrentRowProps {
	word: string
}

const CurrentRow = ({ word }: CurrentRowProps) => {
	return (
		<BoxFlexRow>
			{word.split('').map((letter: string, i: number) => {
				return <LetterBox key={i} value={letter} status='edit' />
			})}
			{Array.from(Array(5 - word.length)).map((_: string, i: number) => (
				<LetterBox key={i} value='' status='edit' />
			))}
		</BoxFlexRow>
	)
}

export default memo(CurrentRow)