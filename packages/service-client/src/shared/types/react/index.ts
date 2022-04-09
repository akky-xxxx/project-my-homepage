import { PropsWithChildren, VFC } from "react"
import { UnknownObject } from "../common"

export type FcWithChildren<P = UnknownObject> = VFC<PropsWithChildren<P>>
