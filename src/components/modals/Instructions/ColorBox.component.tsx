import { ReactNode } from 'react'

interface PropsBoxColors {
	children: ReactNode | ReactNode[]
}

export const BoxColors = ({ children }: PropsBoxColors) => {
	return (
		<div className='flex items-start justify-between flex-col flex-wrap py-1 sm:py-3 mb-1 sm:mb-2'>
			{children}
		</div>
	)
}
