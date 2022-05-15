import { useState, useEffect } from "react"

export const useHasHover = () => {
  const [hasHover, setHasHover] = useState(false)

  useEffect(() => {
    setHasHover(window.matchMedia("(hover: hover)").matches)
  }, [])

  return hasHover
}
