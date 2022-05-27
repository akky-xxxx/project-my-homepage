import { act, renderHook, RenderHookResult } from "@testing-library/react-hooks"

import { useSpMenu } from "./index"

const props = {
  menu: [
    {
      href: "/href",
      linkText: "リンクテキスト1",
      subMenu: [
        {
          href: "/?1",
          linkText: "サブメニュー1",
        },
        {
          href: "/?2",
          linkText: "サブメニュー2",
        },
      ],
    },
    {
      href: "https://www.google.com/?1",
      linkText: "リンクテキスト2",
    },
    {
      href: "https://www.google.com/?2",
      linkText: "リンクテキスト3",
    },
  ],
}

describe("useSpMenu", () => {
  let renderHookResult: RenderHookResult<
    undefined,
    ReturnType<typeof useSpMenu>
  >

  beforeEach(() => {
    renderHookResult = renderHook(() => useSpMenu(props))
  })

  it("isOpenedMenu の初期値は false", () => {
    expect(renderHookResult.result.current.isOpenedMenu).toBe(false)
  })

  it("handleClickMenuButton を一度実行すると isOpenedMenu が true になる", () => {
    act(() => {
      renderHookResult.result.current.handleClickMenuButton()
    })
    expect(renderHookResult.result.current.isOpenedMenu).toBe(true)
  })

  it("handleClickMenuButton を二度実行すると isOpenedMenu が false になる", () => {
    act(() => {
      renderHookResult.result.current.handleClickMenuButton()
    })
    act(() => {
      renderHookResult.result.current.handleClickMenuButton()
    })
    expect(renderHookResult.result.current.isOpenedMenu).toBe(false)
  })
})
