export const savedTimeStorage = (time: number) => {
	const valueTime = getTimeStorage()
	if (valueTime && valueTime < 972) {
		localStorage.setItem('time', JSON.stringify(valueTime + 1))
	} else {
		localStorage.setItem('time', JSON.stringify(time))
	}
}

export const getTimeStorage = () => {
	const valueTime = localStorage.getItem('time')
	return valueTime ? JSON.parse(valueTime) : false
}
