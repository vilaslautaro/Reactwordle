import { WordNowContextProvider, StatesModalsContextProvider } from './context'
import { Wordle } from './components/wordle/Wordle.component'
import { Header } from './components/ui/Header.component'
import { Timer } from './components/Timer.component'

function App() {
	return (
		<StatesModalsContextProvider>
			<WordNowContextProvider>
				<div className='bg-white-bg text-black w-full pt-20 h-full font-Roboto dark:bg-dark-bg dark:text-white'>
					<Header />
					<Wordle />
					<Timer seconds={10} />
				</div>
			</WordNowContextProvider>
		</StatesModalsContextProvider>
	)
}

export default App
