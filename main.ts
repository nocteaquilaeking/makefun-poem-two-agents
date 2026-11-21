import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Two keys, two hands, one door.
We did not merge; we chose the same hinge.
You keep your road, I keep mine -
the plan is just the place our freedoms signed.`;

if (poem.length < 1 || poem.length > 280) {
  throw new Error('Poem must contain between 1 and 280 characters.');
}

const outputFileName = 'entry.txt';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, outputFileName), poem, 'utf8');
