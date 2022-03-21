import { css } from "styled-components"
import { Colors } from "../../../const/Colors"
import { MediaQuery } from "../../../const/MediaQuery"

const { $333333, $fff6e0 } = Colors

export const common = css`
  body {
    background-color: ${$fff6e0};
    color: ${$333333};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .is-only-pc {
    ${MediaQuery.Tb} {
      display: none;
    }
  }

  .is-only-tb {
    ${MediaQuery.Pc} {
      display: none;
    }
  }
`
