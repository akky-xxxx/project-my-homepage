import styled from "styled-components"

import { Margins } from "../../../shared/const/Margins"
import { MediaQuery } from "../../../shared/const/MediaQuery"

const { Margin16, Margin8 } = Margins

export const ItemsWrapper = styled.div`
  display: grid;

  ${MediaQuery.Pc} {
    /* TODO: chrome 等が対応したらコメントを消す */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    grid-template-columns: repeat(4, calc(25% - calc(${Margin16}px * 3 / 4)));
    gap: ${Margin16}px;
  }

  ${MediaQuery.Tb} {
    /* TODO: chrome 等が対応したらコメントを消す */
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    grid-template-columns: repeat(2, calc(50% - calc(${Margin8}px * 3 / 4)));
    gap: ${Margin8}px;
  }
`
