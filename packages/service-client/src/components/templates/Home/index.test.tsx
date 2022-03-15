import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("HomeTemplate component", () => {
  render(<Default />)
  expect(screen.getByText("Home")).toBeTruthy()
  expect(screen.getByText("月別")).toBeTruthy()
  expect(screen.getByText("都道府県別")).toBeTruthy()
  expect(screen.getByText("タグ別")).toBeTruthy()
})
