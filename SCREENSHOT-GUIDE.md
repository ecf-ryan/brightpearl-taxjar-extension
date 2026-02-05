# Screenshot Creation Guide - Chrome Web Store Submission

## Overview

The Chrome Web Store requires at least 1 screenshot (maximum 5). This guide walks you through creating professional screenshots for the Brightpearl TaxJar extension listing.

---

## Screenshot Requirements

### Technical Specifications

- **Format:** PNG or JPEG
- **Recommended Size:** 1280x800 pixels (preferred by Chrome Web Store)
- **Alternative Size:** 640x400 pixels (minimum)
- **Aspect Ratio:** 16:10
- **File Size:** Under 5MB per screenshot
- **Quantity:** Minimum 1, Maximum 5 (recommend 3-5)

### Content Guidelines

✅ **DO:**
- Show the extension in action
- Use clean, professional screenshots
- Highlight key features
- Blur sensitive data (API keys, customer info, order details)
- Use consistent window size across all screenshots
- Show real functionality (no mockups)

❌ **DON'T:**
- Include personal/customer information
- Show unfinished features
- Use low-resolution images
- Include browser UI unnecessarily
- Show unrelated browser tabs or extensions

---

## Recommended Screenshots

### Screenshot 1: Zipcode Lookup (REQUIRED)

**What to show:**
- Extension popup window open
- Zipcode field with example zipcode (e.g., "10001")
- "Fetch details" button visible
- Clean Brightpearl page in background

**Steps:**
1. Open Chrome and load extension
2. Navigate to any Brightpearl order or customer page
3. Click extension icon to open popup
4. Enter zipcode "10001" in the field
5. **Don't click Fetch yet** - just show the interface
6. Take screenshot (see tools below)
7. Crop to 1280x800

**Caption for Web Store:**
```
Quick zipcode lookup to auto-fill city and state fields
```

---

### Screenshot 2: Tax Calculation Button (REQUIRED)

**What to show:**
- Brightpearl sales order page
- Red "Calculate Taxes" button visible (top right area)
- Order form with some details filled (blur customer names/addresses)
- Clean, professional view

**Steps:**
1. Open Brightpearl sales order page
2. Fill in basic order details (use test/dummy data)
3. Locate the red "Calculate Taxes" button
4. Take full-page screenshot
5. Crop to focus on the button and order form
6. Blur any sensitive customer information
7. Resize to 1280x800

**Caption for Web Store:**
```
One-click tax calculation for Brightpearl sales orders
```

---

### Screenshot 3: Configuration Page (RECOMMENDED)

**What to show:**
- Extension Options page
- API key fields (blur actual keys or use placeholder text)
- Backend URL field (blur actual URL or use "https://example.com/")
- "Save Configuration" button

**Steps:**
1. Right-click extension icon → Options
2. Configuration page opens
3. **Before screenshotting:**
   - Replace API key with: `••••••••••••••••••••` (or "YOUR_API_KEY_HERE")
   - Replace backend URL with: `https://your-backend.com/`
4. Take screenshot
5. Crop to 1280x800

**Caption for Web Store:**
```
Secure configuration via Options page - store API keys safely
```

---

### Screenshot 4: Tax Results (OPTIONAL)

**What to show:**
- Brightpearl order after tax calculation completes
- Tax codes populated in line items
- Order total showing calculated taxes
- Blur all customer/order details

**Steps:**
1. Complete a tax calculation on test order
2. Wait for page reload with tax results
3. Take screenshot of populated tax codes
4. Blur customer name, address, product SKUs, order numbers
5. Crop to 1280x800

**Caption for Web Store:**
```
Accurate tax codes automatically populated from TaxJar API
```

---

### Screenshot 5: Extension Icon States (OPTIONAL)

**What to show:**
- Split image showing two states:
  - Left: Extension icon ENABLED on Brightpearl page (colored)
  - Right: Extension icon DISABLED on non-Brightpearl page (grayed out)

