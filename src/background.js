// Enable/disable extension icon based on current page
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  checkAndUpdateIcon(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    checkAndUpdateIcon(tabId);
  }
});

async function checkAndUpdateIcon(tabId) {
  try {
    const tab = await chrome.tabs.get(tabId);
    const url = new URL(tab.url);
    const isBrightpearl = url.hostname.includes('brightpearl.com') ||
                          url.hostname.includes('brightpearlapp.com');

    if (isBrightpearl) {
      // Enable icon on Brightpearl pages
      await chrome.action.enable(tabId);
      await chrome.action.setTitle({
        tabId: tabId,
        title: 'Brightpearl TaxJar - Click to lookup zipcode'
      });
    } else {
      // Disable icon on other pages
      await chrome.action.disable(tabId);
      await chrome.action.setTitle({
        tabId: tabId,
        title: 'Brightpearl TaxJar - Only works on Brightpearl pages'
      });
    }
  } catch (error) {
    // Ignore errors for chrome:// pages, etc.
  }
} 
