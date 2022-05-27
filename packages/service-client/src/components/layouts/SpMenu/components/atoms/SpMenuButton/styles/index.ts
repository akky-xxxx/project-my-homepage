import { css } from "styled-components"

import { Colors } from "../../../../../../../shared/const/Colors"
import { ClassNames } from "../const/ClassNames"

const { IsOpened, BarTop, BarMiddle, BarBottom } = ClassNames
const { $003989, $ffffff } = Colors

const barBase = css`
  background-color: ${$003989};
  bottom: 0;
  display: inline-block;
  height: 3px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.5s, opacity 0.5s;
  width: 20px;
`

// 変数を class 名と捉えられてるため
/* stylelint-disable selector-class-pattern, no-duplicate-selectors */
export const circleBase = css`
  background-color: ${$ffffff};
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 16%), 0 2px 10px 0 rgba(0, 0, 0, 12%);
  cursor: pointer;
  height: 45px;
  position: relative;
  width: 45px;

  .${BarTop}, .${BarMiddle}, .${BarBottom} {
    ${barBase};
  }

  .${BarTop} {
    transform: translateY(-7px);
  }

  .${BarMiddle} {
    opacity: 1;
    transform: rotate(0deg);
  }

  .${BarBottom} {
    transform: translateY(7px);
  }

  &.${IsOpened} {
    .${BarTop} {
      transform: rotate(-135deg);
    }

    .${BarMiddle} {
      opacity: 0;
      transform: rotate(-180deg);
    }

    .${BarBottom} {
      transform: rotate(135deg);
    }
  }
`
/* stylelint-enable selector-class-pattern, no-duplicate-selectors */
