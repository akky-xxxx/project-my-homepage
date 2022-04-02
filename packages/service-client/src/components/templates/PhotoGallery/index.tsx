import { ComponentProps, VFC } from "react"
import { CardList } from "./components/atoms/CardList"

type PhotoGalleryTemplateProps = ComponentProps<typeof CardList>

export const PhotoGalleryTemplate: VFC<PhotoGalleryTemplateProps> = (props) => {
  const { cards } = props
  return <CardList cards={cards} />
}
