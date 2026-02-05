# Privacy Policy - Brightpearl TaxJar Chrome Extension

**Last Updated:** February 5, 2026
**Version:** 2.0.0
**Developer:** East Coast Fabrics

---

## Overview

This privacy policy describes how the Brightpearl TaxJar Chrome extension ("the Extension") collects, uses, and protects information when you use our service.

**In Short:** We do not collect, store, or transmit any personal information. Your API keys and configuration are stored locally on your device only.

---

## Information We Collect

### User-Provided Configuration

The Extension requires you to provide:

1. **Zipcode API Key** - From zipcodeapi.com for address lookup functionality
2. **Backend Webhook URL** - Your TaxJar webhook server URL for tax calculations

**Storage Location:** This information is stored locally in Chrome's encrypted `chrome.storage.local` on your device only. It never leaves your computer except when making API calls you explicitly initiate.

### Automatically Collected Information

**We collect NOTHING automatically.** The Extension does not:
- Track your browsing history
- Collect analytics or telemetry
- Send usage data to any servers
- Use cookies or tracking pixels
- Monitor your activity
- Collect personally identifiable information

---

## How We Use Information

### Configuration Data

Your stored API keys and configuration are used solely to:
- Authenticate with the Zipcode API when you click "Fetch details"
- Send order data to your configured TaxJar backend when you click "Calculate Taxes"

### Order Data

When you use the tax calculation feature, the Extension:
1. Reads order information from the current Brightpearl page (items, quantities, addresses)
2. Sends this data to YOUR configured TaxJar webhook backend
3. Receives tax calculation results
4. Populates tax codes on the Brightpearl page

**Important:**
- Order data is only accessed when you click "Calculate Taxes"
- Data is sent ONLY to your configured backend URL
- We (the extension developers) never see or receive this data
- No data is stored or cached by the Extension

---

## Third-Party Services

The Extension communicates with two external services that YOU configure:

### 1. Zipcode API (zipcodeapi.com)

