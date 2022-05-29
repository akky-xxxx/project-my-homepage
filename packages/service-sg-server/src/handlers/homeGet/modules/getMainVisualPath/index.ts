import { getHttpUrl } from "../../../../shared/utils/getHttpUrl"

import type { Photos } from "common-types"

type GetMainVisualPath = (data: Photos["data"][number]) => string
export const getMainVisualPath: GetMainVisualPath = (data) =>
  getHttpUrl(data.attributes.photo.data.attributes.formats.large.url)
