import typescript from "rollup-plugin-typescript2";
export default [
  {
    input: "./src/index.ts",
    output: {
      file: "./lib/index.esm.js",
      format: "esm",
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          exclude: ["**/__tests__", "**/*.spec.ts"], // exclude spec file from build in lib dir
        },
      }),
    ],
  },
  {
    input: "./src/index.ts",
    output: {
      file: "./lib/index.js",
      format: "cjs",
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          exclude: ["**/__tests__", "**/*.spec.ts"], // exclude spec file from build in lib dir
        },
      }),
    ],
  },
];
