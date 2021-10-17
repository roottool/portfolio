import styled from 'styled-components'

interface Props {
  handleBackdropClick: () => void
}

const Backdrop: (props: Props) => JSX.Element = ({ handleBackdropClick }) => <BackdropWrapper onClick={handleBackdropClick} />

const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`

export default Backdrop
