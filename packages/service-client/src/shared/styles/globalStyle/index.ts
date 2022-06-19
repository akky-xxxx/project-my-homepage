import "react-medium-image-zoom/dist/styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { createGlobalStyle } from "styled-components"

import { common } from "./common"
import { reset } from "./reset"

export const GlobalStyle = createGlobalStyle`
${reset};
${common};
`
