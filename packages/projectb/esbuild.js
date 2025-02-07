import { build } from "esbuild"

const watch = process.argv.includes("--watch")
const success = watch ? "Watch build succeeded" : "Build succeeded"
const env = process.env.NODE_ENV
const minify = env === "production";

const buildOptions = {
  bundle: true,
  external: ["vscode"],
  platform: "node",
  sourcemap: !minify,
  minify: minify,
  format: "cjs",
  outExtension: { ".js": ".cjs" },
  loader: { ".ts": "ts" },
  target: "ES2020",
}

const buildConfigs = [
  {
    entryPoints: ["src/extension.ts"],
    outdir: "out",
  },
]

Promise.all(
  buildConfigs.map(config =>
    build({ ...buildOptions, ...config }).catch(error => {
      console.error(`Build failed for config:`, config)
      throw error // Re-throw to maintain fail-fast behavior
    })
  )
)
  .then(() => console.log(success))
  .catch(error => {
    console.error("Build failed", error)
    process.exit(1)
  })

if (watch) {
  console.log("Watching for changes...")
}
