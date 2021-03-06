import { spyOn } from "jest-mock"

import "../../../../../modules/initialize"
import { strapiApiClient } from "../../../strapiApiClient"
import { getTagsId } from "./index"

describe("getTagsId", () => {
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
    expect(await getTagsId("1")).toBe("sample")
  })

  it("status が 400 の時は error を投げる", async () => {
    spy.mockReturnValue(
      Promise.resolve({
        data: { data: "sample" },
        status: 400,
      }),
    )
    await expect(getTagsId("1")).rejects.toThrow(
      new Error("getTagsId status: 400"),
    )
  })
})
