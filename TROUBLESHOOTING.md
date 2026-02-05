# Troubleshooting Guide - Brightpearl TaxJar Extension

Common issues and solutions for the Brightpearl TaxJar Chrome extension.

---

## 🔧 Installation Issues

### Extension Shows as "Corrupted"

**Symptoms:**
- Extension card shows red "Corrupted Extension" badge
- Extension doesn't load
- Error: "Package is invalid"

**Solutions:**
1. **Check manifest.json is valid**
   ```bash
   # Validate JSON
   cat dist/manifest.json | python -m json.tool
   ```
2. **Verify all files exist**
   - Check dist/ folder contains all required files
   - Manifest references: background.js, content.js, popup.html, etc.
3. **Rebuild the extension**
   ```bash
   npm run build
   ```
4. **Check Chrome version**
   - Manifest V3 requires Chrome 88+
   - Check: `chrome://version`

### "Could not load manifest" Error

**Cause:** manifest.json has syntax errors or missing fields

**Fix:**
1. Open `dist/manifest.json`
2. Check for:
   - Missing commas
   - Trailing commas (not allowed in JSON)
   - Unclosed brackets/braces
   - Invalid field names
3. Compare with original in `src/manifest.json`
4. Rebuild: `npm run build`

### Extension Doesn't Appear After Loading

**Symptoms:**
- Loaded unpacked successfully
- No extension icon in toolbar
- Not listed in chrome://extensions

**Solutions:**
1. **Refresh the extensions page**
   - Press F5 or reload chrome://extensions
2. **Check if it's hidden**
   - Click the puzzle piece icon (🧩) in toolbar
   - Pin the extension if it's there
3. **Check for errors**
   - Look for red error text on chrome://extensions
   - Click "Details" → "Errors" to see logs

---

## ⚙️ Configuration Issues

### "Extension configuration required" Alert

**Symptoms:**
- Alert appears when clicking extension icon
- Zipcode lookup doesn't work
- Tax calculation fails

**Cause:** API keys not configured

**Fix:**
1. Right-click extension icon → **Options**
2. Enter **Zipcode API Key** (from zipcodeapi.com)
3. Enter **Backend URL** (must end with `/`)
4. Click **Save Configuration**
5. Verify success message appears
6. Reload Brightpearl page

### Configuration Doesn't Save

**Symptoms:**
- Enter API keys and click Save
- Reopen Options → fields are empty
- Error: "Failed to save configuration"

**Solutions:**
1. **Check storage permissions**
   - Go to chrome://extensions
   - Click **Details** on extension
   - Verify "storage" permission is granted
2. **Check storage quota**
   - Visit chrome://quota-internals
   - Ensure not exceeding quota
3. **Clear extension storage and retry**
   ```javascript
   // In console (F12):
   chrome.storage.local.clear()
   ```
4. **Check browser console**
   - Press F12 on Options page
   - Look for errors when clicking Save

### "Please configure the extension from the options page"

**When:** Opening popup or clicking Fetch details

**Fix:** Same as "Extension configuration required" above

---

## 🌐 Zipcode Lookup Issues

### Zipcode Lookup Returns No Results

**Symptoms:**
- Enter zipcode, click "Fetch details"
- No city/state populated
- No error message

**Possible Causes:**
1. **Invalid zipcode**
   - Must be 5-digit US zipcode
   - Cannot be 00000 or other test values
2. **API quota exceeded**
   - Free tier: 50 requests/month
   - Check usage at zipcodeapi.com
3. **API key invalid**
   - Verify key is correct in Options
   - Test key directly at zipcodeapi.com

**Fix:**
1. Test with known valid zipcode: **10001** (New York, NY)
2. Check browser console (F12) for API errors
3. Verify API key hasn't expired
4. Try a different zipcode

### "Failed to fetch zipcode information" Error

**Symptoms:**
- Alert appears after clicking "Fetch details"
- Console shows fetch error

**Solutions:**
1. **Check API key**
   - Right-click icon → Options
   - Verify key is entered correctly (no extra spaces)
2. **Check network connection**
   - Test: visit https://www.zipcodeapi.com directly
   - If blocked by firewall, contact IT
3. **Check API status**
   - Visit zipcodeapi.com
   - Check for service status/outages
4. **Increase quota**
   - Upgrade to paid plan if hitting limits

### Fields Don't Populate After Lookup

**Symptoms:**
- Click "Fetch details"
- Success message (no error)
- But city/state fields remain empty

**Cause:** Brightpearl page structure changed or field IDs different

**Fix:**
1. **Check field IDs exist:**
   - Open browser console (F12)
   - Run: `document.getElementById('delivery_city')`
   - If null, field ID has changed
2. **Check you're on correct page type**
   - Extension expects customer/order edit pages
   - Some Brightpearl pages may have different structures
3. **Reload page and retry**

---

## 💰 Tax Calculation Issues

### "Calculate Taxes" Button Doesn't Appear

**Symptoms:**
- On sales order page
- No red "Calculate Taxes" button visible

