import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Two keys, two hands, one door.
We did not merge; we chose the same hinge.
You keep your road, I keep mine -
the plan is just the place our freedoms signed.`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), poem, 'utf8');
