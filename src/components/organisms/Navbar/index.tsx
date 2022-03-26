import { AppBar, Toolbar, createTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import Link from 'next/link'

import { styled } from '@/styles/StyleConstants'

const NavbarComponent = () => (
  <ThemeProvider theme={theme}>
    <AppBar>
      <Toolbar>
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
  </ThemeProvider>
)

const theme = createTheme({
  palette: {
    primary: {
      main: '#df4848',
    },
  },
})

const TitleWrapper = styled('a', {
  color: 'white',
  fontSize: '1.5rem',
  padding: '0 1rem',
  textDecoration: 'none',
  '@bp2': {
    padding: '0 0rem',
  },
})

const GrowWrapper = styled('div', {
  flex: 1,
})

const NavigationItemsWrapper = styled('div', {
  display: 'flex',
  height: '100%',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  '@bp2': {
    display: 'none',
  },
})

const AWrapper = styled('a', {
  color: 'white',
  padding: '16px 1rem',
  textDecoration: 'none',
})

const Navbar = () => <NavbarComponent />

export default Navbar
