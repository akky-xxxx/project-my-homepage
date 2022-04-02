import { UrlMap } from "../../const/UrlMap"

type GetUrlArguments = Partial<Record<"id", string>>
type Targets = keyof typeof UrlMap
type GetUrl = (targets: Targets, options?: GetUrlArguments) => string

export const getUrl: GetUrl = (targets, options) => {
  if (!options) {
    return UrlMap[targets]
  }

  let replaceUrl: string = UrlMap[targets]
  Object.entries(options).forEach(([keyName, value]) => {
    replaceUrl = replaceUrl.replace(`{${keyName}}`, value)
  })
  return replaceUrl
}
