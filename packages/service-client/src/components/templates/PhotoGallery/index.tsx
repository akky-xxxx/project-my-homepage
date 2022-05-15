import { ComponentProps, VFC } from "react"
import { Items } from "./components/atoms/Items"

type PhotoGalleryTemplateProps = ComponentProps<typeof Items>

export const PhotoGalleryTemplate: VFC<PhotoGalleryTemplateProps> = (props) => (
  <Items {...props} />
)
