---
to: "<%= !isOnlyStyle ? `${path}/index.test.tsx` : null %>"
---
import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("<%= componentName %> component", () => {
  render(<Default />)
  expect(screen.getByText("test")).toBeTruthy()
})
