import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("MonthlyCard component", () => {
  render(<Default />)
  expect(screen.getByText("月別")).toBeTruthy()
})
