import { renderHook, RenderHookResult } from "@testing-library/react-hooks"
import { HoCGalleryCardProps } from "../../types"
import { useGalleryCard } from "./index"

const useGalleryCardArguments: HoCGalleryCardProps = {
  handleClickTag: jest.fn(),
  handleOpenModal: jest.fn(),
  tags: ["タグ1", "タグ2"],
  prefName: "prefName",
  selectedViewTags: ["タグ1", "タグ3"],
  takenAt: "2022-01-01",
  thumbnailPath: "https://placehold.jp/300x300.png",
}

describe("useGalleryCard", () => {
  let renderHookResult: RenderHookResult<
    undefined,
    ReturnType<typeof useGalleryCard>
  >

  beforeEach(() => {
    renderHookResult = renderHook(() => useGalleryCard(useGalleryCardArguments))
  })

  it("takenAt が 2022-01-01 だと 2022年1月1日 を返す", () => {
    expect(renderHookResult.result.current.takenAt).toBe("2022年1月1日")
  })
})
