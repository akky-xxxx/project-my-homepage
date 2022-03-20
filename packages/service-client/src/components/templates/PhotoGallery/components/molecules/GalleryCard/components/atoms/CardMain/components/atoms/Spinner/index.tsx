import { CircularProgress, Grid } from "@mui/material"
import { VFC } from "react"
import styled from "styled-components"

export const Spinner: VFC = () => (
  <StyledGrid container alignItems="center" justifyContent="center">
    <CircularProgress />
  </StyledGrid>
)

const StyledGrid = styled(Grid)`
  height: 200px;
`
