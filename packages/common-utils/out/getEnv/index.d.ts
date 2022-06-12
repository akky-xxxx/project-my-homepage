declare type GetEnvMethod<T> = (propertyName: string, defaultValue?: T) => T;
declare type GetEnv = {
    boolean: GetEnvMethod<boolean>;
    number: GetEnvMethod<number>;
    string: GetEnvMethod<string>;
};
export declare const getEnv: GetEnv;
export {};
