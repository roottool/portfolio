import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { MIN_TABLET_SIZE } from '../../Shared/Styles/StyleConstants'

interface SideDrawerWrapperProps {
  show: boolean
}

interface Props extends SideDrawerWrapperProps {
  handleSideMenuItemClick: () => void
}

const SideDrawer: (props: Props) => JSX.Element = ({ handleSideMenuItemClick }) => (
  <SideDrawerWrapper show >
    <TitleAreaWrapper>
      <TitleWrapper>Menu</TitleWrapper>
    </TitleAreaWrapper>
    <LinkListWrapper>
      <LinkWrapper onClick={handleSideMenuItemClick} to="/about">
        About
      </LinkWrapper>
      <LinkWrapper onClick={handleSideMenuItemClick} to="/works">
        Works
      </LinkWrapper>
      <LinkWrapper onClick={handleSideMenuItemClick} to="/skills">
        Skills
      </LinkWrapper>
      <LinkWrapper onClick={handleSideMenuItemClick} to="/hobbies">
        Hobbies
      </LinkWrapper>
    </LinkListWrapper>
  </SideDrawerWrapper>
)

const SideDrawerWrapper = styled.nav`
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
  ${(props: SideDrawerWrapperProps) =>
    props.show &&
    css`
      box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);
      transform: translateX(0);
    `}

  @media (min-width: ${MIN_TABLET_SIZE}px) {
    display: none;
  }
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

const LinkWrapper = styled(Link)`
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

export default SideDrawer
