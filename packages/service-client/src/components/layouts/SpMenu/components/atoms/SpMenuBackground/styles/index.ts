import { css } from "styled-components"
import { Colors } from "../../../../../../../shared/const/Colors"
import { ClassNames } from "../const/ClassNames"
import { ZIndexes } from "../const/ZIndexes"

const { $003989, $f0284f, $ffffff } = Colors
const { IsOpened, BlueLayer, RedLayer, WhiteLayer } = ClassNames

const positions = css`
  bottom: 0;
  left: 0;
  right: 0;
`

// 変数を class 名と捉えられてるため
/* stylelint-disable selector-class-pattern, no-duplicate-selectors */
export const wrapperBase = css`
  ${positions};
  overflow: hidden;
  position: fixed;
  top: 0;

  .${BlueLayer}, .${RedLayer}, .${WhiteLayer} {
    ${positions};
    position: absolute;
    top: 100%;
    transition: top 0.3s;
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
      top: 20px;
      transition-delay: 0.2s;
    }

    .${RedLayer} {
      top: 10px;
      transition-delay: 0.1s;
    }

    .${WhiteLayer} {
      top: 0;
      transition-delay: 0s;
    }
  }
`
/* stylelint-enable selector-class-pattern, no-duplicate-selectors */
