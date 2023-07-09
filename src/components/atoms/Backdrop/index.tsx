import { styled } from '@/styles/StyleConstants'

interface Props {
	backdropClickHandler(): void
}

const Backdrop = ({ backdropClickHandler }: Props) => (
	<StyledDiv aria-hidden="true" onClick={backdropClickHandler} />
)

const StyledDiv = styled('div', {
	backgroundColor: 'rgba(0, 0, 0, 0.3)',
	height: '100%',
	left: 0,
	position: 'fixed',
	top: 0,
	width: '100%',
	zIndex: 100,
})

export default Backdrop
