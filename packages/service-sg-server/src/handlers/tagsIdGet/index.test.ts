import { UnknownObject } from "common-types"
import supertest, { Response } from "supertest"
import "../../modules/initialize"
import { spyOn } from "jest-mock"
import { isObject } from "remeda"
import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { mockFunction } from "./const/spy"

const app = getServer()
const request = supertest(app)

const hyphenSyntaxYearMonthRegExp = /^\d{4}-\d{2}$/
const slashSyntaxDateRegExp = /^\d{4}(?:\/\d{2}){2}$/

describe("GET /api/tags/{tagId}", () => {
  describe("tags/{tagId} 200 パターン", () => {
    let spy: ReturnType<typeof spyOn>
    let res: Response

    beforeEach(async () => {
      spy = spyOn(strapiApiClient, "get").mockImplementation(mockFunction)
      res = await request.get("/api/tags/1")
    })

    afterEach(() => {
      spy.mockRestore()
    })

    it("200 を返すこと", () => {
      expect(spy).toHaveBeenCalled()
      expect(res.status).toBe(200)
    })

    it("images プロパティがあり、配列である", () => {
      expect(spy).toHaveBeenCalled()
      expect(Array.isArray(res.body?.images)).toBeTruthy()
    })

    it("images[number] はオブジェクトである", () => {
      expect(spy).toHaveBeenCalled()
      if (!Array.isArray(res.body?.images)) return
      res.body.images.forEach((image: unknown) => {
        expect(typeof image).toBe("object")
        expect(image).not.toBeNull()
      })
    })

    it("images[number].imageId は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        expect(typeof newImage.imageId).toBe("string")
      })
    })

    it("images[number].imagePath は http で始まる文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        if (typeof newImage.imagePath !== "string") return
        expect(newImage.imagePath.startsWith("http")).toBe(true)
      })
    })

    it("images[number].location はオブジェクトであり、 locationId, locationName に文字列を持つ", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        if (!newImage.location || !isObject(newImage.location)) return
        const location = { ...newImage.location }
        if (
          typeof location.locationId !== "string" ||
          typeof location.locationName !== "string"
        )
          return
        expect(typeof location.locationId === "string").toBeTruthy()
        expect(typeof location.locationName === "string").toBeTruthy()
      })
    })

    it("images[number].takenAt はオブジェクトであり、 yearMonth, viewTakenAt に文字列を持つ", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        if (!newImage.takenAt || !isObject(newImage.takenAt)) return
        const takenAt = { ...newImage.takenAt }
        if (
          typeof takenAt.yearMonth !== "string" ||
          typeof takenAt.viewTakenAt !== "string"
        )
          return

        expect(typeof takenAt.yearMonth === "string").toBeTruthy()
        expect(hyphenSyntaxYearMonthRegExp.test(takenAt.yearMonth)).toBe(true)
        expect(typeof takenAt.viewTakenAt === "string").toBeTruthy()
        expect(slashSyntaxDateRegExp.test(takenAt.viewTakenAt)).toBe(true)
      })
    })
  })
})
