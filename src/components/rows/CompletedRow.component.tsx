import { FC, memo } from 'react'
import { checkLetterStatus } from '../../utils'
import { LetterBox } from './LetterBox.component'
import { BoxFlexRow } from './BoxFlexRow.component'

interface RowProps {
	word: string
	solution: string
}

const CompletedRow: FC<RowProps> = ({ word, solution }) => {
	return (
		<BoxFlexRow>
			{Array.from(Array(5)).map((_, i: number) => (
				<LetterBox
					key={i}
					value={word[i]}
					status={checkLetterStatus(word[i], i, solution)}
				/>
			))}
		</BoxFlexRow>
	)
}

export default memo(CompletedRow)
