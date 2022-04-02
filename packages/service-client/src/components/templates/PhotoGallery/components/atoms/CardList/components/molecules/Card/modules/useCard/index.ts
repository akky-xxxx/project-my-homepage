import { useState } from "react"
import { CardProps, HoCCardProps } from "../../types"

type UseCard = (useCardArguments: HoCCardProps) => CardProps

export const useCard: UseCard = (useCardArguments) => {
  const { imagePath } = useCardArguments
  const [isShownDetail, setIsShownDetail] = useState(false)
  const handleShowDetail = () => {
    setIsShownDetail(true)
  }
  const handleHideDetail = () => {
    setIsShownDetail(false)
  }
  return { handleHideDetail, handleShowDetail, imagePath, isShownDetail }
}
