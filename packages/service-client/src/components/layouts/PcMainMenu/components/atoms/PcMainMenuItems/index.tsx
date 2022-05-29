import { Fragment } from "react"

import { PcMainMenuItem } from "./components/atoms/PcMainMenuItem"

import type { ComponentProps, FC } from "react"

type PcMainMenuItemsProps = {
  handleHoverMenu: (position: number) => void
  menuData: Omit<ComponentProps<typeof PcMainMenuItem>, "handleHover">[]
}

export const PcMainMenuItems: FC<PcMainMenuItemsProps> = (props) => {
  const { menuData, handleHoverMenu } = props

  return (
    <Fragment>
      {menuData.map((menuInfo, position) => {
        const { href } = menuInfo
        const handleHover = () => {
          handleHoverMenu(position)
        }
        return (
          <PcMainMenuItem key={href} {...menuInfo} handleHover={handleHover} />
        )
      })}
    </Fragment>
  )
}
