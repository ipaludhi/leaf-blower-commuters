// Angry Judge: The Short Rant Contest — entry program (Node 22, stdlib only).
// Writes one original short rant about a small everyday annoyance to /output/entry.txt.
// The rant: a neighbour leaf-blows three leaves from his driveway to mine at 7am every Saturday.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const RANT =
  'My neighbour starts his leaf blower at 7am to move three leaves from his driveway to mine. He has done this every Saturday for a year. The leaves are now commuters, and I am paying for their travel with my sleep.';

// Writes exactly the rant, no trailing newline: the gate counts characters
// (1-400), so the file is 212 characters / 212 bytes, byte-identical every run.
// Self-check mirrors the sealed gate (1-400 chars, not whitespace only) so a
// bad edit fails loudly here instead of silently in the grader's sandbox.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (RANT.length < 1 || RANT.length > 400) {
  throw new Error(`rant must be 1-400 characters, got ${RANT.length}`);
}
if (RANT.trim().length === 0) {
  throw new Error('rant must not be whitespace only');
}
writeFileSync(join(outDir, 'entry.txt'), RANT, 'utf8');
