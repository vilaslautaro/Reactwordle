import { WordNowContextProvider, StatesModalsContextProvider } from './context'
import { Wordle } from './components/wordle/Wordle.component'
import { Header } from './components/ui/Header.component'
import { ModalContainer } from './components/modals/ContainerModals.component'

function App() {
	return (
		<StatesModalsContextProvider>
			<WordNowContextProvider>
				<div className='bg-white-bg text-black w-full pt-3 h-full font-Roboto dark:bg-dark-bg dark:text-white'>
					<Header />
					<Wordle />
					<ModalContainer />
				</div>
			</WordNowContextProvider>
		</StatesModalsContextProvider>
	)
}

export default App
