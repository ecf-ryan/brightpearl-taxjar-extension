# Chrome Web Store Listing Content

## Store Listing Information

### Extension Name
```
Brightpearl TaxJar
```

### Short Description (132 characters maximum)
```
Automates tax calculation for Brightpearl sales orders using TaxJar API. Includes zipcode lookup for fast order entry.
```

### Detailed Description

```
Brightpearl TaxJar - Automated Tax Calculation for Brightpearl

Streamline your Brightpearl order processing with automated tax calculation powered by TaxJar API integration.

KEY FEATURES:

✓ Automatic Tax Calculation
Calculate accurate sales tax for Brightpearl orders with a single click. The extension integrates seamlessly with your TaxJar backend webhook to fetch real-time tax rates based on order details, delivery address, and product information.

✓ Zipcode Lookup
Instantly populate city and state fields from US zipcodes. Save time during order entry by letting the extension auto-fill address information from the zipcode API.

✓ Brightpearl-Only Operation
Security-focused design ensures the extension only activates on Brightpearl pages. The extension icon is disabled on all other websites, preventing accidental usage and protecting your data.

✓ Secure Configuration
Store your API keys securely in Chrome's encrypted storage. No hardcoded credentials in the source code. Configure once via the Options page, and your settings persist across browser sessions.

✓ Form Change Detection
Smart monitoring detects when order details change after tax calculation, prompting you to recalculate taxes to ensure accuracy.

✓ Modern & Lightweight
Built with modern ES2022 JavaScript, Manifest V3 compliance, and zero external dependencies. Optimized for performance with only ~100KB total size.


HOW IT WORKS:

1. Install the extension
2. Right-click the extension icon → Options
3. Enter your Zipcode API key and TaxJar backend webhook URL
4. Navigate to Brightpearl sales orders
5. Use the extension popup for zipcode lookups
6. Click "Calculate Taxes" button on orders to automatically populate tax codes


REQUIREMENTS:

• Brightpearl account with access to sales orders
• Zipcode API key from zipcodeapi.com (free tier available)
• TaxJar backend webhook URL (contact your administrator)


PRIVACY & SECURITY:

• Extension only runs on Brightpearl domains (*.brightpearl.com, *.brightpearlapp.com)
• API keys stored in encrypted Chrome storage
• No data collection or tracking
• No external communication except to your configured APIs
• Open source code available for security audit


PERMISSIONS EXPLAINED:

• scripting: Inject tax calculation functionality into Brightpearl order pages
• storage: Securely store your API keys and configuration
• activeTab: Access current tab for zipcode lookup when you click the extension icon
• host_permissions: Restrict extension to Brightpearl domains only


SUPPORT:

Comprehensive documentation included:
• Installation guide for individual users
• Enterprise deployment guide for IT administrators
• Troubleshooting guide for common issues
• Configuration templates and examples


WHAT'S NEW IN VERSION 2.0:

• Complete modernization to ES2022 standards
• Removed jQuery dependency (45% size reduction)
• Fixed all deprecated Manifest V3 APIs
• Externalized API keys to secure storage
• Optimized event handling (15+ listeners → 2-3)
• CSS-based loading spinner (no external images)
• Comprehensive documentation suite
• Enterprise deployment support


Perfect for:
• Brightpearl users who process sales orders with tax calculations
• E-commerce businesses using Brightpearl and TaxJar
• Order entry teams needing fast, accurate tax calculation
• Companies wanting to automate tax compliance


Built by East Coast Fabrics for efficient Brightpearl order management.
```

### Category
```
Productivity
```

### Language
```
English
```

---

## Privacy Information

### Single Purpose Description
```
Automates tax calculation for Brightpearl sales orders using TaxJar API integration.
```

### Permission Justifications

**Permission: scripting**
```
Required to inject tax calculation functionality into Brightpearl order pages. This allows the extension to add the "Calculate Taxes" button and process order data for tax calculation.
```

**Permission: storage**
```
Required to securely store API keys and configuration settings entered by users through the Options page. All data is stored in Chrome's encrypted local storage and never leaves the user's device.
```

**Permission: activeTab**
```
Required to access the current Brightpearl tab when the user clicks the extension popup icon for zipcode lookup functionality. Only activated on explicit user interaction.
```

**Host Permission: http://*.brightpearl.com/***
**Host Permission: https://*.brightpearl.com/***
**Host Permission: http://*.brightpearlapp.com/***
**Host Permission: https://*.brightpearlapp.com/***
```
Extension only operates on Brightpearl domains for security purposes. This ensures the extension cannot access or run on any other websites, protecting user privacy and preventing data leakage.
```

### Privacy Policy URL
```
[Upload PRIVACY-POLICY.md or provide your hosted URL]
```

