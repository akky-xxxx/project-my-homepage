import { FC, Fragment } from "react"
import { PcMainMenu } from "../PcMainMenu"
import { SpMenu } from "../SpMenu"
import { Menu } from "../../../shared/const/Menu"

type MenuWithSubMenu = Menu & {
  subMenu?: Menu[]
}

type LayoutProps = {
  currentPagePosition: number
  menu: MenuWithSubMenu[]
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children, currentPagePosition, menu } = props

  return (
    <Fragment>
      <div className="is-only-pc">
        <PcMainMenu menuData={menu} currentPagePosition={currentPagePosition} />
      </div>
      <div className="is-only-tb">
        <SpMenu menu={menu} />
      </div>
      <main>{children}</main>
    </Fragment>
  )
}
