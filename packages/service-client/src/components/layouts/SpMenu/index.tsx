import { VFC } from "react"
import { useSpMenu } from "./modules/useSpMenu"
import { Template } from "./Template"
import { HoCSpMenuProps } from "./types"

export const SpMenu: VFC<HoCSpMenuProps> = (props) => {
  const dependencies = useSpMenu(props)
  return <Template {...dependencies} />
}
