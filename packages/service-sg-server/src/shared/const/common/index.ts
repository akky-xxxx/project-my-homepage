import { getEnv } from "common-utils"

const nodeEnvironment = getEnv.string("NODE_ENV")

export const IsDevelopment = nodeEnvironment !== "production"
export const IsTest = nodeEnvironment === "test"
