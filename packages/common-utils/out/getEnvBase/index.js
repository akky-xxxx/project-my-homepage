"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvBase = void 0;
const InitialValue = {
    BOOLEAN: false,
    NUMBER: 0,
    STRING: "",
};
const getEnvBase = (env) => ({
    boolean: (propertyName, defaultValue = InitialValue.BOOLEAN) => env[propertyName] ? Boolean(env[propertyName]) : defaultValue,
    number: (propertyName, defaultValue = InitialValue.NUMBER) => env[propertyName] ? Number(env[propertyName]) : defaultValue,
    string: (propertyName, defaultValue = InitialValue.STRING) => env[propertyName] || defaultValue,
});
exports.getEnvBase = getEnvBase;
//# sourceMappingURL=index.js.map