import { VFC } from "react"
import { useGalleryCard } from "./modules/useGalleryCard"
import { Template } from "./Template"
import { HoCGalleryCardProps } from "./types"

export const GalleryCard: VFC<HoCGalleryCardProps> = (props) => {
  const dependencies = useGalleryCard(props)
  return <Template {...dependencies} />
}
