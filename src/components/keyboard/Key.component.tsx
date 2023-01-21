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
			className={`${size === 'big' ? 'w-[41px] sm:w-[56px] md:w-[71px]' : 'w-[28px] sm:w-[36px] md:w-[44px] '}
            bg-keyboard-box dark:bg-light-gray h-[51px] m-0.5 sm:m-1 md:m-1.5 px-1 md:px-2 cursor-pointer rounded
			 text-light-gray dark:text-white flex justify-center items-center font-medium
			 hover:shadow-md dark:hover:bg-opacity-70`}
		>
			<p className='font-semibold text-sm md:text-lg text-center'>{children}</p>
		</button>
	)
}
