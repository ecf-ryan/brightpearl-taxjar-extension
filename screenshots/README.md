# Screenshots Folder

## Purpose
This folder contains screenshots for the Chrome Web Store listing.

## Required Screenshots
Save your screenshots here with these filenames:

1. **1-tax-calculation-button.png** (REQUIRED)
   - Brightpearl order page with red "Calculate Taxes" button
   - Caption: "One-click tax calculation for Brightpearl sales orders using TaxJar API"

2. **2-configuration.png** (REQUIRED)
   - Extension Options page (blur API keys and backend URL!)
   - Caption: "Secure API key configuration via Options page"

3. **3-tax-results.png** (OPTIONAL)
   - Order after tax calculation showing populated tax codes (blur customer data!)
   - Caption: "Tax codes automatically populated on order line items"

## How the Extension Actually Works

The extension works entirely within Brightpearl pages:
- Automatically adds a red "Calculate Taxes" button to sales order pages
- When clicked, collects order data and sends to TaxJar backend webhook
- Automatically populates tax codes on line items
- Configuration is done via the Options page (right-click extension → Options)

**Note:** The extension popup doesn't have active functionality - all features work directly on Brightpearl pages.

## Specifications
- **Size:** 1280x800 pixels (preferred)
- **Format:** PNG or JPEG
- **Min:** 2 screenshots required (button + config)
- **Max:** 5 screenshots allowed

## Instructions
See [CHECKLIST.md](CHECKLIST.md) for detailed step-by-step instructions.

## Quick Start (Mac)
1. Load extension from `dist/` folder in Chrome
2. Open Brightpearl sales order page
3. Look for red "Calculate Taxes" button
4. Press `Cmd + Shift + 4` and drag to capture
5. Right-click extension → Options for config page
6. Save screenshots to this folder
7. Resize to 1280x800 using Preview
8. Blur sensitive data (API keys, customer info, order numbers)

Done? Upload to Chrome Web Store Developer Dashboard!