**Steps:**
1. Open Brightpearl page, screenshot extension icon (enabled/colored)
2. Open Google.com, screenshot extension icon (disabled/grayed)
3. Use image editor to combine both screenshots side-by-side
4. Add text labels: "Active on Brightpearl" and "Inactive elsewhere"
5. Resize to 1280x800

**Caption for Web Store:**
```
Security-focused: only activates on Brightpearl pages
```

---

## Screenshot Tools

### Mac Users

**Option 1: Built-in Screenshot Tool**
```
Cmd + Shift + 4 → Spacebar → Click window
```
- Takes screenshot of specific window
- Saves to Desktop as PNG
- High quality

**Option 2: Built-in Full Screenshot**
```
Cmd + Shift + 3
```
- Captures entire screen
- Use Preview to crop afterward

**Option 3: Preview (for editing)**
1. Open screenshot in Preview
2. Tools → Annotate → Sketch (for blurring)
3. Tools → Adjust Size (to resize to 1280x800)

### Windows Users

**Option 1: Snipping Tool**
1. Search for "Snipping Tool"
2. Select "Window Snip" or "Rectangular Snip"
3. Capture screenshot
4. Save as PNG
5. Use Paint or Paint 3D to resize

**Option 2: Snip & Sketch** (Windows 10/11)
```
Windows + Shift + S
```
- Select area to capture
- Saves to clipboard
- Paste into Paint to edit/resize

**Option 3: Built-in Screenshot**
```
PrtScn (Print Screen)
```
- Captures full screen
- Paste into Paint to crop/resize

### Browser Extensions (All Platforms)

**Recommended: Awesome Screenshot**
1. Install: [Awesome Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot-screen/nlipoenfbbikpbjkfpfillcgkibla)
2. Click extension icon
3. Choose "Capture visible part of page" or "Capture selected area"
4. Edit: blur, crop, annotate
5. Download as PNG

**Alternative: Nimbus Screenshot**
- Similar features to Awesome Screenshot
- Built-in editor
- Easy blur/annotate tools

---

## Editing Screenshots

### Resizing to 1280x800

**Mac Preview:**
1. Open screenshot in Preview
2. Tools → Adjust Size
3. Width: 1280, Height: 800
4. Uncheck "Scale proportionally" if needed
5. Click OK
6. Save

**Windows Paint:**
1. Open screenshot in Paint
2. Home → Resize
3. Uncheck "Maintain aspect ratio"
4. Horizontal: 1280, Vertical: 800
5. Click OK
6. Save

**Online Tool (any platform):**
- Visit: https://www.resizepixel.com/
- Upload image
- Set size: 1280x800
- Download

### Blurring Sensitive Data

**Mac Preview:**
1. Open image in Preview
2. Tools → Annotate → Sketch
3. Choose "Blur" or "Pixelate" tool
4. Draw over sensitive areas
5. Save

**Windows Paint (manual):**
1. Select area with sensitive data
2. Use brush/paint bucket to cover with solid color
3. Save

**Browser Extension:**
- Awesome Screenshot has built-in blur tool
- Nimbus Screenshot has pixelate tool

**Online Tool:**
- https://www.photopea.com/ (free Photoshop alternative)
- Filter → Blur → Gaussian Blur

---

## Screenshot Checklist

Before uploading to Chrome Web Store:

- [ ] All screenshots are 1280x800 (or 640x400)
- [ ] File format is PNG or JPEG
- [ ] All sensitive data is blurred/hidden
- [ ] Screenshots show real functionality (no mockups)
- [ ] Images are clear and high-quality
- [ ] Minimum 1 screenshot (recommend 3-5)
- [ ] Captions are written for each screenshot
- [ ] No browser UI visible (unless necessary)
- [ ] Consistent styling across all screenshots
- [ ] File sizes are under 5MB each

---

## Quick Reference: Screenshot Sizes

