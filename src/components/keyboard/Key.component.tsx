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
			className={`${size === 'big' ? 'w-[71px]' : 'w-[44px] '}
            bg-keyboard-box dark:bg-light-gray h-[51px] m-1.5 px-2 cursor-pointer rounded
			 text-light-gray dark:text-white flex justify-center items-center font-medium
			 hover:shadow-md dark:hover:bg-opacity-70`}
		>
			<p className='font-semibold text-lg text-center'>{children}</p>
		</button>
	)
}
