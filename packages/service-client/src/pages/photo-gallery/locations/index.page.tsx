import { LocationsTemplate } from "../../../components/templates/Locations"
import { bffApiClient } from "../../../shared/utils/bffApiClient"

import type { GetStaticProps, NextPage } from "next"
import type { ComponentProps } from "react"

type PhotoGalleryTemplatePageProps = ComponentProps<typeof LocationsTemplate>

const PhotoGalleryTemplatePage: NextPage<PhotoGalleryTemplatePageProps> = (
  props,
) => {
  const { images } = props
  return <LocationsTemplate images={images} />
}

export const getStaticProps: GetStaticProps<
  PhotoGalleryTemplatePageProps
> = async () => {
  const { data: result } = await bffApiClient.getApiLocations()

  return {
    props: result,
  }
}

export default PhotoGalleryTemplatePage
