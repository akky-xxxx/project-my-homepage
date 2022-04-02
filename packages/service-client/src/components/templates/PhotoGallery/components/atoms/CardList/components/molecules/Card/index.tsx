import { FC } from "react"
import { useCard } from "./modules/useCard"
import { Template } from "./Template"
import { HoCCardProps } from "./types"

export const Card: FC<HoCCardProps> = (props) => {
  const { children } = props
  const dependencies = useCard(props)
  return <Template {...dependencies}>{children}</Template>
}
