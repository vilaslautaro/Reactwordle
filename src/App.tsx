import { WordleTwo } from './components/test.component'
import { Header } from './components/ui/Header.component'

function App() {
	return (
		<div className='bg-white-bg text-black w-full pt-20 h-full font-Roboto dark:bg-dark-bg dark:text-white'>
			<Header />
			{/* <Wordle /> */}
			<WordleTwo />
		</div>
	)
}

export default App
