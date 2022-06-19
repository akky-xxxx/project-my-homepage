import { Heading1 } from "../../atoms/Heading1"
import { Heading2 } from "../../atoms/Heading2"
import { Items } from "./components/atoms/Items"

import type { ComponentProps, FC } from "react"

type LocationsIdTemplateProps = ComponentProps<typeof Items>

export const LocationsIdTemplate: FC<LocationsIdTemplateProps> = (props) => {
  const { locationName } = props

  return (
    <div>
      <Heading1>Photo Gallery</Heading1>
      <Heading2>Location - {locationName}</Heading2>
      <Items {...props} />
    </div>
  )
}
