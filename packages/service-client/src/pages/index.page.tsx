import { HomeTemplate } from "../components/templates/Home"
import { bffApiClient } from "../shared/utils/bffApiClient"

import type { GetStaticProps, NextPage } from "next"

type HomePageProps = {
  mainVisualPaths: string[]
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { mainVisualPaths } = props
  return <HomeTemplate mainVisualPaths={mainVisualPaths} />
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const { data: result } = await bffApiClient.getApiHome()

  return {
    props: result,
  }
}

export default HomePage
