import { FC } from 'react'
import { useStatesModals } from '../../context'
import { useTheme } from '../../hooks'

interface stateThemeValues {
	theme: boolean
	setTheme: (theme: boolean) => void
}

export const Header: FC = () => {
	const { theme, setTheme }: stateThemeValues = useTheme()
	const { setInstructions, setStadistics } = useStatesModals()

	return (
		<header className='flex flex-wrap mx-auto mb-20 py-4 px-3 rounded-2xl row items-center justify-between  bg-white-bg-light dark:bg-bglight-white max-w-2xl max-h-20'>
			<img
				onClick={() => setInstructions(true)}
				src={
					theme
						? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-dark_c3qe1s.png'
						: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-light_grh8cf.png'
				}
				className='cursor-pointer'
				width='27px'
				height='27px'
				alt='Logo instrucciones'
				aria-label='Abrir instrucciones'
			/>
			<p className='text-4xl leading-10 font-semibold text-light-black dark:text-light-white'>
				WORDLE
			</p>
			<div className='flex flex-wrap row items-center justify-around '>
				<button
					className='cursor-pointer mx-1'
					aria-label='Abrir estadisticas'
					onClick={() => setStadistics(true)}
				>
					EST
				</button>
				<button
					className='cursor-pointer'
					aria-label='Cambiar modo de vista'
					onClick={() => setTheme(!theme)}
				>
					{theme ? 'Light' : 'Dark'}
				</button>
			</div>
		</header>
	)
}
