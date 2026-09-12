import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

// Export only public files: never ship the generated SSR server.
const candidates = ["dist/client", ".output/public"];
let source;
for (const candidate of candidates) {
  try {
    const html = await readFile(path.join(candidate, "index.html"), "utf8");
    if (html.includes("Дом") && html.includes("<h1")) {
      source = candidate;
      break;
    }
  } catch { /* Try the next supported output directory. */ }
}
if (!source) throw new Error("Prerendered index.html is missing. Static deployment aborted.");

const output = "static-dist";
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });

// Preserve exact URLs, including Unicode filenames, on any static host.
const assetOrigin = "https://terskol-chalet-escape.lovable.app";
const pointers = (await readdir("src/assets")).filter((file) => file.endsWith(".asset.json"));
for (const filename of pointers) {
  const asset = JSON.parse(await readFile(path.join("src/assets", filename), "utf8"));
  if (!asset.url.startsWith("/__l5e/assets-v1/") || asset.url.includes("..")) {
    throw new Error(`Invalid asset path: ${filename}`);
  }
  const response = await fetch(new URL(asset.url, assetOrigin), { signal: AbortSignal.timeout(60000) });
  if (!response.ok) throw new Error(`Asset download failed: ${filename} (${response.status})`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length !== asset.size || !response.headers.get("content-type")?.includes(asset.content_type)) {
    throw new Error(`Asset validation failed: ${filename}`);
  }
  const destination = path.join(output, asset.url);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
}
await stat(path.join(output, "index.html"));
console.log(`Static site exported to ${output}/ with ${pointers.length} local assets. No server required.`);