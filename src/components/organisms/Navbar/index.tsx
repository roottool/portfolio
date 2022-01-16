import { AppBar, Toolbar } from '@material-ui/core'
import { createStyles, withStyles, type WithStyles } from '@material-ui/core/styles'
import { IconContext } from 'react-icons'
import { MdMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { MAX_SMARTPHONE_SIZE, MIN_TABLET_SIZE } from '../../shared/styles/StyleConstants'

interface Props {
  drawToggleClickHandler: () => void
}
interface NavbarComponentProps extends WithStyles<typeof styleSettings> {
  handleClick: Props['drawToggleClickHandler']
}

const NavbarComponent = ({ classes: { root }, handleClick }: NavbarComponentProps) => (
  <AppBar className={root} position={'static'}>
    <Toolbar>
      <MenuIconWrapper onClick={handleClick}>
        <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
          <MdMenu />
        </IconContext.Provider>
      </MenuIconWrapper>
      <TitleWrapper to="/">roottool&apos;s portfolio</TitleWrapper>
      <GrowWrapper />
      <NavigationItemsWrapper>
        <LinkWrapper to="/about">about</LinkWrapper>
        <LinkWrapper to="/works">Works</LinkWrapper>
        <LinkWrapper to="/skills">Skills</LinkWrapper>
        <LinkWrapper to="/hobbies">Hobbies</LinkWrapper>
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

const TitleWrapper = styled(Link)`
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

const LinkWrapper = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 16px 1rem;
`

const Navbar = ({ drawToggleClickHandler }: Props) => (
  <StyledNavbarComponent handleClick={drawToggleClickHandler} />
)

export default Navbar
