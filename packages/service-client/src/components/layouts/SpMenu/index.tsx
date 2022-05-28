import { FC } from "react"

import { Template } from "./Template"
import { useSpMenu } from "./modules/useSpMenu"
import { HoCSpMenuProps } from "./types"

export const SpMenu: FC<HoCSpMenuProps> = (props) => {
  const dependencies = useSpMenu(props)
  return <Template {...dependencies} />
}
