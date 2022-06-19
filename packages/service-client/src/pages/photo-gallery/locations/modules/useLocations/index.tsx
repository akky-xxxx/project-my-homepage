import { Anchor } from "../../../../../components/atoms/Anchor"
import { getUrl } from "../../../../../shared/utils/getUrl"

import type { LocationsTemplate } from "../../../../../components/templates/Locations"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof LocationsTemplate>
type UseLocations = (props: Props) => Props

export const useLocations: UseLocations = (props) => ({
  ...props,
  images: props.images.map((image) => {
    const { locationId, locationName } = image
    const LocationName = () => (
      <Anchor href={getUrl("PhotoGalleryLocationDetail", { id: locationId })}>
        {locationName}
      </Anchor>
    )
    return {
      ...image,
      locationName: <LocationName />,
    }
  }),
})
