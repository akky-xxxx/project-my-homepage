import { Fragment } from "react"

import type { AppProps } from "next/app"

import { Layout } from "../components/layouts/Layout"
import { MenuData } from "../shared/const/MenuData"
import { GlobalStyle } from "../shared/styles/globalStyle"
import { getCurrentPagePosition } from "./modules/getCurrentPagePosition"

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { route } = router
  return (
    <Fragment>
      <GlobalStyle />
      <Layout
        menu={MenuData}
        currentPagePosition={getCurrentPagePosition(route)}
      >
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
