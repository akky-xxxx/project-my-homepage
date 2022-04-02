import { GetStaticProps, NextPage } from "next"
import { ComponentProps } from "react"
import { PhotoGalleryTemplate } from "../../components/templates/PhotoGallery"

type PhotoGalleryTemplatePageProps = ComponentProps<typeof PhotoGalleryTemplate>

const PhotoGalleryTemplatePage: NextPage<PhotoGalleryTemplatePageProps> = (
  props,
) => {
  const { cards } = props
  return <PhotoGalleryTemplate cards={cards} />
}

export const getStaticProps: GetStaticProps<
  PhotoGalleryTemplatePageProps
  // TODO: 非同期処理を組み込んだら disable を消す
  // eslint-disable-next-line @typescript-eslint/require-await
> = async () => ({
  props: {
    cards: [],
  },
})

export default PhotoGalleryTemplatePage
