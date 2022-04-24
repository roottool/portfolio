import Link from 'next/link'

import { styled } from '@/styles/StyleConstants'

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

const ClosedSideDrawerWrapper = styled('nav', {
  backgroundColor: 'white',
  height: '100%',
  left: 0,
  maxWidth: '300px',
  position: 'fixed',
  top: 0,
  transform: 'translateX(-100%)',
  transition: 'transform 0.3s ease-out',
  width: '70%',
  zIndex: 200,
  '@bp2': {
    display: 'none',
  },
})

const SideDrawerWrapper = styled(ClosedSideDrawerWrapper, {
  boxShadow: '1px 0px 3px rgba(0, 0, 0, 0.5)',
  transform: 'translateX(0)',
})

const TitleAreaWrapper = styled('div', {
  backgroundColor: '#df4848',
  height: '56px',
})

const TitleWrapper = styled('p', {
  color: 'white',
  fontSize: '1.5rem',
  margin: 0,
  padding: '0.5rem 1rem',
  textDecoration: 'none',
})

const LinkListWrapper = styled('div', {
  height: '100%',
  justifyContent: 'center',
  listStyle: 'none',
  margin: 0,
  padding: 0,
})

const AWrapper = styled('a', {
  '&:hover, &:active': {
    backgroundColor: '#c2203b',
  },
  borderBottom: 'thin solid black',
  color: 'black',
  display: 'block',
  fontSize: '1.2rem',
  padding: '1rem 0',
  paddingLeft: '1rem',
  textDecoration: 'none',
})

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
