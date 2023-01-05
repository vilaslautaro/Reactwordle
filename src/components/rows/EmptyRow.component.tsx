import { LetterBox } from './LetterBox.component'
import { BoxFlexRow } from './BoxFlexRow.component'
import { memo } from 'react'

const EmptyRow = () => {
	return (
		<BoxFlexRow>
			{Array.from(Array(5)).map((_, i) => (
				<LetterBox key={i} value='' status='empty' />
			))}
		</BoxFlexRow>
	)
}

export default memo(EmptyRow)
