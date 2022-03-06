import type { AppProps } from "next/app"
import { Fragment } from "react"
import { GlobalStyle } from "../assets/styles"
import { Layout } from "../components/layouts/Layout"

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const { route } = router
  return (
    <Fragment>
      <GlobalStyle />
      <Layout route={route}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
