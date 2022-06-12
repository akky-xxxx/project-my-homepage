declare type GetEnvMethod<T> = (propertyName: string, defaultValue?: T) => T;
declare type GetEnv = {
    boolean: GetEnvMethod<boolean>;
    number: GetEnvMethod<number>;
    string: GetEnvMethod<string>;
};
declare type GetEnvBase = (env: Record<string, string | undefined>) => GetEnv;
export declare const getEnvBase: GetEnvBase;
export {};
