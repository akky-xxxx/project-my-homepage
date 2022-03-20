import { format } from "date-fns"
import { useInView } from "react-intersection-observer"
import { GalleryCardProps, HoCGalleryCardProps } from "../../types"

type UseGalleryCard = (
  useGalleryCardArguments: HoCGalleryCardProps,
) => GalleryCardProps

export const useGalleryCard: UseGalleryCard = (useGalleryCardArguments) => {
  const {
    handleClickTag,
    handleOpenModal,
    prefName,
    selectedViewTags,
    tags,
    takenAt: originTakenAt,
    thumbnailPath,
  } = useGalleryCardArguments
  const [ref, isInView] = useInView()
  const takenAt = format(new Date(originTakenAt), "yyyy年M月d日")

  return {
    handleClickTag,
    handleOpenModal,
    isInView,
    prefName,
    ref,
    selectedViewTags,
    tags,
    takenAt,
    thumbnailPath,
  }
}
