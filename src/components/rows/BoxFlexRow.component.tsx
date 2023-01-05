import { FC, ReactNode } from 'react'

interface BoxProps {
	children: ReactNode | ReactNode[]
}

export const BoxFlexRow: FC<BoxProps> = ({ children }) => {
	return (
		<div className='flex flex-row uppercase flex-nowrap'>{children}</div>
	)
}
