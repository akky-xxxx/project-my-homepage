import { Divider, Typography } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"
import { AppBreakpoints, AppMargins } from "../../../shared/const/styles"

type PageAboveProps = {
  title: string
}

export const PageAbove: VFC<PageAboveProps> = (props) => {
  const { title } = props

  return (
    <div>
      <PageAboveInner>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
      </PageAboveInner>

      <Divider />
    </div>
  )
}

const PageAboveInner = styled.div`
  ${AppBreakpoints.PC} {
    padding: ${AppMargins.PC.VERTICAL} ${AppMargins.PC.HORIZON};
  }

  ${AppBreakpoints.SP} {
    padding: ${AppMargins.SP.VERTICAL} ${AppMargins.SP.HORIZON};
  }
`
