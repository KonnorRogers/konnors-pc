import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

// import { terser } from "rollup-plugin-terser";
// import { brotliCompressSync } from 'zlib'
// import gzipPlugin from 'rollup-plugin-gzip'

export default [
  {
    external: ["lit"],
    input: "src/index.ts",
    output: [
      {
        dir: "./dist",
        format: "es",
        sourcemap: true,
      }
    ],
    plugins: basePlugins()
  },

  // Compressed
  // {
  //   input: "src/index.ts",
  //   output: [
  //     {
  //       name: "components",
  //       file: "dist/components.umd.min.js",
  //       format: "umd",
  //       sourcemap: true,
  //       exports: "named"
  //     },
  //     {
  //       file: "dist/components.module.min.js",
  //       format: "es",
  //       sourcemap: true,
  //     }
  //   ],
  //   plugins: compressionPlugins(),
  // },
]

function basePlugins(tsconfig = "tsconfig.json") {
  return [
    resolve(),
    typescript({ tsconfig }),
  ]
}

// function compressionPlugins(tsconfig = "tsconfig.json") {
//   return [
//     ...basePlugins(tsconfig),
//     terser({
//       compress: {
//         passes: 10
//       }
//     }),
//     // GZIP compression as .gz files
//     gzipPlugin(),
//     // Brotil compression as .br files
//     gzipPlugin({
//         customCompression: content =>
//             brotliCompressSync(Buffer.from(content)),
//         fileName: '.br',
//     }),
//   ]
// }
