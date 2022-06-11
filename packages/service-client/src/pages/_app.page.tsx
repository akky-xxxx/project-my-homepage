import "react-medium-image-zoom/dist/styles.css"
import Head from "next/head"
import { Fragment } from "react"

import { Layout } from "../components/layouts/Layout"
import { MenuData } from "../shared/const/MenuData"
import { GlobalStyle } from "../shared/styles/globalStyle"
import { getCurrentPagePosition } from "./modules/getCurrentPagePosition"

import type { AppProps } from "next/app"

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { route } = router

  return (
    <Fragment>
      <Head>
        {process.env.NEXT_PUBLIC_PRODUCTION_ENVIRONMENT !== "true" && (
          <meta name="robots" content="noindex nofollow" />
        )}
      </Head>
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
