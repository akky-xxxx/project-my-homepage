import type { NextPage } from "next"
import { Home } from "../components/templates/Home"
import { PrefData } from "../components/templates/Home/components/atoms/PrefCard/components/PrefChart/types"
import { TagData } from "../components/templates/Home/components/atoms/TagCard/components/atoms/TagChart/types"

type HomePageProps = {
  readonly galleryInfoList: { date: string }[]
  readonly prefData: PrefData[]
  readonly tagData: TagData[]
}

const HomePage: NextPage<HomePageProps> = (props) => {
  // TODO: getStaticProps から取得した api data を custom hooks で加工する
  const { galleryInfoList = [], prefData = [], tagData = [] } = props
  const dependencies = { galleryInfoList, prefData, tagData }
  return <Home {...dependencies} />
}

export default HomePage
