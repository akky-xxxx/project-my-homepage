import { FC, Fragment } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { HeaderBar } from "../HeaderBar"
import { MenuDrawer } from "../MenuDrawer"
import { LayoutProps } from "./types"

const Duration = 300
const TransitionClassName = "content"

export const Template: FC<LayoutProps> = (props) => {
  const { children, isMenuOpen, handleOpenMenu, handleCloseMenu, route } = props
  return (
    <Fragment>
      <HeaderBar handleOpenMenu={handleOpenMenu} />
      <MenuDrawer isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />

      <Wrapper>
        <StyledTransitionGroup>
          <CSSTransition
            key={route}
            timeout={Duration}
            classNames={TransitionClassName}
          >
            {children}
          </CSSTransition>
        </StyledTransitionGroup>
      </Wrapper>
    </Fragment>
  )
}

const Wrapper = styled.main`
  padding: 64px 24px 24px;
`

const StyledTransitionGroup = styled(TransitionGroup)`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  position: relative;
  width: 100vw;

  & .${TransitionClassName}-enter {
    opacity: 0;
  }

  & .${TransitionClassName}-enter-active {
    opacity: 1;
    transition: opacity ${Duration}ms;
  }

  & .${TransitionClassName}-exit {
    opacity: 1;
  }

  & .${TransitionClassName}-exit-active {
    left: -100vw;
    opacity: 0;
    transition: opacity ${Duration}ms;
  }
`
