# Chrome Web Store - Quick Start Checklist

## Complete Submission Checklist

Follow these steps to publish your extension to the Chrome Web Store (Unlisted).

---

## ✅ Step 1: Create Developer Account (5 minutes)

- [ ] Visit: https://chrome.google.com/webstore/devconsole
- [ ] Sign in with Google account
- [ ] Pay $5 registration fee
- [ ] Accept Developer Agreement

**Status:** ⏸ Not started

---

## ✅ Step 2: Prepare Extension Package (2 minutes)

- [ ] Open terminal in project directory
- [ ] Run: `npm run build:prod`
- [ ] Run: `npm run package`
- [ ] Verify file exists: `releases/brightpearl-taxjar-v2.0.0.zip`

**Status:** ✅ Already done (package exists)

---

## ✅ Step 3: Create Screenshots (15-20 minutes)

### Required (at least 1):
- [ ] Screenshot 1: Zipcode lookup popup (1280x800)
- [ ] Screenshot 2: Tax calculation button (1280x800)

### Recommended:
- [ ] Screenshot 3: Configuration page (1280x800)
- [ ] Screenshot 4: Tax results (1280x800)
- [ ] Screenshot 5: Icon states (1280x800)

**Tools:**
- Mac: Cmd+Shift+4 → Spacebar → Click window
- Windows: Snipping Tool or Snip & Sketch
- Browser: Awesome Screenshot extension

**Remember:**
- Blur all sensitive data (API keys, customer info)
- Resize to 1280x800 pixels
- Save as PNG

**Status:** ⏸ Not started (see SCREENSHOT-GUIDE.md)

---

## ✅ Step 4: Prepare Icon (2 minutes)

- [ ] Open `src/icon-50px.png`
- [ ] Resize to 128x128 pixels
- [ ] Save as `icon-128.png`

**Tools:**
- Mac: Preview → Tools → Adjust Size
- Windows: Paint → Resize
- Online: https://www.resizepixel.com/

**Status:** ⏸ Not started

---

## ✅ Step 5: Host Privacy Policy (5 minutes)

Choose ONE option:

**Option A: Host on your website**
- [ ] Upload `PRIVACY-POLICY.md` to your website
- [ ] Note the URL (e.g., `https://eastcoastfabrics.com/privacy`)

**Option B: Use GitHub Pages** (free)
- [ ] Create GitHub repository
- [ ] Enable GitHub Pages in Settings
- [ ] Upload PRIVACY-POLICY.md
- [ ] Note the generated URL

**Option C: Use Google Sites** (free)
- [ ] Create Google Site: https://sites.google.com/
- [ ] Copy content from PRIVACY-POLICY.md
- [ ] Publish site
- [ ] Note the URL

**Status:** ⏸ Not started

---

## ✅ Step 6: Submit to Web Store (15-20 minutes)

### A. Upload Package
- [ ] Go to Developer Dashboard
- [ ] Click "New Item"
- [ ] Upload `releases/brightpearl-taxjar-v2.0.0.zip`
- [ ] Wait for validation (should succeed)

### B. Fill Store Listing

**Copy from WEBSTORE-LISTING.md:**

- [ ] Extension Name: "Brightpearl TaxJar"
- [ ] Short Description (132 chars): Copy from WEBSTORE-LISTING.md
- [ ] Detailed Description: Copy from WEBSTORE-LISTING.md
- [ ] Category: Select "Productivity"
- [ ] Language: Select "English"

### C. Upload Graphics

- [ ] Icon (128x128): Upload resized icon
- [ ] Screenshot 1: Upload with caption
- [ ] Screenshot 2: Upload with caption
- [ ] Screenshot 3: Upload with caption (if created)
- [ ] Screenshot 4: Upload with caption (if created)
- [ ] Screenshot 5: Upload with caption (if created)

### D. Privacy Settings

- [ ] Single Purpose: "Automates tax calculation for Brightpearl sales orders using TaxJar API integration."
- [ ] Privacy Policy URL: Enter your hosted URL

**Permission Justifications** (copy from WEBSTORE-LISTING.md):
- [ ] scripting: Copy justification
- [ ] storage: Copy justification
- [ ] activeTab: Copy justification
- [ ] host_permissions: Copy justification

### E. Distribution Settings

**⚠️ CRITICAL:**
- [ ] Set Visibility to **"Unlisted"**
- [ ] Select Regions: "All regions" (or specific countries)

### F. Submit

- [ ] Review all tabs for errors
- [ ] Click "Submit for review"
- [ ] Confirm submission

**Status:** ⏸ Not started

---

## ✅ Step 7: Wait for Review (1-3 business days)

- [ ] Check email for Chrome Web Store notifications
- [ ] Review will typically take 1-3 business days
- [ ] If rejected, fix issues and resubmit

