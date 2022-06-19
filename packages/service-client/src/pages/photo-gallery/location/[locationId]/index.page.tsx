import { LocationsIdTemplate } from "../../../../components/templates/LocationsId"
import { bffApiClient } from "../../../../shared/utils/bffApiClient"
import { getPath } from "./modules/getPath"

import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import type { ComponentProps } from "react"

type LocationsIdTemplatePageProps = ComponentProps<typeof LocationsIdTemplate>

const LocationsIdTemplatePage: NextPage<LocationsIdTemplatePageProps> = (
  props,
) => {
  const { images, locationName } = props
  return <LocationsIdTemplate images={images} locationName={locationName} />
}

export const getStaticProps: GetStaticProps<
  LocationsIdTemplatePageProps,
  { locationId: string }
> = async (context) => {
  const { params } = context

  if (!params?.locationId) {
    throw new Error("locationId がありません")
  }

  const { data: result } = await bffApiClient.getApiLocationsLocationId(
    params.locationId,
  )

  return {
    props: result,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: result } = await bffApiClient.getApiLocations()
  const paths = result.images.map(getPath)

  return {
    fallback: false,
    paths,
  }
}

export default LocationsIdTemplatePage
