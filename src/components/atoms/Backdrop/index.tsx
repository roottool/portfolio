import styled from 'styled-components'

interface Props {
  backdropClickHandler(): void
}

const Backdrop = ({ backdropClickHandler }: Props) => <div aria-hidden="true" onClick={backdropClickHandler} />

const BackdropWrapper = styled(Backdrop)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`

export default BackdropWrapper
