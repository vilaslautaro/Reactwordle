type Props = 'dark' | 'light'

export const savedInstructionsStorage = () => {
	localStorage.setItem('instructions', JSON.stringify(true))
}

export const getInstructionsStorage = () => {
	const valueInstructions = localStorage.getItem('instructions')

	if (valueInstructions) {
		return false
	}
	return true
}
