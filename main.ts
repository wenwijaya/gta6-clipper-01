// gta6-clipper-01 — make.fun entry program (Node 22, stdlib only, no network).
//
// What this program does:
//   Copies VIDEO.json — the pointer to the public YouTube Short/video that
//   carries this entry's GTA 6 clip — from the repository into the output
//   directory, byte for byte. The grader reads /output/VIDEO.json to find
//   the video, check it is public, read its description for the bounty line
//   and the entrant's play code, and count its views.
//
// The clip itself lives on YouTube, not in this repo: the video is a
// vertical cut of the official GTA VI Trailer 2 (Rockstar Games), edited
// with ffmpeg into four beats — sunny Vice City, police chase, neon
// nightclub, Lucia driving at dusk — followed by an end card pitching
// make.fun. The user uploads it from their own YouTube channel and the
// VIDEO.json url is then pointed at the real Shorts link.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

if (!existsSync(source)) {
  console.error(`VIDEO.json not found at ${source}`);
  process.exit(1);
}

// Fail loudly on a malformed pointer instead of copying it blindly: the
// file must be valid JSON with a url string pointing at the public video.
let parsed;
try {
  parsed = JSON.parse(readFileSync(source, "utf8"));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (typeof parsed?.url !== "string" || !parsed.url.startsWith("https://")) {
  console.error("VIDEO.json must contain a string field 'url' starting with https://");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`Copied ${source} -> ${target}`);
