import { getFormatMessage } from "."

const expectedValue = `{
  text: '1'
}`

describe("getFormatMessage", () => {
  describe("開発ビルドの時", () => {
    it("文字列 text を渡したら文字列 text を返す", () => {
      expect(getFormatMessage("text", true)).toBe("text")
    })

    it("オブジェクト { text: '1' } を渡したら文字列 '{ text: 1 }' を返す", () => {
      expect(getFormatMessage({ text: "1" }, true)).toBe(expectedValue)
    })
  })

  describe("本番ビルドの時", () => {
    it("文字列 text を渡したら文字列 text を返す", () => {
      expect(getFormatMessage("text", false)).toBe("text")
    })

    it("オブジェクト { text: '1' } を渡したら文字列 '{ text: 1 }' を返す", () => {
      expect(getFormatMessage({ text: "1" }, false)).toBe("{ text: '1' }")
    })
  })
})
