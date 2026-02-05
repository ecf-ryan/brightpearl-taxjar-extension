# Brightpearl TaxJar Chrome Extension - Enterprise Deployment Guide

## Overview

**Brightpearl TaxJar** is a Chrome extension that automates tax calculation for Brightpearl orders using the TaxJar API. This guide is for IT administrators deploying the extension via enterprise policies.

**Version:** 2.0.0
**Manifest:** V3
**Size:** ~100KB
**Target:** Enterprise/managed Chrome browsers

---

## 📦 What's in the Package

- **brightpearl-taxjar-v2.0.0.zip** - Unpacked extension for policy deployment
- **manifest.json** - Extension configuration (Manifest V3)
- **All source files** - Modernized ES2022 code

## 🔧 Features

- ✅ **Zipcode Lookup** - Auto-fills city/state from zipcode via zipcodeapi.com
- ✅ **Tax Calculation** - Calculates taxes via custom TaxJar webhook backend
- ✅ **Form Monitoring** - Detects order changes and enforces tax recalculation
- ✅ **Brightpearl-Only** - Extension only activates on Brightpearl pages
- ✅ **Secure Configuration** - API keys stored in encrypted chrome.storage
- ✅ **Modern Code** - ES2022, async/await, no jQuery

---

## 🚀 Deployment Methods

### Method 1: ExtensionInstallForcelist (Recommended)

Deploy via **Google Workspace Admin Console** or **Windows Group Policy**.

#### Google Workspace Admin:

1. Navigate to: **Admin Console** → **Devices** → **Chrome** → **Apps & Extensions**
2. Click **"Add Chrome app or extension by ID"**
3. Enter the **Extension ID** (get from chrome://extensions after first load)
4. Or upload the `.crx` file directly
5. Select **organizational units** to deploy to
6. Set installation policy to **"Force install"**
7. Click **Save**

#### Windows Group Policy:

Create/edit: `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist`

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist]
"1"="{EXTENSION_ID};https://internal-server.com/extensions/brightpearl-taxjar-v2.0.0.crx"
```

Replace `{EXTENSION_ID}` with your extension's ID.

#### macOS plist:

```xml
<key>ExtensionInstallForcelist</key>
<array>
  <string>{EXTENSION_ID};https://internal-server.com/extensions/brightpearl-taxjar-v2.0.0.crx</string>
