import { LetterBox } from './LetterBox.component'
import { BoxFlexRow } from '../ui/BoxFlexRow.component'

export const EmptyRow = () => {
	return (
		<BoxFlexRow>
			{Array.from(Array(5)).map((_, i) => (
				<LetterBox key={i} value='' status='empty' />
			))}
		</BoxFlexRow>
	)
}
