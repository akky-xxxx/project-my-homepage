import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Pc, Tablet } = composeStories(stories)

// TODO: 意味のあるテストに変える
describe("Layout component", () => {
  it("Pc", () => {
    render(<Pc />)
    expect(screen.getByText("子要素")).toBeVisible()
  })

  it("Tablet", () => {
    render(<Tablet />)
    expect(screen.getByText("子要素")).toBeVisible()
  })
})
