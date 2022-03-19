import { VFC } from "react"
import { CustomHead } from "../../atoms/CustomHead"
import { PageAbove } from "../../atoms/PageAbove"
import { HorizonCardWrapper } from "./components/atoms/HorizonCardWrapper"
import { MonthlyCard } from "./components/atoms/MonthlyCard"
import { PrefCard } from "./components/atoms/PrefCard"
import { PrefData } from "./components/atoms/PrefCard/components/PrefChart/types"
import { TagCard } from "./components/atoms/TagCard"
import { TagData } from "./components/atoms/TagCard/components/atoms/TagChart/types"

type HomeTemplateProps = {
  readonly galleryInfoList: { date: string }[]
  readonly prefData: PrefData[]
  startMonth: number
  readonly tagData: TagData[]
}

export const HomeTemplate: VFC<HomeTemplateProps> = (props) => {
  const { galleryInfoList, prefData, startMonth, tagData } = props
  return (
    <div>
      <CustomHead title="Home" />
      <PageAbove title="Home" />

      <HorizonCardWrapper>
        <MonthlyCard
          galleryInfoList={galleryInfoList}
          startMonth={startMonth}
        />
        <PrefCard prefData={prefData} />
      </HorizonCardWrapper>

      <TagCard tagData={tagData} />
    </div>
  )
}
