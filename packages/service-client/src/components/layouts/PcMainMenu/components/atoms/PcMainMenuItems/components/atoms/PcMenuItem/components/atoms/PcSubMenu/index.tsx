import { VFC } from "react"
import { Menu } from "../../../../../../../../../../../../shared/const/Menu"
import { PcSubMenuItem } from "../../../../../../../../../../PcSubMenuItem"

type PcSubMenuProps = {
  subMenu: Menu[]
}

export const PcSubMenu: VFC<PcSubMenuProps> = (props) => {
  const { subMenu } = props

  return (
    <ul>
      {subMenu.map((subMenuData) => {
        const { href, linkText } = subMenuData
        return <PcSubMenuItem key={href} href={href} linkText={linkText} />
      })}
    </ul>
  )
}
