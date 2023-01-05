import { Wordle } from './components/Wordle.component'
import { Header } from './components/ui/Header.component'
import {
	GamesStadisticsContextProvider,
	StatesModalsContextProvider,
	ThemeContextProvider,
	WordNowContextProvider,
} from './context'

function App() {
	return (
		<ThemeContextProvider>
			<WordNowContextProvider>
				<GamesStadisticsContextProvider>
					<StatesModalsContextProvider>
						<div className='bg-white-bg text-black w-full pt-1 h-screen sm:h-full font-Roboto dark:bg-dark dark:text-white'>
							<Header />
							<Wordle />
						</div>
					</StatesModalsContextProvider>
				</GamesStadisticsContextProvider>
			</WordNowContextProvider>
		</ThemeContextProvider>
	)
}

export default App
