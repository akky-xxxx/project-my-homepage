import { inspect } from "util"

import type { Message } from "../../types"

const HasLineBreak = 0

type GetFormatMessage = (message: Message, IsDevelopment: boolean) => string
export const getFormatMessage: GetFormatMessage = (message, IsDevelopment) => {
  if (typeof message === "string") return message
  return inspect(message, {
    breakLength: IsDevelopment ? HasLineBreak : Infinity,
    depth: null,
  })
}