</array>
```

### Method 2: Developer Mode (Testing Only)

For testing or small-scale deployment:

1. Open Chrome → `chrome://extensions`
2. Enable **"Developer mode"** (top right toggle)
3. Click **"Load unpacked"**
4. Select the **dist/** folder
5. Note the **Extension ID** for policy deployment

⚠️ **Not recommended for production** - Users can disable developer mode extensions.

### Method 3: Self-Hosted CRX

Host the .crx file on your internal web server:

```xml
<key>ExtensionInstallForcelist</key>
<array>
  <string>{EXTENSION_ID};https://your-server.com/extensions/brightpearl-taxjar.crx</string>
</array>
```

**Requirements:**
- HTTPS server
- Proper MIME type: `application/x-chrome-extension`
- Accessible by all managed devices

---

## 🔐 Configuration

The extension requires two configuration values:

### Required Settings:

1. **Zipcode API Key** - From [zipcodeapi.com](https://www.zipcodeapi.com/)
2. **Backend URL** - Your TaxJar webhook server (e.g., `https://eastcoastfabricstaxjar.bsol30610.com/`)

### Configuration Methods:

#### Option A: Build-Time Injection (Recommended)

1. Edit `config/config.prod.json`:

```json
{
  "apiKeys": {
    "zipcode": "YOUR_ZIPCODE_API_KEY_HERE"
  },
  "baseUrl": "https://your-backend-url.com/",
  "environment": "production"
}
```

2. Rebuild the extension:

```bash
npm install
npm run build:prod
npm run package
```

The configuration will be automatically injected into `chrome.storage` on first install.

#### Option B: Post-Installation Configuration

Users configure after installation:

1. Right-click extension icon → **"Options"**
2. Enter **Zipcode API Key**
3. Enter **Backend URL** (must end with `/`)
4. Click **"Save Configuration"**

Configuration is stored securely in Chrome's encrypted `chrome.storage.local`.

---

## 📋 Permissions Required

The extension requests the following permissions:

| Permission | Purpose |
|------------|---------|
| `scripting` | Inject content scripts into Brightpearl pages |
| `storage` | Store API keys and configuration securely |
| `activeTab` | Access current tab when user interacts with extension |
| `host_permissions` | Run on Brightpearl domains only |

**Host Permissions:**
- `http://*.brightpearl.com/*`
- `https://*.brightpearl.com/*`
- `http://*.brightpearlapp.com/*`
- `https://*.brightpearlapp.com/*`

The extension **only activates on Brightpearl pages** - the icon is grayed out on all other sites.

---

## 🔄 Updates

To update the extension:

1. **Increment version** in `package.json` (e.g., `2.0.0` → `2.0.1`)
2. **Rebuild**: `npm run build && npm run package`
3. **Re-deploy** using the same method as initial installation
4. Chrome will **auto-update** when detecting the new version

### Update Frequency:

- **Major versions** (2.x.x → 3.x.x): Breaking changes, require testing
- **Minor versions** (x.1.x → x.2.x): New features, should test
- **Patch versions** (x.x.1 → x.x.2): Bug fixes, can deploy immediately

---

## 🔍 Verification & Monitoring

### Check Extension Installation:

On managed devices, users will see:
- Extension icon in toolbar
- Badge: **"Installed by enterprise policy"**
- Cannot be disabled or removed by user

### Verify Configuration:

1. Right-click extension icon → **Options**
2. Verify API keys are present (or show placeholder)
3. Test zipcode lookup on a Brightpearl page

### Check for Errors:

1. Navigate to `chrome://extensions`
2. Find "Brightpearl TaxJar"
3. Click **"service worker"** link
4. Check console for errors

**Good Signs:**
- No red errors in console
- Extension icon enabled on Brightpearl pages
- Zipcode lookup populates fields correctly

**Bad Signs:**
- Red errors in service worker console
- Extension shows as "Corrupted"
- Icon stays grayed out on Brightpearl pages

---

## 🛠️ Troubleshooting

### Extension Not Loading

**Symptoms:** Shows as "Corrupted" or doesn't appear

**Solutions:**
1. Verify `manifest.json` is valid JSON
2. Check all referenced files exist in dist/
3. Rebuild: `npm run build`
4. Check Chrome version supports Manifest V3

### Configuration Not Working

**Symptoms:** "API key not configured" errors

**Solutions:**
1. Verify config was injected at build time
2. Check `config/config.prod.json` has correct values
3. Manually configure via Options page
4. Check `chrome://quota-internals` for storage quota

### Tax Calculation Fails

**Symptoms:** Button does nothing or shows errors

**Solutions:**
1. Verify backend URL is correct and accessible
2. Check backend server is running
3. Test backend endpoints directly (curl/Postman)
4. Check browser console for detailed errors
5. Verify order has all required fields

### Zipcode Lookup Doesn't Work

**Symptoms:** Fields don't populate after clicking "Fetch details"

**Solutions:**
1. Verify Zipcode API key is valid
2. Check quota limits on zipcodeapi.com account
3. Test with known valid zipcode (e.g., 10001)
4. Check network tab for API call failures

---

## 📊 Technical Details

### Architecture:

```
Extension Components:
├── background.js (Service Worker) - Icon enable/disable logic
├── content.js (Content Script) - Tax calculation on Brightpearl pages
├── popup.html/js - Zipcode lookup interface
├── config-manager.js - Secure configuration access
├── utils.js - Modern DOM/AJAX utilities (replaces jQuery)
└── config-setup.html/js - Configuration UI
```

### Size Comparison:

| Component | Old (v1.1) | New (v2.0) | Change |
|-----------|------------|------------|--------|
| jQuery | 82KB | 0KB | -100% |
| Total Size | ~182KB | ~100KB | -45% |

### Code Quality:

- ✅ **ES2022** - Modern JavaScript (const/let, async/await, fetch)
- ✅ **Manifest V3** - Latest Chrome extension standard
- ✅ **No jQuery** - Reduced size, better performance
- ✅ **Secure** - No hardcoded API keys
- ✅ **Event Delegation** - Efficient event handling (15+ → 2-3 listeners)

---

## 📞 Support

### Common Issues:

See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions.

### Getting the Extension ID:

1. Load extension (unpacked or via policy)
2. Go to `chrome://extensions`
3. Copy the ID shown below extension name
4. Use this ID in policy configurations

### Reporting Issues:

When reporting issues, include:
- Chrome version
- Extension version
- Operating system
- Error messages from console
- Steps to reproduce

---

## 📄 License & Attribution

**Author:** East Coast Fabrics
**Version:** 2.0.0
**Manifest Version:** 3
**Last Updated:** February 2026

---

## ✅ Pre-Deployment Checklist

- [ ] API keys configured in `config/config.prod.json`
- [ ] Extension built: `npm run build:prod`
- [ ] Package created: `npm run package`
- [ ] Tested in staging environment
- [ ] Extension ID noted for policy configuration
- [ ] Policy/registry settings configured
- [ ] Documentation shared with support team
- [ ] Rollout plan prepared (pilot group → full deployment)
- [ ] Rollback plan prepared

---

## 🎯 Quick Start for IT Admins

```bash
# 1. Extract the package
unzip brightpearl-taxjar-v2.0.0.zip -d taxjar-extension

# 2. Configure (if not pre-configured)
cd taxjar-extension
nano config/config.prod.json
# Edit API keys

# 3. Build and package
npm install
npm run build:prod
npm run package

# 4. Deploy via policy
# Upload dist/ or releases/*.crx to your deployment system
# Configure ExtensionInstallForcelist with extension ID
# Push policy to managed devices

# 5. Verify
# Check on test device that extension loads
# Right-click icon → Options to verify config
```

---

**For individual user installation instructions, see [README-INDIVIDUAL.md](README-INDIVIDUAL.md)**
