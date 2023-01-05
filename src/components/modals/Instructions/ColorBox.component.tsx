import { ReactNode } from 'react'

interface PropsBoxColors {
	children: ReactNode | ReactNode[]
}

export const BoxColors = ({ children }: PropsBoxColors) => {
	return (
		<div className='flex items-start justify-between flex-col flex-wrap py-3 mb-2'>
			{children}
		</div>
	)
}
