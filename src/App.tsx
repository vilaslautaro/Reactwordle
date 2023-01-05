import { Wordle } from './components/wordle/Wordle.component'
import { Header } from './components/ui/Header.component'
import {
	GamesStadisticsContextProvider,
	StatesModalsContextProvider,
	WordNowContextProvider,
} from './context'

function App() {
	return (
		<WordNowContextProvider>
			<GamesStadisticsContextProvider>
				<StatesModalsContextProvider>
					<div className='bg-white-bg text-black w-full pt-3 h-full font-Roboto dark:bg-dark-bg dark:text-white'>
						<Header />
						<Wordle />
					</div>
				</StatesModalsContextProvider>
			</GamesStadisticsContextProvider>
		</WordNowContextProvider>
	)
}

export default App
