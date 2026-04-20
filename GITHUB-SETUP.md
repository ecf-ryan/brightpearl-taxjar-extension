# GitHub Setup Instructions

## Commands to Push to GitHub

After creating your GitHub repository, run these commands:

```bash
# Set your GitHub username
# Replace YOUR_GITHUB_USERNAME with your actual username
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/brightpearl-taxjar-extension.git

# Push code to GitHub
git push -u origin main
```

**Note:** You'll be prompted for your GitHub credentials. Use a Personal Access Token (not password).

---

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar)
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**

GitHub will deploy your site in ~1 minute.

---

## Step 4: Get Your Privacy Policy URL

After GitHub Pages is enabled:

1. Wait 1-2 minutes for deployment
2. Your privacy policy will be available at:
   ```
   https://YOUR_GITHUB_USERNAME.github.io/brightpearl-taxjar-extension/privacy-policy.html
   ```

3. Test the URL in your browser to verify it works

---

## Step 5: Use the URL in Chrome Web Store

Copy this URL and paste it into the Chrome Web Store Developer Console:
- Go to: https://chrome.google.com/webstore/devconsole
- Select your extension
- Go to "Privacy" tab
- Paste the privacy policy URL

---

## Quick Reference

**Privacy Policy URL Format:**
```
https://[YOUR_USERNAME].github.io/[REPO_NAME]/privacy-policy.html
```

**Example:**
```
https://eastcoastfabrics.github.io/brightpearl-taxjar-extension/privacy-policy.html
```

---

## Troubleshooting

**If privacy-policy.html doesn't load:**
1. Check that GitHub Pages is enabled (Settings → Pages)
2. Wait 2-3 minutes after enabling
3. Check the URL is correct (case-sensitive!)
4. Verify the file exists in your repo

**If you get 404:**
- Make sure the file is named exactly `privacy-policy.html` (lowercase)
- Check that you pushed to the main branch
- Verify GitHub Pages source is set to `main` branch, `/ (root)` folder

---

## Security Note

Your repository can be private, but GitHub Pages will still serve the privacy-policy.html publicly. This is exactly what you want for the Chrome Web Store submission.
