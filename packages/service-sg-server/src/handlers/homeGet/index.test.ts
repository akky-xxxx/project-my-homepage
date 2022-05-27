import { spyOn } from "jest-mock"
import supertest from "supertest"

import "../../modules/initialize"
import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
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
