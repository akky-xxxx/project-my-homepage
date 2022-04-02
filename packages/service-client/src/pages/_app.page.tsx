import type { AppProps } from "next/app"
import { Fragment } from "react"
import { Layout } from "../components/layouts/Layout"
import { GlobalStyle } from "../shared/styles/globalStyle"
import { MenuData } from "../shared/const/MenuData/indedx"

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <GlobalStyle />
    <Layout menu={MenuData} currentPagePosition={0}>
      <Component {...pageProps} />
    </Layout>
  </Fragment>
)

export default MyApp
