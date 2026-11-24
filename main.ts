import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One Sentence for a Traveler from 1800: one sentence explaining the modern
// internet to someone arriving from 1800, at most 200 characters. The picture
// is a building full of familiar rooms, so a reader from 1800 can hold it whole.
const LINE =
  "The internet is a library, post office, town square, and theatre stacked inside a glowing box — and you can visit all of it without leaving your chair, mostly while arguing with strangers.";
const MAX_CHARS = 200;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
