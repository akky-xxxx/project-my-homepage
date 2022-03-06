import { createTheme } from "@mui/material"

const { spacing, breakpoints } = createTheme()

/**
 * グロナビの余白の付け方にあわせてる
 */
export const AppBreakpoints = {
  PC: breakpoints.up("sm"),
  SP: breakpoints.down("xs"),
} as const

/**
 * 横の余白はグロナビの余白の付け方にあわせてる
 */
export const AppMargins = {
  // 定数用のハードコーディングのため
  /* eslint-disable no-magic-numbers */
  PC: {
    HORIZON: spacing(3),
    VERTICAL: spacing(2),
  },
  SP: {
    HORIZON: spacing(2),
    VERTICAL: spacing(1),
  },
  /* eslint-enable no-magic-numbers */
} as const
