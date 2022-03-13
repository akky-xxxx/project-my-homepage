import { colors, createTheme } from "@mui/material"
import { omit } from "remeda"

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

type ColorKey = keyof typeof colors
const colorsBase = omit<Record<ColorKey, unknown>, ColorKey>(colors, ["common"])
type MuiColorKey = keyof typeof colorsBase

// Object.keys の戻り値を厳密に定義したいため
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const Colors = (Object.keys(colorsBase) as MuiColorKey[])
  // ハードコーディングの値に意味がないため
  // eslint-disable-next-line no-magic-numbers
  .map((key) => colors[key][500])
  .sort()