| Aspect Ratio | Recommended | Alternative |
|--------------|-------------|-------------|
| 16:10 | 1280x800 | 640x400 |
| 16:9 | 1280x720 | 640x360 |
| 4:3 | 1280x960 | 640x480 |

**Chrome Web Store prefers 16:10 (1280x800)** - use this if possible.

---

## Uploading to Web Store

Once screenshots are ready:

1. Go to Chrome Web Store Developer Dashboard
2. Select your extension
3. Click "Store Listing" tab
4. Scroll to "Graphic Assets"
5. Click "Screenshots" section
6. Click "Choose File" and select first screenshot
7. Add caption for each screenshot
8. Repeat for all screenshots (up to 5)
9. Drag to reorder if needed (first screenshot is primary)
10. Click "Save Draft"

---

## Example Captions

**For Zipcode Lookup:**
- "Quick zipcode lookup to auto-fill city and state"
- "Enter any US zipcode for instant address lookup"
- "Fast address entry with zipcode API integration"

**For Tax Calculation:**
- "One-click tax calculation for Brightpearl orders"
- "Automatic tax codes populated via TaxJar API"
- "Calculate accurate sales tax in seconds"

**For Configuration:**
- "Secure configuration via Options page"
- "Easy setup with API key management"
- "Store credentials safely in encrypted Chrome storage"

**For Results:**
- "Tax codes automatically populated after calculation"
- "Real-time tax rates from TaxJar backend"
- "Accurate sales tax for every line item"

**For Security:**
- "Only activates on Brightpearl pages for security"
- "Extension disabled on all non-Brightpearl sites"
- "Privacy-focused design restricts access to Brightpearl only"

---

## Tips for Professional Screenshots

1. **Use Consistent Browser Window Size**
   - Set Chrome window to same size for all screenshots
   - Makes screenshot set look cohesive

2. **Remove Clutter**
   - Close unnecessary tabs
   - Hide other extensions (if possible)
   - Clear notifications

3. **Use Test/Demo Data**
   - Create dummy orders for screenshots
   - Use fake customer names like "John Doe"
   - Use example addresses

4. **Good Lighting** (if including physical screens)
   - Not applicable for digital screenshots
   - Only relevant for photos of screens (not recommended)

5. **Show Real Usage**
   - Actual Brightpearl interface
   - Real extension popup
   - Genuine functionality

---

## Common Mistakes to Avoid

❌ Including personal customer information
❌ Showing real order numbers or SKUs
❌ Using wrong image dimensions
❌ Low-resolution or blurry images
❌ Screenshots of error states
❌ Including unrelated browser content
❌ Showing test/debug code in console
❌ Exposing API keys or credentials

---

## Alternative: Video Demo (Optional)

Chrome Web Store also accepts a promotional video (YouTube). If you prefer:

**Video Requirements:**
- Upload to YouTube
- Provide YouTube URL in Web Store listing
- Optional, not required

**Video Content:**
- 30-60 seconds
- Show key features: zipcode lookup and tax calculation
- Professional narration or text overlays
- Demo with test data only

---

## Need Help?

If you're having trouble creating screenshots:

1. Use browser extension tools (Awesome Screenshot)
2. Focus on Screenshot 1 and 2 (most important)
3. Keep it simple - show the core functionality
4. You can update screenshots after initial approval

**Minimum viable submission:** 1 screenshot showing the extension popup with zipcode field.

---

## Final Checklist

Ready to upload?

- [ ] Created at least 1 screenshot (recommend 3-5)
- [ ] Resized all to 1280x800 pixels
- [ ] Blurred all sensitive information
- [ ] Saved as PNG or JPEG
- [ ] Written captions for each
- [ ] Verified high quality (no blur/pixelation)
- [ ] Screenshots show real Brightpearl interface
- [ ] Extension functionality clearly visible

---

**You're ready to upload screenshots to the Chrome Web Store!**

Go to: [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)
