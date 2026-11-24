import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'projects');

const sites = [
  { file: 'rentpro.png', url: 'https://equipment-rental-platform-seven.vercel.app' },
  { file: 'bondhubondhon.png', url: 'https://bondhu-bondhon.vercel.app' },
  { file: 'bazar-dor.png', url: 'https://bazar-dor-inky.vercel.app' },
  { file: 'fit-log.png', url: 'https://fit-log-fawn.vercel.app' },
];

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
try {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  for (const { file, url } of sites) {
    console.log(`Capturing ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(outDir, file) });
    console.log(`Saved public/projects/${file}`);
  }
} finally {
  await browser.close();
}
