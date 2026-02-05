# Brightpearl TaxJar Chrome Extension

**Version 2.0.0** - Modernized Chrome Extension for Brightpearl Tax Calculation

## 🎯 Overview

The **Brightpearl TaxJar** extension automates tax calculation for Brightpearl sales orders and provides convenient zipcode-to-city/state lookups.

### Key Features

- ✅ **Zipcode Lookup** - Auto-fills city/state from US zipcodes
- ✅ **Tax Calculation** - Calculates taxes via TaxJar API integration
- ✅ **Brightpearl-Only** - Automatically detects and only activates on Brightpearl pages
- ✅ **Secure** - API keys stored in encrypted Chrome storage
- ✅ **Modern** - Built with ES2022, Manifest V3, zero dependencies

### What's New in v2.0.0

- 🚀 **Fully modernized** - ES2022, async/await, fetch API
- 📦 **45% smaller** - jQuery removed (182KB → 100KB)
- 🔒 **More secure** - No hardcoded API keys
- ⚡ **Better performance** - Event delegation (15+ listeners → 2-3)
- ✨ **MV3 compliant** - All deprecated APIs fixed
- 🎨 **CSS spinner** - No external image dependencies

---

## 📚 Documentation

Choose the guide that matches your use case:

### For IT Administrators / Enterprise Deployment

📘 **[README-ENTERPRISE.md](README-ENTERPRISE.md)**

Covers:
- Enterprise deployment via Google Workspace/Group Policy
- ExtensionInstallForcelist configuration
- Build-time configuration injection
- Updates and version management
- Enterprise troubleshooting

### For Individual Users

📗 **[README-INDIVIDUAL.md](README-INDIVIDUAL.md)**

Covers:
- Developer mode installation
- Manual configuration via Options page
- Step-by-step usage instructions
- Personal Chrome browser setup
- FAQ for individual users

### Troubleshooting Guide

🔧 **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

Covers:
- Common errors and solutions
- Configuration issues
- Tax calculation problems
- Console debugging tips
- Health check checklist

---

## 🎯 Deployment Options

Choose the installation method that best fits your needs:

| Method | Best For | Developer Mode? | Auto-Updates? | Cost |
|--------|----------|-----------------|---------------|------|
| **Chrome Web Store (Unlisted)** | Organizations wanting easy deployment | ❌ No | ✅ Yes | $5 one-time |
| **Enterprise Policy** | IT-managed organizations | ❌ No | ✅ Yes | Free |
| **Developer Mode** | Individual users, testing | ✅ Yes | ❌ No | Free |

**Recommended:** Chrome Web Store (Unlisted) for most users - easiest installation without Developer mode.

---

## 🚀 Quick Start

### For Developers

```bash
# 1. Install dependencies
npm install

# 2. Build extension
npm run build

# 3. Load in Chrome
# - Open chrome://extensions
# - Enable "Developer mode"
# - Click "Load unpacked"
# - Select the `dist/` folder

# 4. Configure
# - Right-click extension icon → Options
# - Enter API keys
# - Save configuration
```

### For End Users

See [README-INDIVIDUAL.md](README-INDIVIDUAL.md) for detailed installation instructions.

### For IT Admins

See [README-ENTERPRISE.md](README-ENTERPRISE.md) for enterprise deployment instructions.

### For Chrome Web Store (Private Distribution)

See [WEBSTORE-QUICKSTART.md](WEBSTORE-QUICKSTART.md) for publishing to Chrome Web Store with Unlisted visibility.

**Benefits:**
- Install without Developer mode
- Auto-updates
- Private link distribution (not searchable)
- One-time $5 fee
- Works on any Chrome browser

---

## 📦 Build & Package

### Development Build

```bash
npm run build:dev
```

Creates development build in `dist/` with dev configuration.

### Production Build

```bash
npm run build:prod
```

Creates production build in `dist/` with production configuration.

### Create Distribution Package

```bash
npm run package
```

Creates `releases/brightpearl-taxjar-v2.0.0.zip` for distribution.

---

## 🔧 Configuration

The extension requires two configuration values:

