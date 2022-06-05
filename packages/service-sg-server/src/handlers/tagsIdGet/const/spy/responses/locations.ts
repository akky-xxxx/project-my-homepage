import type { Locations } from "common-types"

export const locationsData: Locations["data"] = [
  {
    id: 1,
    attributes: {
      locationName: "location1",
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
      locationName: "location2",
      createdAt: "2022-05-05T14:23:04.296Z",
      updatedAt: "2022-05-05T14:23:04.296Z",
      photos: { data: [] },
    },
  },
]
