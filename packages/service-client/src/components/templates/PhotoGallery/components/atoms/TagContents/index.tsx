import { ComponentProps, VFC } from "react"
import styled from "styled-components"
import { AppMargins } from "../../../../../../shared/const/styles"
import { Tags } from "../Tags"

type TagsProps = ComponentProps<typeof Tags>
type TagContentsProps = TagsProps

export const TagContents: VFC<TagContentsProps> = (props) => {
  const { selectedViewTags, tags, handleClickTag } = props

  if (!tags.length) return null

  return (
    <CardContent>
      <TagWrapper>
        <Tags
          tags={tags}
          selectedViewTags={selectedViewTags}
          handleClickTag={handleClickTag}
        />
      </TagWrapper>
    </CardContent>
  )
}

const CardContent = styled.div`
  padding: ${AppMargins.PC.VERTICAL};
`

const TagWrapper = styled.ul`
  height: 50px;
  overflow: scroll;
`
