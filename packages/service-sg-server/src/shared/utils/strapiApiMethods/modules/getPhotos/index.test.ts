import { spyOn } from "jest-mock"
import "../../../../../modules/initialize"
import { getPhotos } from "./index"
import { strapiApiClient } from "../../../strapiApiClient"

describe("getPhotos", () => {
  let spy: ReturnType<typeof spyOn>

  beforeEach(() => {
    spy = spyOn(strapiApiClient, "get")
  })

  afterEach(() => {
    spy.mockRestore()
  })

  it("status が 200 の時は data.data（=sample）を返す", async () => {
    spy.mockReturnValue(
      Promise.resolve({
        data: { data: "sample" },
        status: 200,
      }),
    )
    expect(await getPhotos()).toBe("sample")
  })

  it("status が 400 の時は error を投げる", async () => {
    spy.mockReturnValue(
      Promise.resolve({
        data: { data: "sample" },
        status: 400,
      }),
    )
    await expect(getPhotos()).rejects.toThrow(
      new Error("getPhotos status: 400"),
    )
  })
})
