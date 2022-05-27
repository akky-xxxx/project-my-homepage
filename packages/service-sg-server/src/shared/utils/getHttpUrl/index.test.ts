import "../../../modules/initialize"
import { getHttpUrl } from "."

describe("getHttpUrl", () => {
  it.each([
    ["http://hoge.com", "http://hoge.com"],
    ["https://hoge.com", "https://hoge.com"],
    ["/test", `${process.env.STRAPI_SERVER || ""}/test`],
  ] as const)("引数が %s の時 %s を返す", (argument, expectedValue) => {
    expect(getHttpUrl(argument)).toBe(expectedValue)
  })
})
