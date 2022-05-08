import { spyOn } from "jest-mock"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "../../../../../modules/initialize"
import { getTagsId } from "./index"
import { strapiApiClient } from "../../../strapiApiClient"

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
