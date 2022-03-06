import { FC } from "react"
import { useLayout } from "./modules/useLayout"
import { Template } from "./Template"
import { HoCLayoutProps } from "./types"

export const Layout: FC<HoCLayoutProps> = (props) => {
  const { children } = props
  const dependencies = useLayout(props)
  return <Template {...dependencies}>{children}</Template>
}
