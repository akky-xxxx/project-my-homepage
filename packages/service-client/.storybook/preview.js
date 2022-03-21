import { addDecorator } from "@storybook/react"
import { RouterContext } from "next/dist/shared/lib/router-context"
import { Fragment } from "react"
import { withScreenshot } from "storycap"
import { Colors } from "../src/shared/const/Colors"
import { GlobalStyle } from "../src/shared/styles/globalStyle"

const { $003989, $f0284f, $bf9963, $fff6e0 } = Colors

export const decorators = [withScreenshot]

export const parameters = {
  actions: { argTypesRegex: "^handle[A-Z].*" },
  backgrounds: {
    values: [
      { name: "default", value: $fff6e0 },
      { name: "blue", value: $003989 },
      { name: "red", value: $f0284f },
      { name: "yellow", value: $bf9963 },
    ],
  },
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
}

addDecorator((storyFn) => (
  <Fragment>
    <GlobalStyle />
    {storyFn()}
  </Fragment>
))
