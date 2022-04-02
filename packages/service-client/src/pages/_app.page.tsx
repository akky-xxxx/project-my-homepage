import type { AppProps } from "next/app"
import { Fragment } from "react"
import { Layout } from "../components/layouts/Layout"
import { MenuData } from "../shared/const/MenuData"
import { GlobalStyle } from "../shared/styles/globalStyle"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <GlobalStyle />
    <Layout menu={MenuData} currentPagePosition={0}>
      <Component {...pageProps} />
    </Layout>
  </Fragment>
)

export default MyApp
