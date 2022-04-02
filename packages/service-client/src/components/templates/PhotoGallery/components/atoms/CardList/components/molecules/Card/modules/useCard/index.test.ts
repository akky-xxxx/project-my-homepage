import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { useCard } from "./index"

const useCardArguments = {
  imagePath: "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=Card",
  children: () => "背面要素",
} as const

describe("useCard", () => {
  let renderHookResult: RenderHookResult<undefined, ReturnType<typeof useCard>>

  beforeEach(() => {
    renderHookResult = renderHook(() => useCard(useCardArguments))
  })

  it("isShownDetail の初期値は false", () => {
    expect(renderHookResult.result.current.isShownDetail).toBe(false)
  })

  it("handleShowDetail を複数回実行しても isShownDetail は true", () => {
    act(() => {
      renderHookResult.result.current.handleShowDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(true)
    act(() => {
      renderHookResult.result.current.handleShowDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(true)
    act(() => {
      renderHookResult.result.current.handleShowDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(true)
  })

  it("handleHideDetail を複数回実行しても isShownDetail は false", () => {
    act(() => {
      renderHookResult.result.current.handleHideDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(false)
    act(() => {
      renderHookResult.result.current.handleHideDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(false)
    act(() => {
      renderHookResult.result.current.handleHideDetail()
    })
    expect(renderHookResult.result.current.isShownDetail).toBe(false)
  })
})
