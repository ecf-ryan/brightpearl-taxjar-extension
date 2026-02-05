# Brightpearl TaxJar - Installation Guide for Individual Users

## Overview

This guide is for **individual users** who want to install the Brightpearl TaxJar extension on their **personal Chrome browser** (not managed by an organization).

**What does this extension do?**
- Auto-fills city/state from zipcode on Brightpearl orders
- Calculates taxes for Brightpearl sales orders
- Only works on Brightpearl pages (icon grayed out elsewhere)

---

## 🚀 Installation Methods

### Method 1: Developer Mode (Recommended)

This is the easiest way to install the extension without publishing to Chrome Web Store.

#### Step-by-Step:

1. **Download the Extension**
   - Extract `brightpearl-taxjar-v2.0.0.zip` to a folder on your computer
   - Remember this location (e.g., `Downloads/brightpearl-taxjar/`)

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to: `chrome://extensions`
   - Or: Menu (⋮) → **Extensions** → **Manage Extensions**

3. **Enable Developer Mode**
   - Toggle **"Developer mode"** switch (top right corner)
   - It should turn blue/enabled

4. **Load the Extension**
   - Click **"Load unpacked"** button
   - Browse to the folder where you extracted the files
   - Select the **`dist/`** folder inside
   - Click **"Select Folder"**

5. **Verify Installation**
   - Extension should appear in your extensions list
   - You'll see: "Brightpearl TaxJar" with version 2.0.0
   - Extension icon appears in your Chrome toolbar

✅ **Done!** The extension is now installed.

⚠️ **Note:** You'll see a warning that says "Developer mode extensions can harm your computer" - this is a standard Chrome warning for any unpacked extension. This extension is safe.

### Method 2: Direct .crx Installation

If you have the `.crx` file:

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. **Drag and drop** the `.crx` file onto the extensions page
4. Click **"Add extension"** when prompted

---

## ⚙️ Configuration

Before using the extension, you need to configure your API keys:

### Step 1: Open Configuration

1. Find the extension icon in your Chrome toolbar
2. **Right-click** the icon
3. Select **"Options"**

### Step 2: Enter API Keys

You'll see a configuration form with two fields:

