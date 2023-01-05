import { ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export const usePortal = (id: string, element: string) => {
	const modalContainer = useRef<HTMLElement | Element | null>(null)
	const divApp = document.getElementById('root')

	if (modalContainer.current === null && typeof document !== 'undefined') {
		const createModal = document.createElement(element)
		createModal.setAttribute('id', id)
		modalContainer.current = createModal
	}

	useEffect(() => {
		const refModal = modalContainer.current
		if (!refModal || typeof document === 'undefined') {
			return
		}
		if (divApp) {
			divApp.parentNode?.insertBefore(refModal, divApp)
		}
		return () => {
			document.getElementById(id)?.remove()
		}
	}, [])

	return (children: ReactNode | ReactNode[]) =>
		modalContainer.current && createPortal(children, modalContainer.current)
}
