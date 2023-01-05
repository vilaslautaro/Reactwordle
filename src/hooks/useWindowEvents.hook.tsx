import { useEffect } from 'react'

interface PropsAndReturn {
	(eventName: keyof WindowEventMap, callBack: (e: any) => void): void
}

export const useWindowEvents: PropsAndReturn = (eventName, callBack) => {
	useEffect(() => {
		window.addEventListener(eventName, callBack)

		return () => window.removeEventListener(eventName, callBack)
	}, [eventName, callBack])
}
