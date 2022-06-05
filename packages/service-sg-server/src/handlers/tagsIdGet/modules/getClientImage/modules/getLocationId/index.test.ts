import nano from "nanoid"

import { getLocationId } from "."

describe("getLocationId", () => {
  const location = { id: 1 }
  const spy = jest.spyOn(nano, "nanoid")
  spy.mockReturnValue("1234")

  it.each([
    [location, "1"],
    [undefined, "unknown-1234"],
  ] as const)("引数が %o の時 %s を返す", (argument, expectedValue) => {
    expect(getLocationId(argument)).toBe(expectedValue)
  })
})
