import { Template } from "./Template"
import { usePcMainMenu } from "./modules/usePcMainMenu"

import type { HoCPcMainMenuProps } from "./types"
import type { FC } from "react"

export const PcMainMenu: FC<HoCPcMainMenuProps> = (props) => {
  const dependencies = usePcMainMenu(props)
  return <Template {...dependencies} />
}
