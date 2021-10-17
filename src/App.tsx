import { useCallback, useMemo } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'

import Backdrop from './Components/Backdrop'
import Navbar from './Components/Navbar'
import SideDrawer from './Components/SideDrawer'
import { ActionDispatcher } from './Container'
import About from './Pages/About'
import Hobbies from './Pages/Hobbies/Container'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Works from './Pages/Works'
import backgroundImagePNG from './images/EchoCat.png'
import backgroundImageWebP from './images/EchoCat.webp'
import { AppState } from './module'

interface GlobalStyleProps {
  canUseWebP: boolean
}
interface Props extends GlobalStyleProps {
  handleMenuIconClick: () => void
  handleSideMenuItemClick: () => void
  isOpened: boolean
}

interface ContainerProps {
  actions: ActionDispatcher
  value: AppState
}

const App: (props: Props) => JSX.Element = ({ handleMenuIconClick, handleSideMenuItemClick, isOpened }) => (
  <div className="App">
    <GlobalStyle canUseWebP />
    <Navbar handleMenuIconClick={handleMenuIconClick} />
    <SideDrawer handleSideMenuItemClick={handleSideMenuItemClick} show={isOpened} />
    {isOpened && <Backdrop handleBackdropClick={handleSideMenuItemClick} />}
    <MainWrapper>
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Works} path="/works" />
        <Route component={Skills} path="/skills" />
        <Route component={Hobbies} path="/hobbies" />
        <Route component={Home} path="/" />
        <Route component={Home} />
      </Switch>
    </MainWrapper>
  </div>
)

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    ${(props: GlobalStyleProps) =>
    props.canUseWebP
      ? css`
            background-image: url(${backgroundImageWebP});
          `
      : css`
            background-image: url(${backgroundImagePNG});
          `}
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right bottom;
    background-size: 38% 38%;
  }
`

const MainWrapper = styled.main`
  height: 100%;
  text-align: center;
`

const Container: (props: ContainerProps) => JSX.Element = ({ actions, value }) => {
  const { closeSideMenu, openSideMenu } = actions
  const handleMenuIconClick = useCallback(() => {
    openSideMenu()
  }, [openSideMenu])
  const handleSideMenuItemClick = useCallback(() => {
    closeSideMenu()
  }, [closeSideMenu])

  const ua = useMemo(() => navigator.userAgent.toLowerCase(), [navigator])
  const isEdge = useMemo(() => ua.indexOf('edge') > -1, [ua])
  const isChrome = useMemo(() => ua.indexOf('chrome') > -1 && ua.indexOf('edge') == -1, [ua])
  /**
   * It checks to use a WebP image at the background image if the browser is Chrome or Edge.
   * @link http://cly7796.net/wp/javascript/make-a-determination-using-the-useragent-in-javascript/
   */
  const canUseWebP = useMemo(() => isChrome || isEdge, [isChrome, isEdge])

  const { isOpened } = value
  return <App canUseWebP={canUseWebP} handleMenuIconClick={handleMenuIconClick} handleSideMenuItemClick={handleSideMenuItemClick} isOpened={isOpened} />
}

export default Container
