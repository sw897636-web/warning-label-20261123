import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Warning Label for Humans — one line, big laugh.
// The label, exactly as printed on every human being:
const LINE =
  "WARNING: This human has read the instructions twice and will now do it their own way. Stand clear.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE, "utf8");
