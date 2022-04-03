import supertest from "supertest"
import { isObject } from "remeda"
// node_modules を除き最初に import させるため
// organize-imports-ignore
import "../../modules/initialize"
import { getServer } from "../../modules/getServer"
import { UnknownObject } from "../../../shared/types/common"

const app = getServer()
const request = supertest(app)

const hyphenSyntaxYearMonthRegExp = /^\d{4}-\d{2}$/
const slashSyntaxDateRegExp = /^\d{4}(?:\/\d{2}){2}$/

describe("GET /api/photo-gallery", () => {
  describe("photo-gallery 200 パターン", () => {
    it("200 を返すこと", async () => {
      const res = await request.get("/api/photo-gallery")

      expect(res.status).toBe(200)
    })

    it("cards プロパティがあり、配列である", async () => {
      const res = await request.get("/api/photo-gallery")

      expect(Array.isArray(res.body?.cards)).toBeTruthy()
    })

    it("cards[number] はオブジェクトである", async () => {
      const res = await request.get("/api/photo-gallery")

      if (!Array.isArray(res.body?.cards)) return
      res.body.cards.forEach((card: unknown) => {
        expect(typeof card).toBe("object")
        expect(card).not.toBeNull()
      })
    })

    it("cards[number].imagePath は http で始まる文字列である", async () => {
      const res = await request.get("/api/photo-gallery")

      res.body.cards.forEach((card: unknown) => {
        if (typeof card !== "object" || card === null) return
        const newCard: UnknownObject = { ...card }

        if (typeof newCard.imagePath !== "string") return
        expect(newCard.imagePath.startsWith("http")).toBe(true)
      })
    })

    it("cards[number].location はオブジェクトであり、 locationId, locationName に文字列を持つ", async () => {
      const res = await request.get("/api/photo-gallery")

      res.body.cards.forEach((card: unknown) => {
        if (typeof card !== "object" || card === null) return
        const newCard: UnknownObject = { ...card }

        if (!newCard.location || !isObject(newCard.location)) return
        const location = { ...newCard.location }
        if (
          typeof location.locationId !== "string" ||
          typeof location.locationName !== "string"
        )
          return
        expect(typeof location.locationId === "string").toBeTruthy()
        expect(typeof location.locationName === "string").toBeTruthy()
      })
    })

    it("cards[number].takenAt はオブジェクトであり、 yearMonth, viewTakenAt に文字列を持つ", async () => {
      const res = await request.get("/api/photo-gallery")

      res.body.cards.forEach((card: unknown) => {
        if (typeof card !== "object" || card === null) return
        const newCard: UnknownObject = { ...card }

        if (!newCard.takenAt || !isObject(newCard.takenAt)) return
        const takenAt = { ...newCard.takenAt }
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
