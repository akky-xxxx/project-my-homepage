import { LocalOfferSharp } from "@mui/icons-material"
import { Card, CardContent, CardHeader, Icon } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"
import { AppBreakpoints } from "../../../../../../shared/const/styles"
import { ChartWrapper } from "../ChartWrapper"
import { TagChart } from "./components/atoms/TagChart"
import { TagData } from "./components/atoms/TagChart/types"

type TagCardProps = {
  tagData: TagData[]
}

export const TagCard: VFC<TagCardProps> = (props) => {
  const { tagData } = props

  return (
    <StyledCard>
      <CardHeader avatar={<TagIcon />} title="タグ別" />
      <CardContent>
        <ChartWrapper>
          <TagChart tagData={tagData} />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  )
}

const TagIcon = () => (
  <Icon color="action">
    <LocalOfferSharp />
  </Icon>
)

const StyledCard = styled(Card)`
  ${AppBreakpoints.PC} {
    flex-shrink: 0;
  }

  ${AppBreakpoints.SP} {
    width: 100%;
  }
`
