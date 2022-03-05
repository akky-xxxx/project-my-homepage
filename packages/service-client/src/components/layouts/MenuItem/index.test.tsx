import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("MenuItem component", () => {
  render(<Default />)
  const testElement = screen.getByText("リンクテキスト")
  expect(testElement).toBeTruthy()
  expect(testElement.getAttribute("href")).toBe("/")
})
