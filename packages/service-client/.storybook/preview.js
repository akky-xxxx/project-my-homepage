import { addDecorator } from "@storybook/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { Fragment } from "react"
import { withScreenshot } from "storycap"
import { GlobalStyle } from "../src/assets/styles"

export const decorators = [withScreenshot]

export const parameters = {
  actions: { argTypesRegex: "^handle[A-Z].*" },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  screenshot: {
    // Put global screenshot parameters(e.g. viewport)
  },
}

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
))
