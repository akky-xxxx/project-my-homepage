import { VFC } from "react"
import {
  Location,
  Tag as TagType,
  TakenAt,
} from "../../../../../../../../../shared/types/photo"
import { getUrl } from "../../../../../../../../../shared/utils/getUrl"
import { Anchor } from "../../../../../../../../atoms/Anchor"
import { LinkText } from "../../../../../../../../atoms/LinkText"
import { Tag } from "../../../../../../../../atoms/Tag"
import { Above } from "./components/atoms/Above"
import { Heading2 } from "./components/atoms/Heading2"
import { Heading3 } from "./components/atoms/Heading3"
import { LocationInfo } from "./components/atoms/LocationInfo"
import { TagArea } from "./components/atoms/TagArea"
import { TagList } from "./components/atoms/TagList"
import { TagWrapper } from "./components/atoms/TagWrapper"
import { TakenInfo } from "./components/atoms/TakenInfo"
import { Wrapper } from "./components/atoms/Wrapper"

type CardRearProps = {
  location: Location
  tags: TagType[]
  takenAt: TakenAt
}

export const CardRear: VFC<CardRearProps> = (props) => {
  const {
    location: { locationId, locationName },
    tags,
    takenAt: { yearMonth, viewTakenAt },
  } = props

  return (
    <Wrapper>
      <Heading2>Details</Heading2>
      <Above>
        <LocationInfo>
          <Heading3>Location At</Heading3>
          <div>
            <Anchor
              href={getUrl("PhotoGalleryLocationDetail", { id: locationId })}
            >
              <LinkText>{locationName}</LinkText>
            </Anchor>
          </div>
        </LocationInfo>

        <TakenInfo>
          <Heading3>Taken At</Heading3>
          <div>
            <Anchor href={getUrl("PhotoGalleryDateDetail", { id: yearMonth })}>
              <LinkText>{viewTakenAt}</LinkText>
            </Anchor>
          </div>
        </TakenInfo>
      </Above>

      {Boolean(tags.length) && (
        <TagArea>
          <Heading3>Tags</Heading3>
          <TagList>
            {tags.map((tag) => {
              const { tagId, tagName } = tag

              return (
                <TagWrapper key={tagId}>
                  <Anchor href={getUrl("PhotoGalleryTagDetail", { id: tagId })}>
                    <Tag>{tagName}</Tag>
                  </Anchor>
                </TagWrapper>
              )
            })}
          </TagList>
        </TagArea>
      )}
    </Wrapper>
  )
}
