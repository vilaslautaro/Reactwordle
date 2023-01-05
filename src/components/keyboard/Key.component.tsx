import { FC, ReactNode } from 'react'

interface KeyProps {
	handleClickKey: (e?: any) => void
	children: ReactNode[] | ReactNode
	size?: 'big' | 'small'
}

export const Key: FC<KeyProps> = ({
	size = 'small',
	handleClickKey,
	children,
}) => {
	return (
		<button
			onClick={handleClickKey}
			className={`${size === 'big' ? 'w-20 h-16' : 'w-12 h-16'}
            border-gray-600 bg-gray-600 m-1 cursor-pointer border-none rounded text-white flex justify-center items-center`}
		>
			{children}
		</button>
	)
}
