import { act, renderHook } from "@testing-library/react-hooks"

import { usePcMainMenu } from "."

import type { HoCPcMainMenuProps } from "../../types"
import type { RenderHookResult } from "@testing-library/react-hooks"

const usePcMainMenuArguments: HoCPcMainMenuProps = {
  currentPagePosition: 0,
  menuData: [
    {
      href: "https://www.google.com/",
      linkText: "リンクテキスト1",
    },
    {
      href: "/href",
      linkText: "リンクテキスト2",
    },
  ],
}

describe("usePcMainMenu", () => {
  let renderHookResult: RenderHookResult<
    undefined,
    ReturnType<typeof usePcMainMenu>
  >

  beforeEach(() => {
    renderHookResult = renderHook(() => usePcMainMenu(usePcMainMenuArguments))
  })

  it("markerPosition の初期値は 0", () => {
    expect(renderHookResult.result.current.markerPosition).toBe(0)
  })

  it("handleHoverMenu に 2 を渡すと markerPosition は 2 になる", () => {
    act(() => {
      renderHookResult.result.current.handleHoverMenu(2)
    })
    expect(renderHookResult.result.current.markerPosition).toBe(2)
  })
})
