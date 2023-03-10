export const savedTimeTraveledStorage = (time: number) => {
	const valueTime = getTimeTraveledStorage()
	valueTime && valueTime < 972
		? localStorage.setItem('time', JSON.stringify(valueTime + 1))
		: localStorage.setItem('time', JSON.stringify(time))
}

export const getTimeTraveledStorage = () => {
	const valueTime = localStorage.getItem('time')
	return valueTime ? JSON.parse(valueTime) : false
}
