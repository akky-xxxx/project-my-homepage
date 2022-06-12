import { getEnv } from "../../src"

process.env.TEST_STRING = "dummy env value"
process.env.TEST_NUMBER = "1"
process.env.TEST_BOOLEAN = "true"

describe("getEnv", () => {
  describe("string method", () => {
    it.each([
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue あり）",
        firstArgument: "TEST_STRING",
        secondArgument: "default value",
        expectedValue: "dummy env value",
      },
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue なし）",
        firstArgument: "TEST_STRING",
        secondArgument: undefined,
        expectedValue: "dummy env value",
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がある場合、 defaultValue を返す",
        firstArgument: "TEST_STRING1",
        secondArgument: "default value",
        expectedValue: "default value",
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がない場合、 defaultValue の初期値を返す",
        firstArgument: "TEST_STRING1",
        secondArgument: undefined,
        expectedValue: "",
      },
    ] as const)("$message", (data) => {
      const { firstArgument, secondArgument, expectedValue } = data
      expect(getEnv.string(firstArgument, secondArgument)).toBe(expectedValue)
    })
  })

  describe("number method", () => {
    it.each([
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue あり）",
        firstArgument: "TEST_NUMBER",
        secondArgument: 2,
        expectedValue: 1,
      },
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue なし）",
        firstArgument: "TEST_NUMBER",
        secondArgument: undefined,
        expectedValue: 1,
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がある場合、 defaultValue を返す",
        firstArgument: "TEST_NUMBER1",
        secondArgument: 2,
        expectedValue: 2,
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がない場合、 defaultValue の初期値を返す",
        firstArgument: "TEST_NUMBER1",
        secondArgument: undefined,
        expectedValue: 0,
      },
    ] as const)("$message", (data) => {
      const { firstArgument, secondArgument, expectedValue } = data
      expect(getEnv.number(firstArgument, secondArgument)).toBe(expectedValue)
    })
  })

  describe("boolean method", () => {
    it.each([
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue あり）",
        firstArgument: "TEST_BOOLEAN",
        secondArgument: true,
        expectedValue: true,
      },
      {
        message:
          "第一引数で指定した環境変数が存在する場合、その値を文字列で返す（defaultValue なし）",
        firstArgument: "TEST_BOOLEAN",
        secondArgument: undefined,
        expectedValue: true,
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がある場合、 defaultValue を返す",
        firstArgument: "TEST_BOOLEAN1",
        secondArgument: true,
        expectedValue: true,
      },
      {
        message:
          "第一引数で指定した環境変数が存在しなく、 defaultValue の指定がない場合、 defaultValue の初期値を返す",
        firstArgument: "TEST_BOOLEAN1",
        secondArgument: undefined,
        expectedValue: false,
      },
    ] as const)("$message", (data) => {
      const { firstArgument, secondArgument, expectedValue } = data
      expect(getEnv.boolean(firstArgument, secondArgument)).toBe(expectedValue)
    })
  })
})
