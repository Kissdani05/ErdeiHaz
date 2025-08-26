import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const root = path.resolve(process.cwd());
const srcDir = path.join(root, 'public', 'kepek');
const outDir = path.join(root, 'public', 'kepek-webp');
const heroSrc = path.join(srcDir, 'Dani Honlap Apr 16 2025.jpg');
const heroOut = path.join(root, 'public', 'hero.webp');

const exts = new Set(['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG']);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function convertHero() {
  try {
    await sharp(heroSrc)
      .rotate()
      .resize({ width: 2880, height: 1620, fit: 'cover', position: 'entropy', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(heroOut);
    console.log('Hero converted ->', path.relative(root, heroOut));
  } catch (e) {
    console.warn('Hero convert skipped:', e.message);
  }
}

async function convertGallery() {
  await ensureDir(outDir);
  const entries = await fs.readdir(srcDir, { withFileTypes: true });
  for (const ent of entries) {
    if (!ent.isFile()) continue;
    const inPath = path.join(srcDir, ent.name);
    const ext = path.extname(ent.name);
    if (!exts.has(ext)) continue;
    const base = path.basename(ent.name, ext);
    const outPath = path.join(outDir, base + '.webp');
    try {
      const img = sharp(inPath).rotate();
      const meta = await img.metadata();
      const landscape = (meta.width || 0) >= (meta.height || 0);
      const resizeOpts = landscape
        ? { width: 1600, withoutEnlargement: true }
        : { height: 1600, withoutEnlargement: true };
      await img
        .resize(resizeOpts)
        .webp({ quality: 80 })
        .toFile(outPath);
      console.log('Converted ->', path.relative(root, outPath));
    } catch (e) {
      console.warn('Skip', ent.name, e.message);
    }
  }
}

async function main() {
  await convertHero();
  await convertGallery();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
