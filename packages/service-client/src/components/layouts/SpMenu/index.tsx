import { Template } from "./Template"
import { useSpMenu } from "./modules/useSpMenu"

import type { HoCSpMenuProps } from "./types"
import type { FC } from "react"

export const SpMenu: FC<HoCSpMenuProps> = (props) => {
  const dependencies = useSpMenu(props)
  return <Template {...dependencies} />
}
