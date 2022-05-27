import { AxiosResponse } from "axios"
import { Locations, Photos, Tags, TagsId } from "common-types"

import { locationsData } from "./responses/locations"
import { photosData } from "./responses/photos"
import { tagsData } from "./responses/tags"
import { tagsIdData } from "./responses/tagsId"

const meta: Photos["meta"] = {
  pagination: {
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  },
}

const photosSpyResponse: Photos = {
  data: photosData,
  meta,
}

const locationsSpyResponse: Locations = {
  data: locationsData,
  meta,
}

const tagsSpyResponse: Tags = {
  data: tagsData,
  meta,
}

const tagsIdSpyResponse: TagsId = {
  data: tagsIdData,
  meta,
}

export const mockFunction = (
  endpoint: string,
): Promise<Pick<AxiosResponse, "data" | "status">> => {
  let returnValue
  if (endpoint.startsWith("/photos")) {
    returnValue = photosSpyResponse
  }

  if (endpoint.startsWith("/locations")) {
    returnValue = locationsSpyResponse
  }

  if (endpoint.startsWith("/tags")) {
    returnValue = tagsSpyResponse
  }

  if (endpoint.startsWith("/tags/")) {
    returnValue = tagsIdSpyResponse
  }

  return Promise.resolve({
    data: returnValue,
    status: 200,
  })
}
