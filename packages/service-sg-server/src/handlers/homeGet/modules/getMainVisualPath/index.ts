import { Photos } from "common-types"
import { getHttpUrl } from "../../../../shared/utils/getHttpUrl"

type GetMainVisualPath = (data: Photos["data"][number]) => string
export const getMainVisualPath: GetMainVisualPath = (data) =>
  getHttpUrl(data.attributes.photo.data.attributes.formats.large.url)
