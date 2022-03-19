import { CardMedia } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"
import { Spinner } from "../Spinner"

type CardMainProps = {
  handleOpenModal: () => void
  isInView: boolean
  thumbnailPath: string
  prefName: string
}

export const CardMain: VFC<CardMainProps> = (props) => {
  const { handleOpenModal, isInView, thumbnailPath, prefName } = props

  if (!isInView) return <Spinner />

  return (
    <StyledCardMedia
      onClick={handleOpenModal}
      image={thumbnailPath}
      title={prefName}
    />
  )
}

const StyledCardMedia = styled(CardMedia)`
  height: 200px;
`
