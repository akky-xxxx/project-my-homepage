import { Link as MuiLink, ListItem } from "@mui/material"
import NextLink from "next/link"
import { VFC } from "react"
import styled from "styled-components"

/**
 * @type MenuItemProps
 * @property handleOpenMenu - function of open menu
 * @property href - リンク先
 * @property linkLabel - リンクテキスト
 */
type MenuItemProps = {
  handleCloseMenu: () => void
  href: string
  linkLabel: string
}

export const MenuItem: VFC<MenuItemProps> = (props) => {
  const { handleCloseMenu, href, linkLabel } = props

  return (
    <ListItem button>
      <NextLink href={href} passHref>
        <StyledMuiLink
          underline="none"
          onClick={handleCloseMenu}
          onKeyDown={handleCloseMenu}
        >
          {linkLabel}
        </StyledMuiLink>
      </NextLink>
    </ListItem>
  )
}

const StyledMuiLink = styled(MuiLink)`
  width: 100%;
`
