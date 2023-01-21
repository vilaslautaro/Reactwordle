import { render } from '@testing-library/react'
import { LetterBox } from '../components/rows/LetterBox.component'

describe('test component letterbox', () => {
	test('Check whether an existing letter is rendered as correct at the correct position in the solution', () => {
		const { container } = render(<LetterBox value={'A'} status={'correct'} />)
		const classNamesInput = container.firstChild?.className
		expect(classNamesInput).toContain('bg-green')
	})

	test('Check if an existing letter in the solution is rendered as present but in incorrect position', () => {
		const { container } = render(<LetterBox value={'A'} status={'present'} />)
		const classNamesInput = container.firstChild?.className
		expect(classNamesInput).toContain('bg-yellow')
	})

	test('Check if a letter that does not exist in the solution is rendered as absent', () => {
		const { container } = render(<LetterBox value={'A'} status={'absent'} />)
		const classNamesInput = container.firstChild?.className
		expect(classNamesInput).toContain('bg-gray')
	})
})
