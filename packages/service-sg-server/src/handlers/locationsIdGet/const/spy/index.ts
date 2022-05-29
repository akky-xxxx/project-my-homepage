import { locationsIdData } from "./responses/locationsId"
import { photosData } from "./responses/photos"
import { tagsData } from "./responses/tags"

import type { AxiosResponse } from "axios"
import type { LocationsId, Photos, Tags } from "common-types"

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

const tagsSpyResponse: Tags = {
  data: tagsData,
  meta,
}

const locationsIdSpyResponse: LocationsId = {
  data: locationsIdData,
  meta,
}

export const mockFunction = (
  endpoint: string,
): Promise<Pick<AxiosResponse, "data" | "status">> => {
  let returnValue
  if (endpoint.startsWith("/photos")) {
    returnValue = photosSpyResponse
  }

  if (endpoint.startsWith("/tags")) {
    returnValue = tagsSpyResponse
  }

  if (endpoint.startsWith("/locations/")) {
    returnValue = locationsIdSpyResponse
  }

  return Promise.resolve({
    data: returnValue,
    status: 200,
  })
}