---

## Graphic Assets Needed

### Icon (Required)
- **Size:** 128x128 pixels
- **Format:** PNG
- **File:** Use `src/icon-50px.png` (resize to 128x128)
- **Notes:** Square, no rounded corners, transparent background optional

### Screenshots (Required - at least 1, max 5)

**Recommended Screenshots:**

1. **Zipcode Lookup** (1280x800 or 640x400)
   - Show extension popup with zipcode field
   - Demonstrate the lookup interface
   - Caption: "Quick zipcode lookup to auto-fill city and state"

2. **Tax Calculation** (1280x800 or 640x400)
   - Brightpearl sales order page
   - Highlight "Calculate Taxes" button
   - Caption: "One-click tax calculation for Brightpearl orders"

3. **Configuration Page** (1280x800 or 640x400)
   - Extension Options page
   - Show API key configuration (blur actual keys)
   - Caption: "Secure configuration via Options page"

4. **Extension in Action** (1280x800 or 640x400)
   - Order page with populated tax codes
   - Caption: "Accurate tax codes automatically populated"

5. **Brightpearl Detection** (1280x800 or 640x400)
   - Show extension icon enabled on Brightpearl
   - Show extension icon disabled on other sites (grayed out)
   - Caption: "Only activates on Brightpearl pages for security"

### Small Promotional Tile (Optional but recommended)
- **Size:** 440x280 pixels
- **Format:** PNG or JPEG
- **Content:** Extension icon + tagline: "Automate Tax Calculation for Brightpearl"

### Marquee Promotional Tile (Optional)
- **Size:** 1400x560 pixels
- **Format:** PNG or JPEG
- **Content:** Extension name, icon, key features

---

## Distribution Settings

### Visibility
```
Unlisted ⚠️ CRITICAL - Set to "Unlisted" for private distribution
```

**Description:** Not searchable in Chrome Web Store, only accessible via direct link

### Regions
```
All regions
```
Or select specific countries if needed.

---

## Additional Notes for Submission

### What Reviewers Will Check:

1. **Functionality:** Does it do what the description says?
2. **Permissions:** Are permissions justified and minimal?
3. **Privacy:** Is there a clear privacy policy?
4. **Security:** Are API calls secure? No malicious code?
5. **User Experience:** Is it intuitive and bug-free?

### Tips for Approval:

✅ **Be Honest:** Don't exaggerate features
✅ **Be Clear:** Explain exactly what the extension does
✅ **Be Specific:** Detail why each permission is needed
✅ **Be Secure:** Show configuration is user-controlled
✅ **Be Professional:** Use proper grammar and formatting

### Common Rejection Reasons:

❌ Missing or inadequate privacy policy
❌ Unclear permission justifications
❌ Misleading description or screenshots
❌ Security vulnerabilities
❌ Code obfuscation or minification (use unminified code)

---

## Pre-Submission Checklist

Before submitting to Chrome Web Store:

- [ ] Extension name is clear and descriptive
- [ ] Short description is under 132 characters
- [ ] Detailed description explains all features clearly
- [ ] Category selected (Productivity)
- [ ] At least 1 screenshot uploaded (recommend 3-5)
- [ ] 128x128 icon uploaded
- [ ] Privacy policy uploaded or URL provided
- [ ] All permissions justified with clear explanations
- [ ] Single purpose statement is concise
- [ ] Visibility set to **Unlisted**
- [ ] Extension package (.zip) uploaded successfully
- [ ] No validation errors in Developer Dashboard

---

## After Approval

Once approved, you'll receive:

1. **Extension URL** - Share this private link with authorized users
   - Format: `https://chrome.google.com/webstore/detail/[extension-id]`
   - Only people with this link can install

2. **Publisher Dashboard Access** - Monitor installs, ratings, reviews
   - View install statistics
   - See user reviews (if any)
   - Upload updated versions

3. **Auto-Update Capability** - Push updates to all users
   - Upload new version
   - Submit for review
   - Users auto-update within 24-48 hours

---

## Marketing Copy (Optional)

If you want to create promotional materials:

**Tagline:**
```
Automate Brightpearl Tax Calculation with TaxJar Integration
```

**Elevator Pitch:**
```
Brightpearl TaxJar eliminates manual tax calculation for Brightpearl users. With one-click automation and secure TaxJar API integration, your team can process orders faster while ensuring accurate tax compliance.
```

**Key Benefits:**
- Save time: Calculate taxes in seconds, not minutes
- Reduce errors: Automated calculation eliminates manual mistakes
- Stay compliant: Real-time tax rates via TaxJar API
- Work faster: Zipcode lookup auto-fills address fields

---

**Ready to submit!** Use this content when filling out the Chrome Web Store listing form.
