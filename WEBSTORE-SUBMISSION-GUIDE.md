# Chrome Web Store Submission Guide - Brightpearl TaxJar Extension

## Overview

This guide walks you through publishing the Brightpearl TaxJar extension to the Chrome Web Store with **Unlisted** visibility, allowing private distribution without Developer mode.

---

## Prerequisites

### 1. Chrome Web Store Developer Account

**Cost:** $5 one-time registration fee

**Steps:**
1. Visit: [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
2. Click **"Sign in"** with your Google account
3. Click **"Pay registration fee"**
4. Complete payment ($5 USD)
5. Accept Developer Agreement

✅ **Once paid, you can publish unlimited extensions**

### 2. Required Materials

All materials are prepared in this repository:
- ✅ Extension package (.zip)
- ✅ Store listing content
- ✅ Privacy policy
- ✅ Screenshots (you'll create these)
- ✅ Promotional images (optional but recommended)

---

## Step-by-Step Submission

### Step 1: Build Production Package

```bash
cd /Users/ryanmiller/Documents/Development/ecf-taxjar-chrome
npm run build:prod
npm run package
```

This creates: `releases/brightpearl-taxjar-v2.0.0.zip` (~41KB)

### Step 2: Create Developer Account

1. Go to: https://chrome.google.com/webstore/devconsole
2. Sign in with Google account
3. Pay $5 registration fee
4. Accept terms

### Step 3: Create New Item

1. Click **"New Item"** button
2. Click **"Choose file"**
3. Upload: `releases/brightpearl-taxjar-v2.0.0.zip`
4. Click **"Upload"**

Chrome will validate the package. If errors occur:
- Check manifest.json is valid
- Ensure all files are included
- Verify no restricted permissions

### Step 4: Fill Store Listing

#### Package Tab:
- **Language:** English (United States)

#### Store Listing Tab:

**Detailed Description:**
```
Copy from: WEBSTORE-LISTING.md (Detailed Description section)
```

**Short Description (132 characters max):**
```
Automates tax calculation for Brightpearl sales orders using TaxJar API. Includes zipcode lookup for fast order entry.
```

**Category:**
- Select: **Productivity**

**Language:**
- Select: **English**

#### Graphic Assets:

**Icon (128x128):** Use `src/icon-50px.png` (resize to 128x128)

**Screenshots (at least 1, max 5):**
Upload screenshots you'll create (see Screenshot Guide below)
- Recommended: 1280x800 or 640x400
- PNG or JPEG format

**Small promotional tile (440x280):** Optional
**Marquee promotional tile (1400x560):** Optional

#### Privacy Tab:

**Single Purpose:**
```
Automates tax calculation for Brightpearl sales orders using TaxJar API integration.
```

**Permission Justification:**

**scripting:**
```
Required to inject tax calculation functionality into Brightpearl order pages.
```

**storage:**
```
Required to securely store API keys and configuration settings entered by users.
```

**activeTab:**
```
Required to access the current Brightpearl tab when user interacts with the extension popup for zipcode lookup.
```

**host_permissions (brightpearl.com/brightpearlapp.com):**
```
Extension only operates on Brightpearl domains for security and to provide order management functionality.
```

**Privacy Policy:**
Upload the file: `PRIVACY-POLICY.md` (see Privacy Policy section below)

Or host it on your website and provide URL.

#### Distribution Tab:

**CRITICAL: Set Visibility to "Unlisted"**

1. Scroll to **"Visibility"** section
2. Select: **"Unlisted"**
3. Description: "This item will not be shown in search results or category listings. Only users with the direct link can access it."

**Regions:**
- Select: **All regions** (or specific countries if needed)

### Step 5: Submit for Review

1. Review all tabs (check for warnings)
2. Click **"Submit for review"**
3. Chrome will review the extension (typically 1-3 business days)
4. You'll receive email notification when approved

---

## After Approval

### Get Your Extension Link

Once approved, your extension will have a URL like:
```
https://chrome.google.com/webstore/detail/[extension-id]
```

**This is your private distribution link!**

### Share with Users

Share this link only with authorized users. They can install via:
1. Click the link
2. Click **"Add to Chrome"**
3. Confirm installation
4. Configure via extension Options page

**No Developer mode needed!**

### Auto-Updates

When you upload new versions:
1. Upload new .zip to Web Store
2. Submit for review
3. After approval, all users auto-update within 24-48 hours

---

## Screenshot Creation Guide

### Required Screenshots

Create at least 1 screenshot, recommended 3-5:

**Screenshot 1: Zipcode Lookup**
- Open Brightpearl order page
- Click extension icon
- Show popup with zipcode field
- Capture: 1280x800 or 640x400

**Screenshot 2: Tax Calculation**
- Brightpearl sales order page
- Show "Calculate Taxes" button
- Capture the interface

**Screenshot 3: Configuration**
- Right-click extension → Options
- Show configuration page (blur API keys)
- Capture the settings UI

**Screenshot 4: Tax Results** (optional)
- After tax calculation completes
- Show populated tax codes

### Tools for Screenshots

**Mac:**
- Cmd+Shift+4 → Spacebar → Click window
- Use Preview to crop to 1280x800

**Windows:**
- Snipping Tool or Snip & Sketch
- Crop to 1280x800

**Extensions:**
- Awesome Screenshot (Chrome extension)
- Nimbus Screenshot

### Tips:
- Use clean, professional screenshots
- Blur any sensitive data (API keys, customer info)
- Show the extension in action
- Use 1280x800 for best quality

---

## Privacy Policy Requirements

Chrome Web Store requires a privacy policy if your extension:
- Collects user data
- Uses remote servers
- Stores configuration

✅ We've created `PRIVACY-POLICY.md` for you.

**Options for hosting:**

**Option 1: Host on your website**
- Upload PRIVACY-POLICY.md to your website
- Provide URL in Web Store listing
- Example: `https://eastcoastfabrics.com/privacy-policy-taxjar-extension`

**Option 2: Use GitHub Pages** (free)
- Create GitHub repository
- Enable GitHub Pages
- Upload PRIVACY-POLICY.md
- Use generated URL

**Option 3: Use Google Sites** (free)
- Create free Google Site
- Paste privacy policy content
- Publish and use URL

---

## Troubleshooting Submission

### "Manifest file is missing or unreadable"
- Verify manifest.json exists in package root
- Validate JSON syntax
- Rebuild: `npm run build:prod && npm run package`

### "Invalid icon size"
- Icons must be exactly 16x16, 48x48, 128x128
- Use PNG format
- Verify in manifest.json

### "Permission warnings"
- Justify each permission in Privacy tab
- Explain why permission is needed
- Be specific and clear

### "Privacy policy required"
- Upload privacy policy
- Or provide public URL
- Must be accessible to reviewers

### "Deceptive installation tactics"
- Don't use misleading descriptions
- Don't promise features you don't have
- Be honest about functionality

---

## Updating the Extension

### Version Updates

1. **Update version in package.json:**
   ```json
   "version": "2.0.1"
   ```

2. **Make code changes in src/**

3. **Rebuild and package:**
   ```bash
   npm run build:prod
   npm run package
   ```

4. **Upload to Web Store:**
   - Go to Developer Dashboard
   - Click your extension
   - Click **"Package"** tab
   - Click **"Upload updated package"**
   - Select new .zip file
   - Click **"Submit for review"**

5. **Users auto-update** within 24-48 hours after approval

---

## Cost Summary

| Item | Cost | Frequency |
|------|------|-----------|
| Developer Account | $5 USD | One-time |
| Extension Hosting | Free | Forever |
| Updates | Free | Forever |
| Users/Installs | Free | Unlimited |

**Total: $5 one-time fee**

---

## Security Notes

### Unlisted vs Public vs Private

**Unlisted (Recommended):**
- ✅ Not searchable in Chrome Web Store
- ✅ Only accessible via direct link
- ✅ No Developer mode needed
- ✅ Auto-updates
- ✅ Free hosting
- ❌ Anyone with link can install (but link is private)

**Public:**
- ❌ Appears in search results
- ❌ Anyone can find and install
- Not suitable for private enterprise use

**Private (Enterprise Only):**
- Requires Google Workspace Enterprise
- Only Workspace users can install
- More expensive option

### Keep Your Link Private

Your extension link is like a password:
- Don't post publicly
- Only share with authorized users
- Can't revoke access (but can unpublish)

---

## Timeline

| Step | Time |
|------|------|
| Create developer account | 5 minutes |
| Fill store listing | 15-30 minutes |
| Create screenshots | 10-15 minutes |
| Submit for review | 2 minutes |
| **Chrome review** | **1-3 business days** |
| User installation | 30 seconds |

**Total (excluding review): ~30-45 minutes**

---

## Next Steps

1. ✅ Create developer account ($5)
2. ✅ Take screenshots (see guide above)
3. ✅ Upload package: `releases/brightpearl-taxjar-v2.0.0.zip`
4. ✅ Copy listing content from `WEBSTORE-LISTING.md`
5. ✅ Upload privacy policy (from `PRIVACY-POLICY.md`)
6. ✅ Set visibility to **Unlisted**
7. ✅ Submit for review
8. ✅ Wait 1-3 days for approval
9. ✅ Share link with users

---

## Support

If submission is rejected:
- Chrome will email specific reasons
- Fix issues and resubmit
- Common issues: privacy policy, permission justifications, misleading descriptions

If you need help:
- Chrome Web Store Developer Support: https://support.google.com/chrome_webstore/
- Common issues are covered in TROUBLESHOOTING.md

---

**Ready to submit!** Start at: https://chrome.google.com/webstore/devconsole
