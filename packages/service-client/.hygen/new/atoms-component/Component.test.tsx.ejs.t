---
to: "<%= !isOnlyStyle ? `${path}/index.test.tsx` : null %>"
---
import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

describe("<%= componentName %> component", () => {
  it("Default pattern", () => {
    render(<Default />)
    expect(screen.getByText("test")).toBeVisible()
  })
})
