import { UnknownObject } from "common-types"
import { PropsWithChildren, VFC } from "react"

export type FcWithChildren<P = UnknownObject> = VFC<PropsWithChildren<P>>

export type VoidFunction = () => void
