import { ComponentProps, Fragment, VFC } from "react"
import { PcMenuItem } from "../../../../PcMenuItem"

type PcMainMenuItemsProps = {
  handleHoverMenu: (position: number) => void
  menuData: Omit<ComponentProps<typeof PcMenuItem>, "handleHover">[]
}

export const PcMainMenuItems: VFC<PcMainMenuItemsProps> = (props) => {
  const { menuData, handleHoverMenu } = props

  return (
    <Fragment>
      {menuData.map((menuInfo, position) => {
        const { href } = menuInfo
        const handleHover = () => {
          handleHoverMenu(position)
        }
        return <PcMenuItem key={href} {...menuInfo} handleHover={handleHover} />
      })}
    </Fragment>
  )
}
