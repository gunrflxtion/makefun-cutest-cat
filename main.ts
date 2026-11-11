// Cutest-cat entry: writes the bundled kitten picture to the output directory
// as entry.png. The picture is a JPEG stored under a .png name, which the
// competition allows (it tells PNG and JPEG apart by their first bytes).
// Run outside the grader with MAKEFUN_OUTPUT_DIR set, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const picture = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(picture, join(outDir, "entry.png"));
