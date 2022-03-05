import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { useLayout } from "./index"

describe("useLayout", () => {
  let result: RenderHookResult<
    { route: "/route" },
    ReturnType<typeof useLayout>
  >

  beforeEach(() => {
    result = renderHook(() =>
      useLayout({
        route: "/route",
      }),
    )
  })
  it("初期値", () => {
    expect(result.result.current.isMenuOpen).toBe(false)
    expect(result.result.current.route).toBe("/route")
  })
  it("handleOpenMenu を実行すると isMenuOpen が true になる", () => {
    expect(result.result.current.isMenuOpen).toBe(false)
    act(() => {
      result.result.current.handleOpenMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(true)
  })

  it("isMenuOpen が true の時に　handleCloseMenu を実行すると isMenuOpen が false になる", () => {
    act(() => {
      result.result.current.handleOpenMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(true)
    act(() => {
      result.result.current.handleCloseMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(false)
  })
  it("handleOpenMenu, handleCloseMenu を複数回実行", () => {
    act(() => {
      result.result.current.handleOpenMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(true)
    act(() => {
      result.result.current.handleCloseMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(false)
    act(() => {
      result.result.current.handleCloseMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(false)
    act(() => {
      result.result.current.handleOpenMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(true)
    act(() => {
      result.result.current.handleOpenMenu()
    })
    expect(result.result.current.isMenuOpen).toBe(true)
  })
})
