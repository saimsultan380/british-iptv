// Memory-safe dev launcher.
//
// Why this exists: `next dev` defaults to Turbopack, which runs in a separate
// Rust process whose memory cannot be capped by Node flags. On low-RAM
// machines this can exhaust system memory and freeze the OS. Running the
// Webpack bundler instead keeps compilation inside the Node process, so the
// `--max-old-space-size` cap below puts a hard ceiling on memory usage.

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HEAP_LIMIT_MB = process.env.DEV_HEAP_LIMIT_MB || "4096";

const nodeOptions = [process.env.NODE_OPTIONS, `--max-old-space-size=${HEAP_LIMIT_MB}`]
  .filter(Boolean)
  .join(" ");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextBin = path.join(__dirname, "..", "node_modules", "next", "dist", "bin", "next");

const args = ["dev", "--webpack", ...process.argv.slice(2)];

console.log(`Starting Next.js dev (webpack, heap cap ${HEAP_LIMIT_MB} MB)...`);

const child = spawn(process.execPath, [nextBin, ...args], {
  stdio: "inherit",
  env: { ...process.env, NODE_OPTIONS: nodeOptions },
});

child.on("exit", (code) => process.exit(code ?? 0));
child.on("error", (err) => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
