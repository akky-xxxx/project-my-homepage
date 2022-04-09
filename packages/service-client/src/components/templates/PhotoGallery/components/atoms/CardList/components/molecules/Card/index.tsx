import { FcWithChildren } from "../../../../../../../../../shared/types/react"
import { useCard } from "./modules/useCard"
import { Template } from "./Template"
import { HoCCardProps } from "./types"

export const Card: FcWithChildren<HoCCardProps> = (props) => {
  const { children } = props
  const dependencies = useCard(props)
  return <Template {...dependencies}>{children}</Template>
}