**What happens:**
- Google reviews extension for policy compliance
- Checks permissions, privacy policy, functionality
- Scans for malware/security issues

**Status:** ⏸ Not started

---

## ✅ Step 8: After Approval

Once approved, you'll receive an email with your extension URL.

- [ ] Copy extension URL (format: `https://chrome.google.com/webstore/detail/[ID]`)
- [ ] Test installation on clean Chrome profile
- [ ] Verify extension installs without Developer mode
- [ ] Test configuration via Options page
- [ ] Test zipcode lookup functionality
- [ ] Test tax calculation functionality

**Status:** ⏸ Not started

---

## ✅ Step 9: Distribute to Users

- [ ] Share extension URL with authorized users (keep private!)
- [ ] Update documentation with Web Store installation instructions
- [ ] Notify users that Developer mode is no longer needed

**Installation instructions for users:**
```
1. Click this link: [YOUR EXTENSION URL]
2. Click "Add to Chrome"
3. Click "Add extension"
4. Right-click extension icon → Options
5. Enter API keys and backend URL
6. Click Save
```

**Status:** ⏸ Not started

---

## 📋 Quick Reference Files

All materials are prepared in your project directory:

| File | Purpose |
|------|---------|
| `WEBSTORE-SUBMISSION-GUIDE.md` | Complete step-by-step guide |
| `WEBSTORE-LISTING.md` | Store listing content (copy/paste) |
| `PRIVACY-POLICY.md` | Privacy policy text |
| `SCREENSHOT-GUIDE.md` | How to create screenshots |
| `releases/brightpearl-taxjar-v2.0.0.zip` | Extension package (ready) |

---

## 💰 Cost Breakdown

| Item | Cost |
|------|------|
| Developer Account | $5 USD (one-time) |
| Extension Hosting | Free |
| Updates | Free |
| User Installs | Free (unlimited) |
| **TOTAL** | **$5 USD** |

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Create developer account | 5 min |
| Prepare package | 2 min (already done) |
| Create screenshots | 15-20 min |
| Prepare icon | 2 min |
| Host privacy policy | 5 min |
| Fill Web Store listing | 15-20 min |
| **Total Active Time** | **~45-60 min** |
| Google review | 1-3 business days (wait) |

---

## 🚨 Critical Requirements

Don't forget these:

1. ✅ Set visibility to **"Unlisted"** (not Public)
2. ✅ Provide privacy policy URL
3. ✅ Justify all permissions
4. ✅ Upload at least 1 screenshot (recommend 3-5)
5. ✅ Use 128x128 icon
6. ✅ Blur sensitive data in screenshots

---

## 🆘 Need Help?

### Documentation:
- **Detailed Guide:** WEBSTORE-SUBMISSION-GUIDE.md
- **Listing Content:** WEBSTORE-LISTING.md
- **Screenshot Help:** SCREENSHOT-GUIDE.md
- **Privacy Policy:** PRIVACY-POLICY.md

### Chrome Web Store Resources:
- **Developer Dashboard:** https://chrome.google.com/webstore/devconsole
- **Developer Support:** https://support.google.com/chrome_webstore/
- **Policy Documentation:** https://developer.chrome.com/docs/webstore/program_policies/

---

## 📞 Common Issues

### "Manifest file is missing or unreadable"
➡️ Rebuild: `npm run build:prod && npm run package`

### "Privacy policy required"
➡️ Host PRIVACY-POLICY.md and provide URL

### "Invalid icon size"
➡️ Resize to exactly 128x128 pixels

### "Permission not justified"
➡️ Copy justifications from WEBSTORE-LISTING.md

---

## ✅ Final Pre-Flight Checklist

Before clicking "Submit for review":

- [ ] Extension package uploaded successfully
- [ ] Store listing filled completely
- [ ] At least 1 screenshot uploaded (3-5 recommended)
- [ ] 128x128 icon uploaded
- [ ] Privacy policy URL provided
- [ ] All permissions justified
- [ ] Visibility set to **"Unlisted"** ⚠️ CRITICAL
- [ ] Regions selected
- [ ] No validation errors in Dashboard

---

## 🎯 Next Step

**Ready to start?**

1. Create developer account: https://chrome.google.com/webstore/devconsole
2. Follow WEBSTORE-SUBMISSION-GUIDE.md step-by-step
3. Budget 45-60 minutes for submission
4. Wait 1-3 days for Google review
5. Share private link with users

---

## 🎉 Success Criteria

You'll know you're successful when:

✅ Extension approved by Google
✅ Extension URL received (starts with chrome.google.com/webstore/detail/)
✅ Users can install without Developer mode
✅ Extension works identically to local version
✅ Configuration persists across Chrome restarts
✅ Updates can be pushed to all users automatically

---

**Good luck with your submission!** 🚀

The extension is fully prepared and ready for the Chrome Web Store. All materials are complete.
