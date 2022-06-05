import { inspect } from "util"

import { IsDevelopment } from "../../const/common"

import type { Request, RequestHandler, Response } from "express"

const HasLineBreak = 0

type ApiHandlerCallbackReturn = unknown | void
// TODO: 型を厳密にする
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ApiHandlerCallback<T = ApiHandlerCallbackReturn, Req = any, Res = any> = (
  req: Request<Req>,
  res: Response<Res>,
) => Promise<T>
type ApiHandlerMain = RequestHandler
type ApiHandler = (callback: ApiHandlerCallback) => ApiHandlerMain

export const apiHandler: ApiHandler = (callback) => {
  // FIXME: json を返してるから resolve, reject できない
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const apiHandlerMain: ApiHandlerMain = async (req, res, next) => {
    try {
      const result = await callback(req, res)

      res.json(typeof result === "undefined" ? null : result)
    } catch (error: unknown) {
      next({
        error: inspect(error, {
          breakLength: IsDevelopment ? HasLineBreak : Infinity,
          depth: null,
        }),
        handler: callback.name,
      })
    }
  }
  return apiHandlerMain
}
