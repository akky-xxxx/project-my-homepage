import { createGlobalStyle } from "styled-components"
import { common } from "./common"
import { reset } from "./reset"

export const GlobalStyle = createGlobalStyle`
${reset};
${common};
`