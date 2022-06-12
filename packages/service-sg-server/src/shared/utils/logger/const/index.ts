import { getEnv } from "common-utils"

export const AppInfo = {
  version: getEnv.string("VERSION", "N/A"),
} as const
