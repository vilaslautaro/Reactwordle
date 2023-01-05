import { usePortal } from '../../../hooks/usePortal.hook'
import { BoxColors } from './ColorBox.component'
import { LetterBoxModal } from './LetterBoxModal.component'

interface PropsModal {
	onClose: () => void
}

const InstructionsModal = ({ onClose }: PropsModal) => {
	const createPortal = usePortal('modal-instructions', 'div')

	return (
		<>
			{createPortal(
				<div className='w-full fixed top-0 bottom-0 left-0 bg-neutral-800 z-30 flex items-center justify-center bg-white-bg-transparent dark:bg-dark-bg '>
					<div className='bg-white dark:bg-dark dark:text-white mx-3 2xl:mx-0 px-2 2xl:px-6 py-1.5 2xl:py-3 max-w-lg w-full border-black dark:border-gray border-2 border-solid rounded-2xl'>
						<p className='font-extrabold text-2xl 2xl:text-4xl text-center pt-1 2xl:pt-2 pb-2 2xl:pb-4'>
							Cómo jugar
						</p>
						<div className='font-normal text-xs min-[450px]:text-sm 2xl:text-lg'>
							<p className='pb-0.5 2xl:pb-1'>
								Adivina la palabra oculta en cinco intentos.
							</p>
							<p className='pb-0.5 2xl:pb-1'>
								Cada intento debe ser una palabra válida de 5 letras.
							</p>
							<p className='pb-1 2xl:pb-2'>
								Después de cada intento el color de las letras cambia para
								mostrar qué tan cerca estás de acertar la palabra.
							</p>
						</div>
						<p className='font-bold text-xs min-[450px]:text-sm 2xl:text-lg'>Ejemplos</p>
						<BoxColors>
							<div className='flex items-center justify-center flex-row flex-wrap mb-2 2xl:mb-4'>
								<LetterBoxModal value='G' status='correct' />
								<LetterBoxModal value='A' status='edit' />
								<LetterBoxModal value='T' status='edit' />
								<LetterBoxModal value='O' status='edit' />
								<LetterBoxModal value='S' status='edit' />
							</div>
							<p className='font-normal text-xs min-[450px]:text-sm 2xl:text-lg'>
								La letra <span className='font-bold'>G</span> está en la palabra
								y en la posición correcta.
							</p>
						</BoxColors>
						<BoxColors>
							<div className='flex items-center justify-center flex-row flex-wrap  mb-2 2xl:mb-4'>
								<LetterBoxModal value='V' status='edit' />
								<LetterBoxModal value='O' status='edit' />
								<LetterBoxModal value='C' status='present' />
								<LetterBoxModal value='A' status='edit' />
								<LetterBoxModal value='L' status='edit' />
							</div>
							<p className='font-normal text-xs min-[450px]:text-sm 2xl:text-lg'>
								La letra <span className='font-bold text-left'>C</span> está en
								la palabra pero en la posición incorrecta.
							</p>
						</BoxColors>
						<BoxColors>
							<div className='flex items-center justify-center flex-row flex-wrap  mb-2 2xl:mb-4'>
								<LetterBoxModal value='C' status='edit' />
								<LetterBoxModal value='A' status='edit' />
								<LetterBoxModal value='N' status='edit' />
								<LetterBoxModal value='T' status='edit' />
								<LetterBoxModal value='O' status='absent' />
							</div>
							<p className='font-normal text-xs min-[450px]:text-sm 2xl:text-lg'>
								La letra <span className='font-bold'>O</span> no está en la
								palabra.
							</p>
						</BoxColors>
						<p className='font-normal text-xs min-[450px]:text-sm 2xl:text-lg py-2 2xl:py-4'>
							Puede haber letras repetidas. Las pistas son independientes para
							cada letra.
						</p>
						<p className='font-normal text-center text-xs min-[450px]:text-sm 2xl:text-lg pb-1 2xl:pb-2'>
							¡Una palabra cada 5 minutos!
						</p>
						<div className='grid place-content-center mx-auto'>
							<button
								className='bg-green py-1.5 2xl:py-3 px-2 2xl:px-4 text-white rounded hover:bg-opacity-90'
								onClick={onClose}
							>
								¡Jugar!
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default InstructionsModal