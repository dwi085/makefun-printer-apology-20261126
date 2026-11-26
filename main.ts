// The Printer Apology — make.fun entry
// Writes one apology line from an office printer to /output/entry.txt.
// Gate: UTF-8 text, 1-120 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry I jammed on your deadline \u2014 the cheap paper choked me, the staple stabbed me, and honestly, I just gave up.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the sealed gate before writing: 1-120 chars, not blank.
if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} characters`);
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outDir}/entry.txt`);
