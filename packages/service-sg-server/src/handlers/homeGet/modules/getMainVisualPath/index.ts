import { Photos } from "common-types"

type GetMainVisualPath = (data: Photos["data"][number]) => string
export const getMainVisualPath: GetMainVisualPath = (data) =>
  data.attributes.photo.data.attributes.formats.large.url
