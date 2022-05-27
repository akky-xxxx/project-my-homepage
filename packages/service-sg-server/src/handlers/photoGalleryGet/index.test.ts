import { UnknownObject } from "common-types"
import { spyOn } from "jest-mock"
import supertest, { Response } from "supertest"
import "../../modules/initialize"

import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { spyResponse } from "./const/spy"

const app = getServer()
const request = supertest(app)

const slashSyntaxDateRegExp = /^\d{4}(?:\/\d{2}){2}$/

describe("GET /api/photo-gallery", () => {
  describe("photo-gallery 200 パターン", () => {
    let spy: ReturnType<typeof spyOn>
    let res: Response

    beforeEach(async () => {
      spy = spyOn(strapiApiClient, "get")
      spy.mockReturnValue(Promise.resolve(spyResponse))
      res = await request.get("/api/photo-gallery")
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

    it("images[number].width は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        expect(typeof newImage.width).toBe("number")
      })
    })

    it("images[number].height は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        expect(typeof newImage.height).toBe("number")
      })
    })

    it("images[number].locationName は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        expect(typeof newImage.locationName).toBe("string")
      })
    })

    it("images[number].takenAt は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((image: unknown) => {
        if (typeof image !== "object" || image === null) return
        const newImage: UnknownObject = { ...image }

        expect(typeof newImage.takenAt).toBe("string")
        if (typeof newImage.takenAt !== "string") return
        expect(slashSyntaxDateRegExp.test(newImage.takenAt)).toBe(true)
      })
    })
  })
})
