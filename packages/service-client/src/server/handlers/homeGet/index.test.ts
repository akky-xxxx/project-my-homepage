import supertest from "supertest"
import { spyOn } from "jest-mock"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "../../modules/initialize"
import { strapiApiClient } from "../../utils/strapiApiClient"
import { getServer } from "../../modules/getServer"
import { spyResponse } from "./const/spy"

const app = getServer()
const request = supertest(app)

describe("GET /api/home", () => {
  it("home 取得成功時、status: 200 でフロント用のデータを返す", async () => {
    const spy = spyOn(strapiApiClient, "get")
    spy.mockReturnValue(Promise.resolve(spyResponse))
    const res = await request.get("/api/home")

    expect(spy).toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body?.mainVisualPaths)).toBeTruthy()
    if (!Array.isArray(res.body?.mainVisualPaths)) return
    res.body.mainVisualPaths.forEach((mainVisualPath: unknown) => {
      expect(typeof mainVisualPath).toBe("string")
      if (typeof mainVisualPath !== "string") return
      expect(mainVisualPath.startsWith("http")).toBeTruthy()
    })
    spy.mockRestore()
  })
})
