import * as process from "process"

type GetEnvMethod<T> = (propertyName: string, defaultValue?: T) => T

type GetEnv = {
  boolean: GetEnvMethod<boolean>
  number: GetEnvMethod<number>
  string: GetEnvMethod<string>
}

const InitialValue = {
  BOOLEAN: false,
  NUMBER: 0,
  STRING: "",
} as const
const { env } = process

export const getEnv: GetEnv = {
  boolean: (propertyName, defaultValue = InitialValue.BOOLEAN) =>
    env[propertyName] ? Boolean(env[propertyName]) : defaultValue,
  number: (propertyName, defaultValue = InitialValue.NUMBER) =>
    env[propertyName] ? Number(env[propertyName]) : defaultValue,
  string: (propertyName, defaultValue = InitialValue.STRING) =>
    env[propertyName] || defaultValue,
}
