import { useCallback, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import Backdrop from '@components/atoms/Backdrop'
import Navbar from '@components/organisms/Navbar'
import SideDrawer from '@components/organisms/SideDrawer'

import backgroundImageWebP from './images/EchoCat.webp'

import { ActionDispatcher } from '@/Container'
import { AppState } from '@/module'
import About from '@/pages/About'
import Hobbies from '@/pages/Hobbies/Container'
import Home from '@/pages/Home'
import Skills from '@/pages/Skills'
import Works from '@/pages/Works'

interface Props {
  actions: ActionDispatcher
  value: AppState
}

const AppComponent = () => (
  <MainWrapper>
    <Routes>
      <Route element={<About />} path="/about" />
      <Route element={<Works />} path="/works" />
      <Route element={<Skills />} path="/skills" />
      <Route element={<Hobbies />} path="/hobbies" />
      <Route element={<Home />} path="/" />
      <Route element={<Home />} />
    </Routes>
  </MainWrapper>
)

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-image: url(${backgroundImageWebP});
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

const useApp = (closeSideMenu: () => void, openSideMenu: () => void, isOpened: boolean) => {
  const handleMenuIconClick = useCallback(() => openSideMenu(), [openSideMenu])
  const closeSideMenuHandler = useCallback(() => closeSideMenu(), [closeSideMenu])
  const sideDrawerOption = useMemo(
    () => ({
      handleDrawToggleClick: closeSideMenuHandler,
      isOpened,
    }),
    [closeSideMenuHandler, isOpened]
  )

  return { closeSideMenuHandler, handleMenuIconClick, sideDrawerOption }
}

const App = ({ actions: { closeSideMenu, openSideMenu }, value: { isOpened } }: Props) => {
  const { closeSideMenuHandler, handleMenuIconClick, sideDrawerOption } = useApp(
    closeSideMenu,
    openSideMenu,
    isOpened
  )

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Navbar drawToggleClickHandler={handleMenuIconClick} />
        <SideDrawer {...sideDrawerOption} />
        {isOpened && <Backdrop backdropClickHandler={closeSideMenuHandler} />}
        <AppComponent />
      </div>
    </>
  )
}

export default App