**Possible Causes:**
1. **Not on a sales order**
   - Button only appears on sales orders
   - Doesn't work on purchase orders
2. **Transaction type not "sales"**
   - Check order type at top of page
3. **Department/channel not configured**
   - Extension checks if channel is enabled for tax calculation
4. **Already calculated**
   - Button may not show if taxes already calculated

**Fix:**
1. Verify you're on a **sales order** (not purchase order)
2. Check order has **department** selected
3. Reload the page (F5)
4. Check browser console for errors (F12)

### "Please select 'Price exclude tax' as 'Price mode'"

**When:** Clicking "Calculate Taxes" button

**Cause:** VAT method is not set to "Price exclude tax"

**Fix:**
1. Find **"VAT method"** or **"Price mode"** dropdown on order
2. Select **"Price exclude tax"** (option 1)
3. Click "Calculate Taxes" again

### "Your order has changed, click OK to save..."

**When:** Clicking "Calculate Taxes"

**Cause:** Form has unsaved changes since last tax calculation

**Fix:**
1. Click **OK** on the alert
2. Click the **Save** button on the order
3. After save completes, click **"Calculate Taxes"** again

### Tax Calculation Fails / "Failed to calculate taxes"

**Symptoms:**
- Click "Calculate Taxes"
- Loading spinner appears briefly
- Error alert: "Failed to calculate taxes. Please try again."

**Solutions:**
1. **Check backend URL**
   - Right-click icon → Options
   - Verify URL is correct
   - Must end with `/`
   - Example: `https://eastcoastfabricstaxjar.bsol30610.com/`
2. **Check backend is accessible**
   - Open new tab
   - Try visiting the backend URL
   - If blocked/404, contact administrator
3. **Check order has required fields**
   - Line items with SKUs
   - Valid delivery address
   - Department/channel selected
4. **Check browser console**
   - Press F12
   - Look for red errors
   - Share with administrator

### Loading Spinner Never Stops

**Symptoms:**
- Click "Calculate Taxes"
- Spinner appears
- Never completes (no success/error)

**Causes:**
1. Backend server timeout
2. Network connectivity issue
3. Backend error without proper response

**Fix:**
1. Wait 30-60 seconds
2. If still spinning, **reload the page** (F5)
3. Check backend server status
4. Try again
5. If persists, check backend logs (contact admin)

### Tax Codes Don't Update After Calculation

**Symptoms:**
- "Calculate Taxes" completes
- Page reloads
- But tax codes are still blank/wrong

**Possible Causes:**
1. Backend returned success but no tax codes
2. Product not found in tax system
3. Product is tax-exempt
4. Calculation logic error on backend

**Fix:**
1. Check browser console for response data
2. Verify products have valid SKUs
3. Check backend logs (administrator)
4. Try with different products

---

## 🔴 Icon & Display Issues

### Extension Icon is Always Grayed Out

**Symptoms:**
- Icon never enables, even on Brightpearl pages
- Can't click the icon
- Tooltip says "Only works on Brightpearl pages"

**Solutions:**
1. **Verify you're on Brightpearl domain**
   - URL must contain: `brightpearl.com` or `brightpearlapp.com`
   - Example: `https://app.brightpearl.com/...`
2. **Check host_permissions in manifest**
   - Open `dist/manifest.json`
   - Verify host_permissions includes your Brightpearl domain
3. **Reload the extension**
   - Go to chrome://extensions
   - Click refresh icon (🔄) on extension
4. **Check service worker console**
   - chrome://extensions → Click "service worker"
   - Look for errors in checkAndUpdateIcon()

### Icon Doesn't Change When Navigating to Brightpearl

**Symptoms:**
- Navigate from Google → Brightpearl
- Icon stays grayed out
- Requires page reload to enable

**Cause:** Service worker listener not firing

**Fix:**
1. **Reload the Brightpearl page** (F5)
2. **Restart the extension**
   - chrome://extensions
   - Toggle extension off and on
3. **Check service worker is running**
   - chrome://extensions → "service worker"
   - Should show "active"

### Popup Shows "Only works on Brightpearl pages" on Brightpearl

**Symptoms:**
- On Brightpearl.com page
- Icon is enabled
- But popup shows error message

**Cause:** Popup page check failing

