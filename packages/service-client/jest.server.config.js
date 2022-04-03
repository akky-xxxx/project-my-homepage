module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": [
      "@swc/jest",
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )

        module: {
          type: "commonjs", // 出力するファイルをcommonjsとする
        },

        jsc: {
          parser: {
            syntax: "typescript", // ソースコードをtypescriptとしてパースする
            tsx: true, // jsx記法を許可する
          },
        },
      },
    ],
  },
  testMatch: ["**/server/**/?(*.)test.ts"],
}
