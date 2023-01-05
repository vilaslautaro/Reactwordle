import { WordleTwo } from './components/wordle/test.component'
import Timer from './components/Timer.component'
import { Header } from './components/ui/Header.component'
import { WordNowContextProvider } from './context/wordNow.context'

function App() {
	return (
		<WordNowContextProvider>
			<div className='bg-white-bg text-black w-full pt-20 h-full font-Roboto dark:bg-dark-bg dark:text-white'>
				<Header />
				{/* <Wordle /> */}
				<WordleTwo />
				<Timer seconds={300} />
			</div>
		</WordNowContextProvider>
	)
}

export default App