#### **Zipcode API Key:**
- Get one from [zipcodeapi.com](https://www.zipcodeapi.com/)
- Free tier: 50 requests/month
- Paid plans available for higher volume
- Paste your API key here

#### **Backend Webhook URL:**
- This is your TaxJar webhook server URL
- Example: `https://eastcoastfabricstaxjar.bsol30610.com/`
- **Must end with a trailing slash (`/`)**
- Ask your administrator if you don't have this

### Step 3: Save

Click **"Save Configuration"**

You should see: **"✓ Configuration saved successfully!"**

---

## 📖 How to Use

### Using the Zipcode Lookup:

1. **Navigate to a Brightpearl page** (customer or order page)
2. **Click the extension icon** in your toolbar
3. The popup will open
4. **Enter a 5-digit US zipcode** (e.g., 10001)
5. Click **"Fetch details"**
6. The city and state fields will auto-fill on the Brightpearl page

### Using Tax Calculation:

1. **Navigate to a Brightpearl sales order**
2. Fill in order details (items, quantities, delivery address, etc.)
3. You'll see a red **"Calculate Taxes"** button appear (top right)
4. Click **"Calculate Taxes"**
5. A spinning loader will appear
6. Tax codes will auto-populate in the line items
7. The page will reload with calculated taxes

**Important:**
- The VAT method must be set to **"Price exclude tax"**
- If you change the order after calculating, you'll need to save first, then calculate again

---

## 🔍 Troubleshooting

### Extension Icon is Grayed Out

**This is normal!** The extension only works on Brightpearl pages.

✅ **Gray icon** = You're not on a Brightpearl page
✅ **Colored icon** = You're on a Brightpearl page and can use the extension

### "Extension configuration required" Error

**Fix:**
1. Right-click extension icon → Options
2. Enter your API keys
3. Click Save Configuration
4. Reload the Brightpearl page

### Zipcode Lookup Fails

**Possible causes:**
- Invalid zipcode (must be 5 digits, US only)
- API key not configured
- API quota exceeded (if using free tier)

**Fix:**
1. Check your API key is correct
2. Verify zipcode is valid US zipcode
3. Check your quota at zipcodeapi.com

### Tax Calculation Button Doesn't Appear

**Possible causes:**
- Not on a sales order page
- Transaction type is not "sales"
- Department/channel not configured for tax calculation

**Fix:**
1. Verify you're on a **sales order** (not purchase order)
2. Check the order has a valid department selected
3. Reload the page

### "Failed to calculate taxes" Error

**Possible causes:**
- Backend URL not configured correctly
- Backend server is down
- Missing required order information

**Fix:**
1. Check backend URL in Options (must end with `/`)
2. Verify all required order fields are filled
3. Check browser console for detailed errors (F12 → Console)
4. Contact your administrator

---

## 🔒 Security & Privacy

### What data does the extension access?

- **Brightpearl pages only** - Extension only runs on Brightpearl.com domains
- **Order information** - Reads order details for tax calculation
- **No tracking** - Does not send data anywhere except to your configured backend

### Where are API keys stored?

- Securely in **Chrome's encrypted storage** (`chrome.storage.local`)
- Not accessible by other extensions
- Tied to your Chrome profile
- Automatically synced if you have Chrome Sync enabled

### Can I use this on multiple computers?

Yes! If you:
1. Use the same Chrome profile
2. Have Chrome Sync enabled
3. Install the extension on each computer

Your configuration will sync across all devices.

---

## 🔄 Updates

### How do I update?

Since this is installed as an unpacked extension, it **won't auto-update**. To update:

1. Download the new version
2. Extract to the **same folder** (overwrite old files)
3. Go to `chrome://extensions`
4. Click the **refresh icon** (🔄) on the extension card
5. Reload any open Brightpearl pages

### How do I know when an update is available?

Check with your administrator or watch for announcements.

---

## ❓ FAQ

### Q: Do I need a Google Workspace account?

**A:** No! This method works with any Chrome browser, personal or work accounts.

### Q: Will this work in Incognito mode?

**A:** Yes, but you need to enable it:
1. Go to `chrome://extensions`
2. Click **"Details"** on the extension
3. Scroll down to **"Allow in incognito"**
4. Toggle it on

### Q: Can I use this on Microsoft Edge?

**A:** Yes! Edge supports Chrome extensions:
1. Go to `edge://extensions`
2. Follow the same installation steps
3. Enable Developer mode and load unpacked

### Q: Does this work on mobile?

**A:** No, Chrome extensions only work on desktop Chrome/Edge/Brave.

### Q: What's the difference between this and the enterprise version?

**A:** Same extension! The only difference is installation method:
- **Individual:** You install it yourself via Developer mode
- **Enterprise:** IT admins push it via policy (can't be removed)

### Q: Is this free?

**A:** The extension itself is free, but you need:
- Zipcode API key (free tier available)
- Access to TaxJar webhook backend (ask your admin)

---

## 🛟 Need Help?

### Check the Console:

If something isn't working:

1. Press **F12** to open Developer Tools
2. Click the **Console** tab
3. Look for red error messages
4. Take a screenshot and share with your administrator

### Still Stuck?

Contact your Brightpearl administrator or IT support team with:
- Screenshot of the error
- What you were trying to do
- Extension version (found at `chrome://extensions`)

---

## ✅ Quick Start Checklist

- [ ] Downloaded and extracted extension files
- [ ] Opened `chrome://extensions`
- [ ] Enabled Developer mode
- [ ] Loaded unpacked extension from `dist/` folder
- [ ] Right-clicked icon → Options
- [ ] Entered Zipcode API key
- [ ] Entered Backend URL (with trailing `/`)
- [ ] Clicked Save Configuration
- [ ] Tested on a Brightpearl page
- [ ] Extension icon shows enabled (not grayed out)
- [ ] Zipcode lookup works
- [ ] Tax calculation button appears on sales orders

---

## 📋 System Requirements

- **Browser:** Google Chrome 88+ or Microsoft Edge 88+
- **Operating System:** Windows, macOS, Linux, or ChromeOS
- **Internet Connection:** Required for API calls
- **Brightpearl Account:** Must have access to Brightpearl

---

**For enterprise deployment instructions, see [README-ENTERPRISE.md](README-ENTERPRISE.md)**
