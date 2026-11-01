import { cp, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = resolve(root, "www");

const entries = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "sw.js",
  "vendor",
  "icons",
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const entry of entries) {
  const from = resolve(root, entry);
  if (!existsSync(from)) {
    console.warn(`[prepare-www] lewati (tidak ada): ${entry}`);
    continue;
  }
  await cp(from, resolve(out, entry), { recursive: true });
}

console.log(`[prepare-www] selesai -> ${out}`);
