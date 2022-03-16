import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

function basePlugins(tsconfig = "tsconfig.json") {
  return [
    resolve(),
    typescript({ tsconfig }),
  ]
}

export default [
  {
    external: [/node_modules/],
    input: "src/index.ts",
    output: {
      dir: "./dist",
      preserveModules: true,
      preserveModulesRoot: "src",
      format: "es",
      sourcemap: true,
    },
    plugins: basePlugins()
  },
  {
    external: [/node_modules/],
    input: "src/index.ts",
    output: [
      {
        file: "./dist/kpc.unbundled.js",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins: basePlugins()
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "./dist/kpc.bundled.js",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins: basePlugins()
  },
]
