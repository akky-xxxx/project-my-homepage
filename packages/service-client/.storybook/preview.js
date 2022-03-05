import { addDecorator } from "@storybook/react"
import { Fragment } from "react"
import { withScreenshot } from "storycap"
import { GlobalStyle } from "../src/assets/styles"

export const decorators = [withScreenshot]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
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
