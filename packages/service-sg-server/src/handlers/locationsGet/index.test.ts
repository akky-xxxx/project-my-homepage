import { spyOn } from "jest-mock"
import supertest from "supertest"
import "../../modules/initialize"

import { getServer } from "../../modules/getServer"
import { strapiApiClient } from "../../shared/utils/strapiApiClient"
import { mockFunction } from "./const/spy"

import type { UnknownObject } from "common-types"
import type { Response } from "supertest"

const app = getServer()
const request = supertest(app)

describe("GET /api/locations", () => {
  describe("locations 200 パターン", () => {
    let spy: ReturnType<typeof spyOn>
    let res: Response

    beforeEach(async () => {
      spy = spyOn(strapiApiClient, "get").mockImplementation(mockFunction)
      res = await request.get("/api/locations")
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
      res.body.images.forEach((location: unknown) => {
        expect(typeof location).toBe("object")
        expect(location).not.toBeNull()
      })
    })

    it("images[number].locationName は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((location: unknown) => {
        if (typeof location !== "object" || location === null) return
        const newLocation: UnknownObject = { ...location }

        expect(typeof newLocation.locationName).toBe("string")
      })
    })

    it("images[number].locationId は文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((location: unknown) => {
        if (typeof location !== "object" || location === null) return
        const newLocation: UnknownObject = { ...location }

        expect(typeof newLocation.locationId).toBe("string")
      })
    })

    it("images[number].imagePath は http で始まる文字列である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((location: unknown) => {
        if (typeof location !== "object" || location === null) return
        const newLocation: UnknownObject = { ...location }

        if (typeof newLocation.imagePath !== "string") return
        expect(newLocation.imagePath.startsWith("http")).toBe(true)
      })
    })

    it("images[number].imageNum は文字列で「枚」で終わる", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((location: unknown) => {
        if (typeof location !== "object" || location === null) return
        const newLocation: UnknownObject = { ...location }

        expect(typeof newLocation.imageNum).toBe("string")
        if (typeof newLocation.imageNum !== "string") return
        expect(newLocation.imageNum.endsWith("枚")).toBeTruthy()
      })
    })

    it("images[number].order は number である", () => {
      expect(spy).toHaveBeenCalled()
      res.body.images.forEach((location: unknown) => {
        if (typeof location !== "object" || location === null) return
        const newLocation: UnknownObject = { ...location }

        expect(typeof newLocation.order).toBe("number")
      })
    })
  })
})
