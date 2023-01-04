import { Header } from './components/ui/Header.component'
import { Wordle } from './components/Wordle.component'

function App() {
	return (
		<div className='bg-white-bg text-black w-full pt-20 h-screen font-Roboto dark:bg-dark-bg dark:text-white'>
			<Header />
			<Wordle />
		</div>
	)
}

export default App
