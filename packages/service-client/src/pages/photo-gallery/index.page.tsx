import { GetStaticProps, NextPage } from "next"
import { ComponentProps } from "react"

import { PhotoGalleryTemplate } from "../../components/templates/PhotoGallery"
import { bffApiClient } from "../../shared/utils/bffApiClient"

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
