import { VFC } from "react"
import { usePcMainMenu } from "./modules/usePcMainMenu"
import { Template } from "./Template"
import { HoCPcMainMenuProps } from "./types"

export const PcMainMenu: VFC<HoCPcMainMenuProps> = (props) => {
  const dependencies = usePcMainMenu(props)
  return <Template {...dependencies} />
}
