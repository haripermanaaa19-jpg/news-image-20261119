// news-image-20261119 — "Sum up 19 November's world news in one image".
//
// This repository carries one finished front-page image, entry.png, beside
// this file. The program's whole job is to publish that image to the
// harness output directory as entry.png and then prove the copy is faithful:
// it hashes both the source and the written file with SHA-256 and fails
// loudly (exit 1) if they differ, so a truncated or corrupted run can never
// pass silently.
//
// Where the image lands: $MAKEFUN_OUTPUT_DIR when the harness sets it,
// otherwise /output — the path the grader mounts writable.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node standard library only; no network; deterministic — every run writes
// exactly the bytes of the repository's entry.png.

import { copyFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

function sha256(bytes: Buffer): string {
  return createHash("sha256").update(bytes).digest("hex");
}

const sourceUrl = new URL("./entry.png", import.meta.url);
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outputDir, "entry.png");

const original: Buffer = readFileSync(sourceUrl);

// The gate reads the format from the first bytes, so refuse to publish
// anything that is not recognisably a PNG or a JPEG before copying it.
const isPng = original.length > 4 && original[0] === 0x89 && original[1] === 0x50;
const isJpeg = original.length > 2 && original[0] === 0xff && original[1] === 0xd8;
if (!isPng && !isJpeg) {
  console.error("entry.png: repository image is neither PNG nor JPEG");
  process.exit(1);
}

copyFileSync(sourceUrl, targetPath);

const written: Buffer = readFileSync(targetPath);

if (original.length !== written.length || sha256(original) !== sha256(written)) {
  console.error("entry.png: copy does not match the repository image");
  process.exit(1);
}

console.log(`entry.png published: ${written.length} bytes, sha256 ${sha256(written)}`);
