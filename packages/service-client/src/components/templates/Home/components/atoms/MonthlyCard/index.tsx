import { EventSharp } from "@mui/icons-material"
import { Card, CardContent, CardHeader, Icon } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"
import {
  AppBreakpoints,
  AppMargins,
} from "../../../../../../shared/const/styles"
import { ChartWrapper } from "../ChartWrapper"
import { MonthlyChart } from "./components/atoms/MonthlyChart"

type MonthlyCardProps = {
  readonly galleryInfoList: { date: string }[]
  startMonth: number
}

export const MonthlyCard: VFC<MonthlyCardProps> = (props) => {
  const { galleryInfoList, startMonth } = props

  return (
    <StyledCard>
      <CardHeader avatar={<MonthlyIcon />} title="月別" />
      <CardContent>
        <ChartWrapper isFitWidth>
          <MonthlyChart
            startMonth={startMonth}
            galleryInfoList={galleryInfoList}
          />
        </ChartWrapper>
      </CardContent>
    </StyledCard>
  )
}

const MonthlyIcon = () => (
  <Icon color="action">
    <EventSharp />
  </Icon>
)

const StyledCard = styled(Card)`
  ${AppBreakpoints.PC} {
    flex-grow: 1;
    margin-right: ${AppMargins.PC.VERTICAL};
  }

  ${AppBreakpoints.SP} {
    margin-bottom: ${AppMargins.SP.VERTICAL};
    width: 100%;
  }
`
