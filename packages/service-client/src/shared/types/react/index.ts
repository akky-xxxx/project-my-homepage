import type { UnknownObject } from "common-types"
import type { PropsWithChildren, FC } from "react"

export type FcWithChildren<P = UnknownObject> = FC<PropsWithChildren<P>>

export type VoidFunction = () => void
