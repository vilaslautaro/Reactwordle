import { render } from '@testing-library/react'
import { LetterBox } from '../components/rows/LetterBox.component'

describe('test component letterbox', () => {
	test('Check whether an existing letter is rendered as correct at the correct position in the solution', () => {
		const { container } = render(<LetterBox value={'A'} status={'correct'} />)
		expect(container.getElementsByClassName('bg-green')).toBeTruthy()
	})

	test('Check if an existing letter in the solution is rendered as present but in incorrect position', () => {
		const { container } = render(<LetterBox value={'A'} status={'present'} />)
		expect(container.getElementsByClassName('bg-yellow')).toBeTruthy()
	})

	test('Check if a letter that does not exist in the solution is rendered as absent', () => {
		const { container } = render(<LetterBox value={'A'} status={'absent'} />)
		expect(container.getElementsByClassName('bg-gray')).toBeTruthy()
	})
})
