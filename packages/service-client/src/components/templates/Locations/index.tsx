import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Items } from "./components/atoms/Items"

import type { ComponentProps, FC } from "react"

type LocationsTemplateProps = ComponentProps<typeof Items>

export const LocationsTemplate: FC<LocationsTemplateProps> = (props) => (
  <div>
    <Heading1>Photo Gallery</Heading1>
    <Heading2>Locations</Heading2>
    <Items {...props} />
  </div>
)
