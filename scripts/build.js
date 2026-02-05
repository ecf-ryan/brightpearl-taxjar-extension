const fs = require('fs-extra');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const DIST_DIR = path.join(__dirname, '../dist');
const CONFIG_DIR = path.join(__dirname, '../config');

async function build(env = 'prod') {
  console.log(`Building extension for ${env} environment...`);

  // Clean dist directory
  await fs.emptyDir(DIST_DIR);

  // Copy all source files
  await fs.copy(SRC_DIR, DIST_DIR, {
    filter: (src) => {
      // Exclude source maps, tests, etc.
      return !src.includes('.test.') && !src.includes('.map');
    }
  });

  // Load configuration
  const configFile = path.join(CONFIG_DIR, `config.${env}.json`);
  if (await fs.pathExists(configFile)) {
    const config = await fs.readJSON(configFile);

    // Inject config into chrome.storage initialization
    const initScript = `
// Auto-injected configuration
chrome.runtime.onInstalled.addListener(async () => {
  const existing = await chrome.storage.local.get(['config']);
  if (!existing.config) {
    await chrome.storage.local.set({
      config: ${JSON.stringify(config, null, 2)}
    });
    console.log('Configuration initialized');
  }
});
`;

    // Append to background.js
    const backgroundPath = path.join(DIST_DIR, 'background.js');
    if (await fs.pathExists(backgroundPath)) {
      const backgroundContent = await fs.readFile(backgroundPath, 'utf8');
      await fs.writeFile(backgroundPath, backgroundContent + '\n' + initScript);
    }
  }

  // Update manifest version
  const manifestPath = path.join(DIST_DIR, 'manifest.json');
  if (await fs.pathExists(manifestPath)) {
    const manifest = await fs.readJSON(manifestPath);
    const packageJson = require('../package.json');
    manifest.version = packageJson.version;
    await fs.writeJSON(manifestPath, manifest, { spaces: 2 });
  }

  console.log('Build completed successfully!');
  console.log(`Output: ${DIST_DIR}`);
}

const env = process.argv.includes('--env=dev') ? 'dev' : 'prod';
build(env).catch(console.error);
