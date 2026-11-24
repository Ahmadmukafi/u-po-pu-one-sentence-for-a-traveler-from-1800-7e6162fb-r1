import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: one sentence (151 bytes, no trailing newline) written to entry.txt.
const line = "Imagine a road on which every library, post office, and market in the world stands shoulder to shoulder, and your letter arrives before the ink is dry.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
