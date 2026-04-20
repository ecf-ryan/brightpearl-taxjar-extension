const fs = require('fs-extra');
const path = require('path');
const crx3 = require('crx3');

async function createCRX() {
  const distDir = path.join(__dirname, '..', 'dist');
  const releasesDir = path.join(__dirname, '..', 'releases');
  const keyPath = path.join(releasesDir, 'extension.pem');

  // Read package.json for version
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8')
  );
  const version = packageJson.version;

  // Ensure releases directory exists
  await fs.ensureDir(releasesDir);

  console.log('Creating CRX package for enterprise deployment...');

  // Generate private key if it doesn't exist
  let privateKey;
  if (!fs.existsSync(keyPath)) {
    console.log('Generating new private key (extension.pem)...');
    privateKey = await crx3.generatePrivateKey();
    await fs.writeFile(keyPath, privateKey);
    console.log('✅ Private key generated and saved to releases/extension.pem');
    console.log('⚠️  IMPORTANT: Keep this key secure! You need it for all future updates.');
  } else {
    console.log('Using existing private key from releases/extension.pem');
    privateKey = await fs.readFile(keyPath);
  }

  // Create CRX
  console.log('Packaging extension...');
  const crxBuffer = await crx3([distDir], {
    keyPath: keyPath,
    crxPath: path.join(releasesDir, `brightpearl-taxjar-v${version}.crx`)
  });

  const crxPath = path.join(releasesDir, `brightpearl-taxjar-v${version}.crx`);
  const stats = fs.statSync(crxPath);
  const fileSizeInKB = (stats.size / 1024).toFixed(2);

  console.log('\n✅ CRX package created successfully!');
  console.log(`  File: brightpearl-taxjar-v${version}.crx`);
  console.log(`  Size: ${fileSizeInKB} KB`);
  console.log(`  Location: ${crxPath}`);
  console.log(`  Key: ${keyPath}`);
  console.log('\n📦 Ready for Google Workspace enterprise deployment!');
  console.log('\nNext steps:');
  console.log('1. Upload the .crx file to a publicly accessible URL');
  console.log('2. Create an update.xml file (see README-ENTERPRISE.md)');
  console.log('3. Configure Google Workspace Admin Console');
  console.log('4. KEEP extension.pem SECURE - needed for all future updates!');
}

createCRX().catch(error => {
  console.error('Error creating CRX:', error);
  process.exit(1);
});
