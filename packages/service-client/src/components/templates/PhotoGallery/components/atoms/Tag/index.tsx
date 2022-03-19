import { Chip } from "@mui/material"
import { VFC } from "react"

type TagProps = {
  handleClickTag: () => void
  isSelected?: boolean
  tagName: string
}

export const Tag: VFC<TagProps> = (props) => {
  const { handleClickTag, isSelected = true, tagName } = props

  return (
    <Chip
      color={isSelected ? "primary" : "secondary"}
      size="small"
      label={tagName}
      onClick={handleClickTag}
    />
  )
}
