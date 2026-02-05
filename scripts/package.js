const archiver = require('archiver');
const fs = require('fs-extra');
const path = require('path');

const DIST_DIR = path.join(__dirname, '../dist');
const OUTPUT_DIR = path.join(__dirname, '../releases');
const packageJson = require('../package.json');

async function packageExtension() {
  await fs.ensureDir(OUTPUT_DIR);

  const version = packageJson.version;
  const zipName = `brightpearl-taxjar-v${version}.zip`;
  const zipPath = path.join(OUTPUT_DIR, zipName);

  const output = fs.createWriteStream(zipPath);
  const archive = archiver('zip', { zlib: { level: 9 } });

  output.on('close', () => {
    console.log(`\nPackage created successfully:`);
    console.log(`  File: ${zipName}`);
    console.log(`  Size: ${(archive.pointer() / 1024).toFixed(2)} KB`);
    console.log(`  Location: ${zipPath}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(DIST_DIR, false);
  await archive.finalize();
}

packageExtension().catch(console.error);
