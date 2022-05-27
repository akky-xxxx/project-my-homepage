import { UnknownObject } from "common-types"
import { spyOn } from "jest-mock"
import supertest, { Response } from "supertest"
import "../../modules/initialize"

import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { mockFunction } from "./const/spy"

const app = getServer()
const request = supertest(app)

describe("GET /api/tags", () => {
  describe("tags 200 パターン", () => {
    let spy: ReturnType<typeof spyOn>
    let res: Response

    beforeEach(async () => {
      spy = spyOn(strapiApiClient, "get").mockImplementation(mockFunction)
      res = await request.get("/api/tags")
    })

    afterEach(() => {
      spy.mockRestore()
    })

    it("200 を返すこと", () => {
      expect(spy).toHaveBeenCalled()
      expect(res.status).toBe(200)
    })

    it("tags プロパティがあり、配列である", () => {
      expect(spy).toHaveBeenCalled()
      expect(Array.isArray(res.body?.tags)).toBeTruthy()
    })

    it("tags[number] はオブジェクトである", () => {
      expect(spy).toHaveBeenCalled()
      if (!Array.isArray(res.body?.tags)) return
      res.body.tags.forEach((tag: unknown) => {
        expect(typeof tag).toBe("object")
        expect(tag).not.toBeNull()
      })
    })

    it("tags[number].tagName は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.tags.forEach((tag: unknown) => {
        if (typeof tag !== "object" || tag === null) return
        const newTag: UnknownObject = { ...tag }

        expect(typeof newTag.tagName).toBe("string")
      })
    })

    it("tags[number].tagId は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.tags.forEach((tag: unknown) => {
        if (typeof tag !== "object" || tag === null) return
        const newTag: UnknownObject = { ...tag }

        expect(typeof newTag.tagId).toBe("string")
      })
    })

    it("tags[number].imagePath は http で始まる文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.tags.forEach((tag: unknown) => {
        if (typeof tag !== "object" || tag === null) return
        const newTag: UnknownObject = { ...tag }

        if (typeof newTag.imagePath !== "string") return
        expect(newTag.imagePath.startsWith("http")).toBe(true)
      })
    })

    it("tags[number].imageNun は数字である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.tags.forEach((tag: unknown) => {
        if (typeof tag !== "object" || tag === null) return
        const newTag: UnknownObject = { ...tag }

        expect(typeof newTag.imageNum).toBe("number")
      })
    })
  })
})
