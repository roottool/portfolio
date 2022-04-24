// import * as Toolbar from '@radix-ui/react-toolbar'
// import { createTheme } from '@stitches/react'
import { Root as ToolbarRoot, Link as ToolbarLink } from '@radix-ui/react-toolbar'
import Link from 'next/link'

import { styled } from '@/styles/StyleConstants'

const NavbarComponent = () => (
  <StyledToolbarRoot>
    <Link passHref href="/">
      <DisplayLinkOnDesktop>roottool&apos;s portfolio</DisplayLinkOnDesktop>
    </Link>
    <GrowWrapper />
    <NavigationItemsWrapper>
      <Link passHref href="/about">
        <StyledToolbarLink>about</StyledToolbarLink>
      </Link>
      <Link passHref href="/works">
        <StyledToolbarLink>Works</StyledToolbarLink>
      </Link>
      <Link passHref href="/">
        <DisplayLinkExcludeDesktop>Home</DisplayLinkExcludeDesktop>
      </Link>
      <Link passHref href="/skills">
        <StyledToolbarLink>Skills</StyledToolbarLink>
      </Link>
      <Link passHref href="/hobbies">
        <StyledToolbarLink>Hobbies</StyledToolbarLink>
      </Link>
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

const StyledToolbarLink = styled(ToolbarLink, {
  color: 'white',
  padding: '1rem 0.5rem',
  textDecoration: 'none',
})

const DisplayLinkOnDesktop = styled(StyledToolbarLink, {
  display: 'block',
  '@bp2': {
    display: 'none',
  },
})

const DisplayLinkExcludeDesktop = styled(StyledToolbarLink, {
  display: 'none',
  '@bp2': {
    display: 'block',
  },
})

const GrowWrapper = styled('div', {
  display: 'block',
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
