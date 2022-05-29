import { Items } from "./components/atoms/Items"

import type { ComponentProps, FC } from "react"

type PhotoGalleryTemplateProps = ComponentProps<typeof Items>

export const PhotoGalleryTemplate: FC<PhotoGalleryTemplateProps> = (props) => (
  <Items {...props} />
)
