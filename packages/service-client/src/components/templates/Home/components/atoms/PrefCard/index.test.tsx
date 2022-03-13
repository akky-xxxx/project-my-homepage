import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Default } = composeStories(stories)

it("PrefCard component", () => {
  render(<Default />)
  expect(screen.getByText("都道府県別")).toBeTruthy()
})
