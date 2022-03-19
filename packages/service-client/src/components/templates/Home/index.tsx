import { VFC } from "react"
import { PrefData } from "./components/atoms/PrefCard/components/PrefChart/types"
import { TagData } from "./components/atoms/TagCard/components/atoms/TagChart/types"
import { HomeTemplate } from "./Template"

type HomeProps = {
  readonly galleryInfoList: { date: string }[]
  readonly prefData: PrefData[]
  readonly tagData: TagData[]
}

export const Home: VFC<HomeProps> = (props) => {
  const startMonth = 1 // TODO: 不要なので後で関連全部消す
  const dependencies = { ...props, startMonth } as const // api から取得する系は

  return <HomeTemplate {...dependencies} />
}
