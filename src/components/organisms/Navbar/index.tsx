import { AppBar, Toolbar } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import { IconContext } from 'react-icons'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'

import { MAX_SMARTPHONE_SIZE, MIN_TABLET_SIZE } from '@/shared/styles/StyleConstants'

const NavbarComponent = ({ classes: { root } }: WithStyles<typeof styleSettings>) => (
  <AppBar className={root} position={'static'}>
    <Toolbar>
      <MenuIconWrapper>
        <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
          <MdMenu />
        </IconContext.Provider>
      </MenuIconWrapper>
      <Link passHref href="/">
        <TitleWrapper>roottool&apos;s portfolio</TitleWrapper>
      </Link>
      <GrowWrapper />
      <NavigationItemsWrapper>
        <Link passHref href="/about">
          <AWrapper>about</AWrapper>
        </Link>
        <Link passHref href="/works">
          <AWrapper>Works</AWrapper>
        </Link>
        <Link passHref href="/skills">
          <AWrapper>Skills</AWrapper>
        </Link>
        <Link passHref href="/hobbies">
          <AWrapper>Hobbies</AWrapper>
        </Link>
      </NavigationItemsWrapper>
    </Toolbar>
  </AppBar>
)

const styleSettings = () =>
  createStyles({
    grow: {
      flex: 1,
    },
    root: {
      background: '#df4848',
    },
  })
const StyledNavbarComponent = withStyles(styleSettings)(NavbarComponent)

const MenuIconWrapper = styled.div`
  @media (min-width: ${MIN_TABLET_SIZE}px) {
    display: none;
  }
`

const TitleWrapper = styled.a`
  color: white;
  font-size: 1.5rem;
  padding: 0 1rem;
  text-decoration: none;
  @media (min-width: ${MIN_TABLET_SIZE}px) {
    padding: 0 0rem;
  }
`

const GrowWrapper = styled.div`
  flex: 1;
`

const NavigationItemsWrapper = styled.div`
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: ${MAX_SMARTPHONE_SIZE}px) {
    display: none;
  }
`

const AWrapper = styled.a`
  color: white;
  text-decoration: none;
  padding: 16px 1rem;
`

const Navbar = () => <StyledNavbarComponent />

export default Navbar
