import { PhotoGalleryTemplate } from "../../components/templates/PhotoGallery"
import { bffApiClient } from "../../shared/utils/bffApiClient"

import type { GetStaticProps, NextPage } from "next"
import type { ComponentProps } from "react"

type PhotoGalleryTemplatePageProps = ComponentProps<typeof PhotoGalleryTemplate>

const PhotoGalleryTemplatePage: NextPage<PhotoGalleryTemplatePageProps> = (
  props,
) => {
  const { images } = props
  return <PhotoGalleryTemplate images={images} />
}

export const getStaticProps: GetStaticProps<
  PhotoGalleryTemplatePageProps
> = async () => {
  const { data: result } = await bffApiClient.getApiPhotoGallery()

  return {
    props: result,
  }
}

export default PhotoGalleryTemplatePage
