import { Card, CardHeader } from "@mui/material"
import { VFC } from "react"
import { pick } from "remeda"
import { CardMain } from "./components/atoms/CardMain"
import { TagContents } from "./components/atoms/TagContents"
import { GalleryCardProps } from "./types"

export const Template: VFC<GalleryCardProps> = (props) => {
  const { handleOpenModal, prefName, ref, takenAt } = props
  const CardHeaderProps = {
    onClick: handleOpenModal,
    subheader: takenAt,
    title: prefName,
  }
  const CardMainProps = {
    handleOpenModal,
    ...pick(props, ["isInView", "prefName", "thumbnailPath"]),
  }
  const TagContentsProps = pick(props, [
    "handleClickTag",
    "selectedViewTags",
    "tags",
  ])

  return (
    <Card ref={ref}>
      <CardHeader {...CardHeaderProps} />
      <CardMain {...CardMainProps} />
      <TagContents {...TagContentsProps} />
    </Card>
  )
}
