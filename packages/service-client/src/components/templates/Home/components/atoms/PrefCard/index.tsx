import { RoomSharp } from "@mui/icons-material"
import { Card, CardContent, CardHeader, Icon } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"
import { AppBreakpoints } from "../../../../../../shared/const/styles"
import { ChartWrapper } from "../ChartWrapper"
import { PrefChart } from "./components/PrefChart"
import { PrefData } from "./components/PrefChart/types"

type PrefCardProps = {
  prefData: PrefData[]
}

export const PrefCard: VFC<PrefCardProps> = (props) => {
  const { prefData } = props

  return (
    <StyledCard>
      <CardHeader avatar={<PrefIcon />} title="都道府県別" />
      <CardContent>
        <ChartWrapper>
          <PrefChart prefData={prefData} />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  )
}

const PrefIcon = () => (
  <Icon color="action">
    <RoomSharp />
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
