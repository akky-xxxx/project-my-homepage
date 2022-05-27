import { VFC } from "react"

import { Template } from "./Template"
import { usePcMainMenu } from "./modules/usePcMainMenu"
import { HoCPcMainMenuProps } from "./types"

export const PcMainMenu: VFC<HoCPcMainMenuProps> = (props) => {
  const dependencies = usePcMainMenu(props)
  return <Template {...dependencies} />
}