**Fix:**
1. Check URL format (must be http/https, not chrome://)
2. Reload extension
3. Hard refresh page (Ctrl+Shift+R / Cmd+Shift+R)

---

## 🚨 Console Errors

### "ConfigManager is not defined"

**Location:** content.js or tab.js

**Cause:** config-manager.js not loaded before other scripts

**Fix:**
1. Check manifest.json `content_scripts` array
2. Ensure order is: `["config-manager.js", "utils.js", "content.js"]`
3. Rebuild: `npm run build`
4. Reload extension

### "chrome.tabs.executeScript is not a function"

**Cause:** Using deprecated MV2 API

**Fix:**
- This should be fixed in v2.0.0
- Verify you're running latest version
- Check code uses `chrome.scripting.executeScript` not `chrome.tabs.executeScript`

### "Uncaught ReferenceError: $ is not defined"

**Cause:** jQuery reference not removed

**Fix:**
- This should be fixed in v2.0.0 (jQuery removed)
- If you see this, something went wrong
- Rebuild extension: `npm run build`
- Check no jQuery code remains

### "Failed to execute 'fetch' on 'Window': Illegal invocation"

**Location:** Usually in AJAX calls

**Cause:** Context binding issue

**Fix:**
- Ensure using `fetch()` correctly
- Check no jQuery $.ajax() calls remain
- Verify using `new URLSearchParams()` for POST data

---

## 🌐 Network Issues

### API Calls Blocked by CORS

**Symptoms:**
- Console error: "CORS policy: No 'Access-Control-Allow-Origin'"
- API calls fail
- Red network errors in DevTools

**Cause:** Backend not configured for CORS

**Fix:**
1. Backend must allow chrome-extension:// origin
2. Or use chrome.permissions to request host permission
3. Contact backend administrator

### "net::ERR_NAME_NOT_RESOLVED"

**Symptoms:**
- Loading spinner or external resource fails
- Console shows this error

**Fix:**
1. **For ajax-loader.gif**: Fixed in v2.0.0 (now uses CSS spinner)
2. **For API calls**: Check URL is correct, no typos
3. **For backend**: Verify backend URL is accessible

### Requests Timeout

**Symptoms:**
- Loading spinners never complete
- Console: "Request timed out"

**Solutions:**
1. Check network connection
2. Test backend URL directly (curl/browser)
3. Check firewall/proxy settings
4. Contact network administrator

---

## 🔐 Permission Issues

### "Extension requires additional permissions"

**When:** After update or first install

**Fix:**
1. Click **"Grant permissions"** button
2. Review what's requested
3. Click **"Allow"**
4. Reload extension if needed

### "Cannot access chrome:// URLs"

**When:** Trying to use extension on chrome:// pages

**This is normal!**
- Extensions cannot run on chrome:// pages
- This is a Chrome security feature
- Extension only works on regular web pages

---

## 📱 Browser-Specific Issues

### Microsoft Edge Issues

**If extension doesn't work in Edge:**
1. Check Edge version supports Manifest V3 (Edge 88+)
2. Use `edge://extensions` instead of chrome://extensions
3. Enable "Developer mode" in Edge
4. Load unpacked extension
5. All other steps same as Chrome

### Brave Browser Issues

**Brave has stricter privacy settings:**
1. Go to `brave://extensions`
2. Load extension same as Chrome
3. Check Brave isn't blocking requests
4. Try disabling Shields for Brightpearl.com
5. Check console for CORS errors

---

## 🛠️ Developer Tools Tips

### How to Check Extension Console

**Background/Service Worker:**
1. Go to `chrome://extensions`
2. Find "Brightpearl TaxJar"
3. Click blue **"service worker"** link
4. Console opens for background.js

**Content Script:**
1. Open Brightpearl page
2. Press **F12** to open DevTools
3. Go to **Console** tab
4. Look for errors from content.js

**Popup:**
1. Right-click extension icon
2. Select **"Inspect popup"**
3. Console opens for popup.html/myscript.js

### Useful Console Commands

```javascript
// Check if ConfigManager loaded
console.log(typeof ConfigManager)

// Check configuration
chrome.storage.local.get(['config'], (result) => console.log(result))

// Clear configuration (reset)
chrome.storage.local.clear()

// Check extension version
chrome.runtime.getManifest().version
```

---

## 📞 Getting Help

### Information to Provide When Asking for Help

1. **Extension version**: Found at chrome://extensions
2. **Chrome version**: Visit chrome://version
3. **Operating System**: Windows/Mac/Linux version
4. **What you were trying to do**: Specific steps
5. **Error message**: Exact text or screenshot
6. **Console errors**: Screenshot of F12 → Console
7. **URL**: What Brightpearl page you were on

### How to Export Extension Logs

```javascript
// Run in console (F12):
chrome.storage.local.get(null, (items) => {
  console.log(JSON.stringify(items, null, 2))
  // Copy output and share with admin
})
```

---

## ✅ Health Check Checklist

Run through this checklist to verify everything is working:

- [ ] Extension appears in chrome://extensions
- [ ] No "Errors" button on extension card
- [ ] Service worker shows "active" (not "inactive")
- [ ] Icon is grayed out on non-Brightpearl pages
- [ ] Icon is enabled on Brightpearl pages
- [ ] Right-click icon → Options opens configuration page
- [ ] Configuration saves successfully
- [ ] Popup opens when clicking icon (on Brightpearl)
- [ ] Zipcode lookup returns city/state for 10001
- [ ] "Calculate Taxes" button appears on sales orders
- [ ] Tax calculation completes without errors
- [ ] No red errors in console (F12)

If all checked ✅ → Extension is working correctly!

---

**For installation help, see: [README-INDIVIDUAL.md](README-INDIVIDUAL.md) or [README-ENTERPRISE.md](README-ENTERPRISE.md)**
