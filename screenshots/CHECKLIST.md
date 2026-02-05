# Screenshot Checklist for Chrome Web Store Submission

## What You Need

**Required:** At least **1 screenshot** (recommend 2-3)
**Size:** 1280x800 pixels (16:10 aspect ratio)
**Format:** PNG or JPEG

---

## Before You Start

1. [ ] Load the extension in Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist/` folder from this project

2. [ ] Navigate to your Brightpearl account
   - You'll need access to a sales order page

3. [ ] Have screenshot tool ready
   - **Mac:** `Cmd + Shift + 4` (then drag to select area)
   - Or use `Cmd + Shift + 4` then `Spacebar` to capture window

---

## Screenshot 1: Tax Calculation Button (REQUIRED - MOST IMPORTANT)

**This is the main feature - show the red "Calculate Taxes" button on a Brightpearl order page**

### Steps:
1. [ ] Open a Brightpearl sales order page
2. [ ] The extension automatically adds a red "Calculate Taxes" button to the page
3. [ ] Make sure some order details are filled (use test/dummy data)
4. [ ] Take screenshot of the order page showing the button
5. [ ] Save as: `1-tax-calculation-button.png`
6. [ ] **IMPORTANT:** Blur any customer names, addresses, or order numbers using Preview:
   - Open in Preview → Tools → Annotate → Shapes
   - Draw rectangles over sensitive data

**Caption to use in Web Store:**
```
One-click tax calculation for Brightpearl sales orders using TaxJar API
```

---

## Screenshot 2: Configuration Page (REQUIRED)

### Steps:
1. [ ] Right-click extension icon → Options
2. [ ] Configuration page opens in new tab
3. [ ] **BEFORE screenshotting:**
   - Clear or blur your actual API keys
   - Replace with placeholder like: `YOUR_ZIPCODE_API_KEY_HERE`
   - Replace backend URL with: `https://your-backend.com/taxjar-webhook`
4. [ ] Take screenshot
5. [ ] Save as: `2-configuration.png`

**Caption to use in Web Store:**
```
Secure API key configuration via Options page
```

---

## Screenshot 3: Tax Results (OPTIONAL - Good to have)

### Steps:
1. [ ] Complete a tax calculation on a test order
2. [ ] After taxes populate, take screenshot showing the tax codes in the line items
3. [ ] Blur ALL customer data, addresses, product SKUs, order numbers
4. [ ] Save as: `3-tax-results.png`

**Caption to use in Web Store:**
```
Tax codes automatically populated on order line items
```

---

## After Taking Screenshots

### Resize to 1280x800:

**Using Mac Preview:**
1. [ ] Open screenshot in Preview
2. [ ] Tools → Adjust Size
3. [ ] Set Width: 1280, Height: 800
4. [ ] Uncheck "Scale proportionally" if aspect ratio is different
5. [ ] Click OK and Save

**Or use online tool:**
- https://www.resizepixel.com/
- Upload → Set 1280x800 → Download

---

## Blur Sensitive Data

**Using Mac Preview:**
1. [ ] Open image in Preview
2. [ ] Tools → Annotate → Shapes
3. [ ] Select Rectangle tool
4. [ ] Set Fill to solid color (black or white)
5. [ ] Draw over API keys, customer names, addresses, order numbers
6. [ ] Save

---

## Final Checklist

Before uploading to Chrome Web Store:

- [ ] At least 2 screenshots created (recommend 2-3)
- [ ] All screenshots are 1280x800 pixels
- [ ] All saved as PNG in `screenshots/` folder
- [ ] All sensitive data blurred/hidden:
  - [ ] API keys
  - [ ] Backend webhook URLs
  - [ ] Customer names
  - [ ] Customer addresses
  - [ ] Order numbers
  - [ ] Product SKUs
- [ ] Screenshots are clear and high-quality
- [ ] Have captions ready for each

---

## Screenshot File Names

Save files in this folder with these names:
- `1-tax-calculation-button.png` (REQUIRED - shows main feature)
- `2-configuration.png` (REQUIRED - shows setup)
- `3-tax-results.png` (optional - shows results)

---

## Quick Mac Screenshot Commands

| Command | What it does |
|---------|-------------|
| `Cmd + Shift + 4` | Select area to capture |
| `Cmd + Shift + 4` → Spacebar | Capture specific window |
| `Cmd + Shift + 3` | Capture full screen |

Screenshots save to Desktop by default - move them to this `screenshots/` folder.

---

## Need Help?

**Minimum viable submission:** Just Screenshot #1 (zipcode popup) is enough to submit!

You can always update screenshots later after approval.

---

**Ready to take screenshots? Start with Screenshot #1 - it's the easiest!**
