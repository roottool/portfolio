// import * as Toolbar from '@radix-ui/react-toolbar'
// import { createTheme } from '@stitches/react'
import { Root as ToolbarRoot } from '@radix-ui/react-toolbar'
import Link from 'next/link'

import { styled } from '@/styles/StyleConstants'

const NavbarComponent = () => (
  <StyledToolbarRoot>
    <DisplayLinkOnDesktop href="/">roottool&apos;s portfolio</DisplayLinkOnDesktop>
    <GrowWrapper />
    <NavigationItemsWrapper>
      <StyledToolbarLink href="/about">about</StyledToolbarLink>
      <StyledToolbarLink href="/works">Works</StyledToolbarLink>
      <DisplayLinkExcludeDesktop href="/">Home</DisplayLinkExcludeDesktop>
      <StyledToolbarLink href="/skills">Skills</StyledToolbarLink>
      <StyledToolbarLink href="/hobbies">Hobbies</StyledToolbarLink>
    </NavigationItemsWrapper>
  </StyledToolbarRoot>
)

const StyledToolbarRoot = styled(ToolbarRoot, {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#df4848',
  fontSize: '1rem',
  fontWeight: 'bold',
  padding: '0 0.5rem',
  textDecoration: 'none',
  '@bp2': {
    display: 'block',
  },
})

const StyledToolbarLink = styled(Link, {
  color: 'white',
  padding: '1rem 0.5rem',
  textDecoration: 'none',
})

const DisplayLinkOnDesktop = styled(Link, {
  color: 'white',
  padding: '1rem 0.5rem',
  fontSize: '1.25rem',
  textDecoration: 'none',
  '@bp2': {
    display: 'none',
  },
})

const DisplayLinkExcludeDesktop = styled(Link, {
  display: 'none',
  '@bp2': {
    display: 'block',
  },
})

const GrowWrapper = styled('div', {
  flex: 1,
  '@bp2': {
    display: 'none',
  },
})

const NavigationItemsWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const Navbar = () => <NavbarComponent />

export default Navbar