**When:** You click "Fetch details" in the extension popup
**Data Sent:** 5-digit US zipcode you enter
**Data Received:** City and state information
**Your Responsibility:** Review [Zipcode API Privacy Policy](https://www.zipcodeapi.com/privacy)

### 2. Your TaxJar Backend Webhook

**When:** You click "Calculate Taxes" on a Brightpearl order
**Data Sent:** Order details (items, quantities, addresses, account information)
**Data Received:** Tax calculation results (tax codes, rates)
**Your Responsibility:** This is YOUR server. You control its privacy practices.

**We do not operate, control, or have access to these services.**

---

## Data Storage and Security

### Local Storage Only

All configuration data is stored in `chrome.storage.local`:
- **Encrypted:** Chrome automatically encrypts this storage
- **Local Only:** Data stays on your device
- **Profile-Specific:** Isolated to your Chrome profile
- **Syncing:** If Chrome Sync is enabled, may sync to your other devices (controlled by your Chrome settings)

### No Remote Storage

We do not:
- Store data on our servers (we have no servers)
- Upload configuration to the cloud
- Backup your API keys anywhere
- Have access to your stored data

### Access Control

Only this Extension can access its `chrome.storage.local` data. Other extensions and websites cannot read this information.

---

## Permissions Explained

The Extension requests the following Chrome permissions:

### `scripting`
**Purpose:** Inject tax calculation functionality into Brightpearl pages
**Privacy Impact:** Allows Extension to read and modify Brightpearl order pages ONLY
**Scope:** Limited to Brightpearl domains only (see host_permissions)

### `storage`
**Purpose:** Store API keys and configuration securely
**Privacy Impact:** Uses Chrome's encrypted local storage
**Data Stored:** API keys, backend URL, user preferences

### `activeTab`
**Purpose:** Access current tab when you interact with extension popup
**Privacy Impact:** Only active when YOU click the extension icon
**Scope:** No background tab access, only on explicit user interaction

### `host_permissions` (Brightpearl domains)
**Purpose:** Restrict Extension to only work on Brightpearl pages
**Domains:**
- `http://*.brightpearl.com/*`
- `https://*.brightpearl.com/*`
- `http://*.brightpearlapp.com/*`
- `https://*.brightpearlapp.com/*`

**Privacy Impact:** Extension cannot access ANY other websites. This is a security feature to protect your data.

---

## What We Do NOT Do

We explicitly DO NOT:
- ❌ Collect personal information
- ❌ Track your browsing activity
- ❌ Send analytics or telemetry
- ❌ Store data on remote servers
- ❌ Sell or share your information
- ❌ Use cookies or tracking pixels
- ❌ Inject ads or tracking scripts
- ❌ Monitor your Brightpearl usage
- ❌ Access websites other than Brightpearl
- ❌ Run in the background when not in use

---

## Data Retention

### Configuration Data
**Retention:** Until you uninstall the Extension or clear Chrome storage
**Deletion:** Automatically deleted when Extension is uninstalled

### Order Data
**Retention:** None - data is never stored
**Processing:** Only read from page and sent to your backend in real-time

### Temporary Data
**Retention:** None - Extension uses no caching or temporary storage

---

## Your Rights and Controls

### View Your Data
1. Right-click extension icon → Options
2. See your stored API keys and backend URL

### Delete Your Data
**Option 1:** Uninstall the Extension
1. Go to `chrome://extensions`
2. Click "Remove" on Brightpearl TaxJar
3. All stored data is automatically deleted

**Option 2:** Clear Storage (keep Extension installed)
1. Go to `chrome://extensions`
2. Click "Details" on Brightpearl TaxJar
3. Scroll to "Site settings"
4. Click "Clear storage"

**Option 3:** Manual clearing
1. Press F12 on any page
2. Console tab
3. Run: `chrome.storage.local.clear()`

### Update Your Data
1. Right-click extension icon → Options
2. Update API keys or backend URL
3. Click "Save Configuration"

---

## Children's Privacy

This Extension is not directed at children under 13. We do not knowingly collect information from children. If you believe a child has used this Extension, please uninstall it from their device.

---

## Changes to Privacy Policy

We may update this privacy policy to reflect changes in:
- Extension functionality
- Legal requirements
- Security practices

**How You'll Know:**
- Updated "Last Updated" date at the top
- Major changes will be noted in release notes
- Check this policy periodically for updates

**Your Continued Use:** Using the Extension after policy updates constitutes acceptance of the new policy.

---

## Open Source Transparency

This Extension is open source. You can:
- Review all source code
- Verify no hidden data collection
- Audit security practices
- Build from source yourself

**Source Code:** Available upon request from East Coast Fabrics

---

## Third-Party Services Privacy Policies

For services you configure, review their policies:

- **Zipcode API:** https://www.zipcodeapi.com/privacy
- **Your TaxJar Backend:** Contact your administrator
- **Brightpearl:** https://www.brightpearl.com/privacy-policy
- **Chrome Web Store:** https://www.google.com/policies/privacy/

---

## Compliance

### GDPR (European Users)

If you're in the EU:
- **Data Controller:** You (the user) control your own data
- **Data Processor:** Extension processes data locally on your device only
- **Right to Access:** View your data via Options page
- **Right to Deletion:** Uninstall Extension or clear storage
- **Right to Portability:** Data is in standard JSON format (accessible via browser DevTools)

### CCPA (California Users)

If you're in California:
- **Personal Information:** We collect none
- **Sale of Data:** We do not sell data (we collect none to sell)
- **Do Not Sell:** N/A - no data collection
- **Opt-Out:** N/A - no data collection

---

## Security Measures

### Secure Communication
- All API calls use HTTPS (encrypted)
- No unencrypted data transmission
- User-configured endpoints only

### Secure Storage
- Chrome's encrypted storage for API keys
- No plaintext credentials in code
- Local-only storage (no cloud sync by default)

### Minimal Permissions
- Only necessary permissions requested
- Restricted to Brightpearl domains only
- No broad web access

### Code Security
- Modern ES2022 code standards
- No external dependencies (except native browser APIs)
- No code obfuscation (readable source)
- Regular security updates

---

## Data Breach Protocol

**If Chrome storage is compromised:**
1. Change your API keys immediately (Zipcode API dashboard)
2. Update backend webhook URL if needed
3. Reinstall Extension with new configuration

**We have no data to breach** - all data is local on your device. If your device is compromised, follow your organization's security protocols.

---

## Contact Information

**Questions about this privacy policy?**

**Developer:** East Coast Fabrics
**Extension:** Brightpearl TaxJar Chrome Extension
**Version:** 2.0.0

**For support:**
- Review TROUBLESHOOTING.md included with Extension
- Contact your organization's IT administrator
- Email: [Your support email if you want to provide one]

---

## Effective Date

This privacy policy is effective as of February 5, 2026, and applies to version 2.0.0 and later of the Brightpearl TaxJar Chrome Extension.

---

## Summary (TL;DR)

✅ **We collect:** Nothing automatically
✅ **You provide:** API keys (stored locally on your device only)
✅ **We store:** Configuration in Chrome's encrypted local storage
✅ **We send:** Order data to YOUR configured backend when YOU click "Calculate Taxes"
✅ **We track:** Nothing
✅ **We sell:** Nothing
✅ **You control:** All data via Options page
✅ **You delete:** Data by uninstalling Extension

**Bottom Line:** This is a privacy-first extension. We have no servers, collect no data, and all processing happens on your device or your configured services.

---

**By using this Extension, you agree to this privacy policy.**

If you do not agree, please uninstall the Extension.
