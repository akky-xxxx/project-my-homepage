import type { TagsId } from "common-types"

export const tagsIdData: TagsId["data"] = {
  id: 1,
  attributes: {
    tagName: "tag1",
    createdAt: "2022-05-05T14:22:58.120Z",
    updatedAt: "2022-05-05T14:22:58.120Z",
    photos: {
      data: [
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
        {
          id: 1,
          attributes: {
            takenAt: "2022-05-01",
            isShownTop: true,
            createdAt: "2022-05-05T13:09:24.276Z",
            updatedAt: "2022-05-08T07:03:41.458Z",
            publishedAt: "2022-05-05T13:09:24.930Z",
          },
        },
      ],
    },
  },
}
