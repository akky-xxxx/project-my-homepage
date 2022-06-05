import type { AxiosResponse } from "axios"
import type { Photos, Tags } from "common-types"

const meta: Photos["meta"] = {
  pagination: {
    page: 0,
    pageCount: 0,
    pageSize: 0,
    total: 0,
  },
}

const photosSpyResponse: Photos = {
  data: [
    {
      id: 1,
      attributes: {
        takenAt: "2022-05-01",
        isShownTop: true,
        createdAt: "2022-05-05T13:09:24.276Z",
        updatedAt: "2022-05-05T14:23:09.948Z",
        publishedAt: "2022-05-05T13:09:24.930Z",
        photo: {
          data: {
            id: 1,
            // 型の定義ミス
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            attributes: {
              name: "コスモス.jpg",
              alternativeText: "コスモス.jpg",
              caption: "コスモス.jpg",
              width: 4912,
              height: 3264,
              formats: {
                thumbnail: {
                  name: "thumbnail_コスモス.jpg",
                  hash: "thumbnail__dc1177953a",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 235,
                  height: 156,
                  size: 8.59,
                  url: "http://localhost:4000/uploads/thumbnail__dc1177953a.jpg",
                },
                large: {
                  name: "large_コスモス.jpg",
                  hash: "large__dc1177953a",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 1000,
                  height: 664,
                  size: 67.25,
                  url: "http://localhost:4000/uploads/large__dc1177953a.jpg",
                },
                medium: {
                  name: "medium_コスモス.jpg",
                  hash: "medium__dc1177953a",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 750,
                  height: 498,
                  size: 44.92,
                  url: "http://localhost:4000/uploads/medium__dc1177953a.jpg",
                },
                small: {
                  name: "small_コスモス.jpg",
                  hash: "small__dc1177953a",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 500,
                  height: 332,
                  size: 25.1,
                  url: "http://localhost:4000/uploads/small__dc1177953a.jpg",
                },
              },
              hash: "_dc1177953a",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 776.65,
              url: "http://localhost:4000/uploads/_dc1177953a.jpg",
              createdAt: "2022-05-05T13:09:15.129Z",
              updatedAt: "2022-05-05T13:09:15.129Z",
            },
          },
        },
        tags: {
          data: [
            {
              id: 1,
              attributes: {
                tagName: "tag1",
                createdAt: "2022-05-05T14:22:58.120Z",
                updatedAt: "2022-05-05T14:22:58.120Z",
              },
            },
          ],
        },
        location: {
          data: {
            id: 1,
            attributes: {
              locationName: "a",
              createdAt: "2022-05-05T13:09:05.121Z",
              updatedAt: "2022-05-05T13:09:05.121Z",
            },
          },
        },
      },
    },
    {
      id: 3,
      // 型の定義ミス
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      attributes: {
        takenAt: "2022-05-01",
        isShownTop: false,
        createdAt: "2022-05-06T12:54:18.517Z",
        updatedAt: "2022-05-06T12:54:44.146Z",
        publishedAt: "2022-05-06T12:54:44.141Z",
        photo: {
          data: {
            id: 3,
            // 型の定義ミス
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            attributes: {
              name: "なみき.jpg",
              alternativeText: "なみき.jpg",
              caption: "なみき.jpg",
              width: 723,
              height: 1087,
              formats: {
                thumbnail: {
                  name: "thumbnail_なみき.jpg",
                  hash: "thumbnail__ae219c46d9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 104,
                  height: 156,
                  size: 5.52,
                  url: "http://localhost:4000/uploads/thumbnail__ae219c46d9.jpg",
                },
                large: {
                  name: "large_なみき.jpg",
                  hash: "large__ae219c46d9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 665,
                  height: 1000,
                  size: 178.16,
                  url: "http://localhost:4000/uploads/large__ae219c46d9.jpg",
                },
                medium: {
                  name: "medium_なみき.jpg",
                  hash: "medium__ae219c46d9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 499,
                  height: 750,
                  size: 107.41,
                  url: "http://localhost:4000/uploads/medium__ae219c46d9.jpg",
                },
                small: {
                  name: "small_なみき.jpg",
                  hash: "small__ae219c46d9",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  path: null,
                  width: 333,
                  height: 500,
                  size: 51.05,
                  url: "http://localhost:4000/uploads/small__ae219c46d9.jpg",
                },
              },
              hash: "_ae219c46d9",
              ext: ".jpg",
              mime: "image/jpeg",
              size: 210.31,
              url: "http://localhost:4000/uploads/_ae219c46d9.jpg",
              createdAt: "2022-05-06T12:54:12.562Z",
              updatedAt: "2022-05-06T12:54:12.562Z",
            },
          },
        },
        tags: {
          data: [
            {
              id: 1,
              attributes: {
                tagName: "tag1",
                createdAt: "2022-05-05T14:22:58.120Z",
                updatedAt: "2022-05-05T14:22:58.120Z",
              },
            },
          ],
        },
      },
    },
  ],
  meta,
}

const tagsSpyResponse: Tags = {
  data: [
    {
      id: 1,
      attributes: {
        tagName: "tag1",
        createdAt: "2022-05-05T14:22:58.120Z",
        updatedAt: "2022-05-05T14:22:58.120Z",
        photos: {
          data: [
            {
              id: 1,
              attributes: {
                takenAt: "2022-05-01",
                isShownTop: true,
                createdAt: "2022-05-05T13:09:24.276Z",
                updatedAt: "2022-05-05T14:23:09.948Z",
                publishedAt: "2022-05-05T13:09:24.930Z",
              },
            },
            {
              id: 3,
              attributes: {
                takenAt: "2022-05-01",
                isShownTop: false,
                createdAt: "2022-05-06T12:54:18.517Z",
                updatedAt: "2022-05-06T12:54:44.146Z",
                publishedAt: "2022-05-06T12:54:44.141Z",
              },
            },
          ],
        },
      },
    },
    {
      id: 2,
      attributes: {
        tagName: "tag2",
        createdAt: "2022-05-05T14:23:04.296Z",
        updatedAt: "2022-05-05T14:23:04.296Z",
        photos: { data: [] },
      },
    },
  ],
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

  return Promise.resolve({
    data: returnValue,
    status: 200,
  })
}
