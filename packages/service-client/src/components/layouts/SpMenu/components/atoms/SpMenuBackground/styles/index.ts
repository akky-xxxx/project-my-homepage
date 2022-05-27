import { css } from "styled-components"

import { Colors } from "../../../../../../../shared/const/Colors"
import { ClassNames } from "../const/ClassNames"
import { ZIndexes } from "../const/ZIndexes"

const { $003989, $f0284f, $ffffff } = Colors
const { IsOpened, BlueLayer, RedLayer, WhiteLayer } = ClassNames

const positions = css`
  left: 0;
  right: 0;
  top: 0;
`

// 変数を class 名と捉えられてるため
/* stylelint-disable selector-class-pattern, no-duplicate-selectors */
export const wrapperBase = css`
  ${positions};
  bottom: 0;
  overflow: hidden;
  position: fixed;

  .${BlueLayer}, .${RedLayer}, .${WhiteLayer} {
    ${positions};
    bottom: 100%;
    position: absolute;
    transition: bottom 0.3s;
  }

  .${BlueLayer} {
    background-color: ${$003989};
    transition-delay: 0s;
    z-index: ${ZIndexes.Blue};
  }

  .${RedLayer} {
    background-color: ${$f0284f};
    transition-delay: 0.1s;
    z-index: ${ZIndexes.Red};
  }

  .${WhiteLayer} {
    background-color: ${$ffffff};
    transition-delay: 0.2s;
    z-index: ${ZIndexes.White};
  }

  &.${IsOpened} {
    .${BlueLayer} {
      bottom: 20px;
      transition-delay: 0.2s;
    }

    .${RedLayer} {
      bottom: 10px;
      transition-delay: 0.1s;
    }

    .${WhiteLayer} {
      bottom: 0;
      transition-delay: 0s;
    }
  }
`
/* stylelint-enable selector-class-pattern, no-duplicate-selectors */
