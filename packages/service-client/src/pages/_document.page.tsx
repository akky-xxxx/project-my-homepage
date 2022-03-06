import NextDocument, { DocumentContext, Html } from "next/document"
import React from "react"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"

export default class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (App) =>
            ({ Component, router, pageProps }) =>
              styledComponentSheet.collectStyles(
                /* eslint-disable @typescript-eslint/no-unsafe-assignment */
                <App
                  Component={Component}
                  router={router}
                  pageProps={pageProps}
                />,
                /* eslint-enable @typescript-eslint/no-unsafe-assignment */
              ),
        })

      const initialProps = await NextDocument.getInitialProps(context)

      return {
        ...initialProps,
        styles: [
          <Html key="styles" lang="ja">
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </Html>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}
