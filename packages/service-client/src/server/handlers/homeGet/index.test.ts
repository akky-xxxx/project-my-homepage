import supertest from "supertest"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "../../modules/initialize"
import { getServer } from "../../modules/getServer"

// テスト＆＆急ぎなので重要じゃないルールは除外
/* eslint-disable no-magic-numbers, sort-keys */

const app = getServer()
const request = supertest(app)

describe("GET /api/home", () => {
  it("home 取得成功時、status: 200 でフロント用のデータを返す", async () => {
    const res = await request.get("/api/home")

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body?.mainVisualPaths)).toBeTruthy()
    if (!Array.isArray(res.body?.mainVisualPaths)) return
    res.body.mainVisualPaths.forEach((mainVisualPath: unknown) => {
      expect(typeof mainVisualPath).toBe("string")
      if (typeof mainVisualPath !== "string") return
      expect(mainVisualPath.startsWith("http")).toBeTruthy()
    })
  })
})
