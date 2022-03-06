import { composeStories } from "@storybook/testing-react"
import { render, screen } from "@testing-library/react"
import * as stories from "./index.stories"

const { Close, Open } = composeStories(stories)

describe("MenuDrawer component", () => {
  it("Close", () => {
    render(<Close />)
    expect(() => screen.getByText("Home")).toThrow()
    expect(() => screen.getByText("Photo Gallery")).toThrow()
  })

  it("Open", () => {
    render(<Open />)
    expect(screen.getByText("Home")).toBeTruthy()
    expect(screen.getByText("Photo Gallery")).toBeTruthy()
  })
})
