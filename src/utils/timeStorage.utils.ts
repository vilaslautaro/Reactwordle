export const savedTimeStorage = (time: number) => {
	const valueTime = getTimeStorage()
	console.log(valueTime)
	if (valueTime && valueTime < 972) {
		localStorage.setItem('time', JSON.stringify(valueTime + time))
	} else {
		localStorage.setItem('time', JSON.stringify(time))
	}
}

export const getTimeStorage = () => {
	const valueTime = localStorage.getItem('time')
	return valueTime ? JSON.parse(valueTime) : false
}
