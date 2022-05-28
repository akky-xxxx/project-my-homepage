import { ComponentProps, FC } from "react"

import { Items } from "./components/atoms/Items"

type PhotoGalleryTemplateProps = ComponentProps<typeof Items>

export const PhotoGalleryTemplate: FC<PhotoGalleryTemplateProps> = (props) => (
  <Items {...props} />
)
