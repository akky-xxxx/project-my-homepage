import { spyOn } from "jest-mock"

import "../../../../../modules/initialize"
import { strapiApiClient } from "../../../strapiApiClient"
import { getLocations } from "./index"

describe("getLocations", () => {
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
    expect(await getLocations()).toBe("sample")
  })

  it("status が 400 の時は error を投げる", async () => {
    spy.mockReturnValue(
      Promise.resolve({
        data: { data: "sample" },
        status: 400,
      }),
    )
    await expect(getLocations()).rejects.toThrow(
      new Error("getLocations status: 400"),
    )
  })
})
