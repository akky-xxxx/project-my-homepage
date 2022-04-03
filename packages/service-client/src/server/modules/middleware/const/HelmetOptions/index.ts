import { HelmetOptions as HelmetOptionsType } from "helmet"
import { IsDevelopment } from "../../../../../shared/const/common"

export const HelmetOptions: HelmetOptionsType = {
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: !IsDevelopment,
} as const