### 1. Zipcode API Key
Get from [zipcodeapi.com](https://www.zipcodeapi.com/)
- Free tier: 50 requests/month
- Used for city/state lookups

### 2. Backend Webhook URL
Your TaxJar webhook server URL
- Example: `https://eastcoastfabricstaxjar.bsol30610.com/`
- Must end with trailing slash (`/`)

### Configuration Methods

**Option A: Build-Time (Recommended for Enterprise)**

Edit `config/config.prod.json`:
```json
{
  "apiKeys": {
    "zipcode": "YOUR_API_KEY"
  },
  "baseUrl": "https://your-backend.com/",
  "environment": "production"
}
```

Then build: `npm run build:prod`

**Option B: Runtime (User Configuration)**

After installation:
1. Right-click extension icon → Options
2. Enter API keys
3. Save

---

## 🏗️ Architecture

```
Extension Structure:
├── background.js       - Service worker (icon enable/disable)
├── content.js          - Main tax calculation logic (387 lines)
├── popup.html/js/css   - Zipcode lookup UI
├── config-manager.js   - Configuration management
├── utils.js            - Modern DOM/fetch utilities (3KB)
├── tab.js              - Zipcode API integration
└── config-setup.*      - Configuration UI
```

### Technology Stack

- **Manifest Version:** 3 (latest Chrome standard)
- **JavaScript:** ES2022 (const/let, async/await, optional chaining)
- **HTTP Client:** Fetch API (no jQuery)
- **Event Handling:** Event delegation pattern
- **Storage:** chrome.storage.local (encrypted)
- **Build System:** Node.js scripts

---

## 📊 Size Comparison

| Component | v1.1 | v2.0 | Change |
|-----------|------|------|--------|
| jQuery | 82KB | 0KB | -100% |
| Total | 182KB | 100KB | -45% |

---

## 🔒 Permissions

| Permission | Purpose |
|------------|---------|
| `scripting` | Inject content scripts into Brightpearl pages |
| `storage` | Store API keys securely |
| `activeTab` | Access current tab on user interaction |
| `host_permissions` | Run on Brightpearl domains only |

**Domains:**
- `http://*.brightpearl.com/*`
- `https://*.brightpearl.com/*`
- `http://*.brightpearlapp.com/*`
- `https://*.brightpearlapp.com/*`

---

## 🧪 Testing

### Manual Testing

1. Load extension: `chrome://extensions` → Load unpacked
2. Configure: Right-click icon → Options → Enter API keys
3. Test zipcode: Open Brightpearl → Click icon → Enter 10001 → Fetch
4. Test tax calc: Sales order → Fill details → Calculate Taxes
5. Check console: F12 → Console (should have no errors)

### Verify Modernization

```bash
# Check for legacy patterns (should return nothing)
grep -r "var " dist/content.js
grep -r "\.ajax(" dist/
grep -r "\$(" dist/content.js
grep -r "function(" dist/content.js
```

All should return no results (except in comments).

---

## 📁 Project Structure

```
/
├── src/                    # Source files
│   ├── background.js       # Service worker
│   ├── content.js          # Content script
│   ├── popup.html/js/css   # Popup UI
│   ├── config-manager.js   # Config management
│   ├── config-setup.*      # Configuration UI
│   ├── tab.js              # Zipcode lookup
│   ├── utils.js            # Utilities
│   └── manifest.json       # Extension manifest
├── dist/                   # Built extension (gitignored)
├── config/                 # Configuration templates
│   ├── config.dev.json     # Development config
│   └── config.prod.json    # Production config
├── scripts/                # Build scripts
│   ├── build.js            # Main build script
│   └── package.js          # Package script
├── releases/               # Distribution packages (gitignored)
├── package.json            # npm configuration
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── README-ENTERPRISE.md    # Enterprise guide
├── README-INDIVIDUAL.md    # Individual user guide
└── TROUBLESHOOTING.md      # Troubleshooting guide
```

---

## 🔄 Version History

### v2.0.0 (February 2026)
- ✨ Complete modernization to ES2022
- 🗑️ Removed jQuery dependency (82KB → 0KB)
- 🔧 Fixed all deprecated MV3 APIs
- 🔒 Moved API keys to secure storage
- ⚡ Optimized event handling (15+ → 2-3 listeners)
- 🎨 CSS-based loading spinner
- 📝 Comprehensive documentation
- 📦 Enterprise deployment support

### v1.1 (Previous)
- Initial Manifest V3 migration
- Basic functionality
- jQuery-based implementation

---

## 🤝 Contributing

### Development Setup

```bash
# Clone/download repository
cd ecf-taxjar-chrome

# Install dependencies
npm install

# Make changes in src/

# Test changes
npm run build:dev
# Load dist/ in chrome://extensions

# Build for production
npm run build:prod
npm run package
```

### Code Standards

- ✅ Use ES2022 features (const/let, async/await)
- ✅ No jQuery or external dependencies
- ✅ Use strict equality (`===`)
- ✅ Optional chaining for safety (`?.`)
- ✅ Template literals for strings
- ✅ Async/await for promises
- ✅ Event delegation for efficiency

---

## 📄 License

**Author:** East Coast Fabrics
**Maintained by:** Internal Development Team

---

## 📞 Support

### Getting Help

1. **Check documentation**
   - [Individual Users](README-INDIVIDUAL.md)
   - [Enterprise](README-ENTERPRISE.md)
   - [Troubleshooting](TROUBLESHOOTING.md)

2. **Console errors**
   - Press F12 → Console tab
   - Screenshot errors and share with admin

3. **Service worker logs**
   - chrome://extensions → "service worker"
   - Check for background errors

### Reporting Issues

When reporting issues, include:
- Extension version (from chrome://extensions)
- Chrome version (from chrome://version)
- Operating system
- Error messages (from console)
- Steps to reproduce
- Screenshots if applicable

---

## ✅ Health Check

Quick verification that everything is working:

```bash
# 1. Extension loads without errors
✓ Listed in chrome://extensions
✓ No "Errors" button visible
✓ Service worker shows "active"

# 2. Configuration works
✓ Options page opens
✓ Configuration saves successfully
✓ No console errors

# 3. Brightpearl detection works
✓ Icon grayed out on non-Brightpearl pages
✓ Icon enabled on Brightpearl pages

# 4. Features work
✓ Zipcode lookup populates city/state
✓ "Calculate Taxes" button appears on orders
✓ Tax calculation completes successfully

# 5. No legacy code
✓ No jQuery loaded
✓ No deprecated API errors
✓ Modern ES2022 patterns throughout
```

---

## 🎯 Quick Links

- **Installation:** [README-INDIVIDUAL.md](README-INDIVIDUAL.md)
- **Enterprise Deployment:** [README-ENTERPRISE.md](README-ENTERPRISE.md)
- **Troubleshooting:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Chrome Extensions:** [chrome://extensions](chrome://extensions)
- **Zipcode API:** [zipcodeapi.com](https://www.zipcodeapi.com/)

---

**Built with ❤️ for Brightpearl users**
