import { UnknownObject } from "common-types"
import { PropsWithChildren, FC } from "react"

export type FcWithChildren<P = UnknownObject> = FC<PropsWithChildren<P>>

export type VoidFunction = () => void
