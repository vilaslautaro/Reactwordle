import { useTheme } from '../../hooks/useTheme.hook'

interface stateThemeValues {
	theme: boolean
	setTheme: (theme: boolean) => void
}

export const Header = () => {
	const { theme, setTheme }: stateThemeValues = useTheme()

	return (
		<header className='flex flex-wrap mx-auto mb-20 py-4 rounded-2xl row items-center justify-around bg-white-bg-light dark:bg-bglight-white max-w-2xl max-h-20'>
			<img
				src={
					theme
						? 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-dark_c3qe1s.png'
						: 'https://res.cloudinary.com/dn7qsxzdf/image/upload/v1672855406/wordle/pregunta-light_grh8cf.png'
				}
				className='w-27px h-27px'
				width='27px'
				height='27px'
				alt='Logo instrucciones'
				aria-label='Abrir instrucciones'
			/>
			<p className='text-4xl leading-10 font-semibold text-light-black dark:text-light-white'>
				WORDLE
			</p>
			<div className='flex flex-wrap row items-center justify-around '>
				<button>E</button>
				<button onClick={() => setTheme(!theme)}>
					{theme ? 'Dark' : 'Light'}
				</button>
			</div>
		</header>
	)
}
