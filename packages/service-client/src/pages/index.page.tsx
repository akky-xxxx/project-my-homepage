import { GetStaticProps, NextPage } from "next"
import { HomeTemplate } from "../components/templates/Home"

type HomePageProps = {
  mainVisualPaths: string[]
}

const HomePage: NextPage<HomePageProps> = (props) => {
  const { mainVisualPaths } = props
  return <HomeTemplate mainVisualPaths={mainVisualPaths} />
}

// TODO: 非同期処理を組み込んだら disable を消す
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<HomePageProps> = async () =>
  // TODO: bff の endpoint を叩いた結果に置き換える
  ({
    props: {
      mainVisualPaths: [
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image1",
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image2",
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image3",
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image4",
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image5",
        "http://placehold.jp/3d4070/ffffff/2000x1000.png?text=image6",
      ],
    },
  })

export default HomePage
