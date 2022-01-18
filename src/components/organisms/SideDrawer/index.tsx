import Link from 'next/link'
import styled from 'styled-components'

import { MIN_TABLET_SIZE } from '@/shared/styles/StyleConstants'

interface SideDrawerProps {
  handleClick: () => void
}

interface Props {
  handleDrawToggleClick: SideDrawerProps['handleClick']
  isOpened: boolean
}

const SideDrawerComponent = ({ handleClick }: SideDrawerProps) => (
  <>
    <TitleAreaWrapper>
      <TitleWrapper>Menu</TitleWrapper>
    </TitleAreaWrapper>
    <LinkListWrapper>
      <AWrapper onClick={handleClick}>
        <Link href="/about">About</Link>
      </AWrapper>
      <AWrapper onClick={handleClick}>
        <Link href="/works">Works</Link>
      </AWrapper>
      <AWrapper onClick={handleClick}>
        <Link href="/skills">Skills</Link>
      </AWrapper>
      <AWrapper onClick={handleClick}>
        <Link href="/hobbies">Hobbies</Link>
      </AWrapper>
    </LinkListWrapper>
  </>
)

const ClosedSideDrawerWrapper = styled.nav`
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;

  @media (min-width: ${MIN_TABLET_SIZE}px) {
    display: none;
  }
`

const SideDrawerWrapper = styled(ClosedSideDrawerWrapper)`
  box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);
  transform: translateX(0);
`

const TitleAreaWrapper = styled.div`
  height: 56px;
  background: #df4848;
`

const TitleWrapper = styled.p`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0;
`

const LinkListWrapper = styled.div`
  height: 100%;
  padding: 0 0;
  margin: 0 0;
  list-style: none;
  justify-content: center;
`

const AWrapper = styled.a`
  display: block;
  padding: 1rem 0;
  padding-left: 1rem;
  border-bottom: thin solid black;
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover,
  &:active {
    background-color: #c2203b;
  }
`

const toggleSideDrawerWrapper = (isOpened: Props['isOpened']) =>
  isOpened ? SideDrawerWrapper : ClosedSideDrawerWrapper

const SideDrawer = ({ handleDrawToggleClick, isOpened }: Props) => {
  const SideDrawerWrapperComponent = toggleSideDrawerWrapper(isOpened)

  return (
    <SideDrawerWrapperComponent>
      <SideDrawerComponent handleClick={handleDrawToggleClick} />
    </SideDrawerWrapperComponent>
  )
}

export default SideDrawer
