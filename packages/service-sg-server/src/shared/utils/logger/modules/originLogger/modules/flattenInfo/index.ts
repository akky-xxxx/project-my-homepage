import { format } from "winston"

/**
 * @description TransformableInfo のネストを一段浅くする
 */
export const flattenInfo = format((info) => {
  if (typeof info.message === "object") {
    // TODO: logForm.TransformableInfo の `[key: string]: any` が any 以外になったら解除
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      ...info,
      // object が渡ってくる可能性がある & type guard 済み
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...info.message,
    } as const
  }

  return info
})
