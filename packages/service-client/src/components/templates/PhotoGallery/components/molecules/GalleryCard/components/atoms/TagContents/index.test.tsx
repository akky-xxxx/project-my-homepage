import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { NotHasSelected } = composeStories(stories)

describe("TagContents component", () => {
  it("NotHasSelected", () => {
    render(<NotHasSelected />)
    expect(screen.getByText("タグ1")).toBeTruthy()
    expect(screen.getByText("タグ2")).toBeTruthy()
    expect(screen.getByText("タグ3")).toBeTruthy()
  })
})
