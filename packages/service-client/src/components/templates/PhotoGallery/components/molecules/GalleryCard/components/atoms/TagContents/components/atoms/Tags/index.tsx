import { createTheme } from "@mui/material"
import { Fragment, VFC } from "react"
import styled from "styled-components"
import { Tag } from "./components/atoms/Tag"

// eslint-disable-next-line no-magic-numbers
const TagMargin = createTheme().spacing(1)

type TagsProps = {
  handleClickTag: (tagName: string) => void
  selectedViewTags: string[]
  tags: string[]
}

export const Tags: VFC<TagsProps> = (props) => {
  const { selectedViewTags, tags, handleClickTag: originHandleClickTag } = props

  return (
    <Fragment>
      {tags.map((tagName) => {
        const isSelected = !selectedViewTags.includes(tagName)
        const handleClickTag = () => {
          originHandleClickTag(tagName)
        }

        return (
          <TagWrapper key={tagName}>
            <Tag
              isSelected={isSelected}
              handleClickTag={handleClickTag}
              tagName={tagName}
            />
          </TagWrapper>
        )
      })}
    </Fragment>
  )
}

const TagWrapper = styled.li`
  display: inline-block;
  margin: ${TagMargin} 4px;
`
