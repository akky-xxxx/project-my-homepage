import { spyOn } from "jest-mock"

import "../../../../../modules/initialize"
import { strapiApiClient } from "../../../strapiApiClient"
import { getLocationsId } from "./index"

describe("getLocationsId", () => {
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
    expect(await getLocationsId("1")).toBe("sample")
  })

  it("status が 400 の時は error を投げる", async () => {
    spy.mockReturnValue(
      Promise.resolve({
        data: { data: "sample" },
        status: 400,
      }),
    )
    await expect(getLocationsId("1")).rejects.toThrow(
      new Error("getLocationsId status: 400"),
    )
  })
})
