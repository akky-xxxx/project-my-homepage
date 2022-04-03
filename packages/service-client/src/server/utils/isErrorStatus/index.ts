import { HttpStatus } from "../../const/HttpStatus"

const { BAD_REQUEST } = HttpStatus

type IsErrorStatus = (status: number) => boolean

const ErrorMinStatus = BAD_REQUEST
export const isErrorStatus: IsErrorStatus = (status) => status >= ErrorMinStatus
