// Modern async/await implementation
async function hello() {
  const zipcode = document.getElementById("zipcode").value.substring(0, 5);
  const button = document.getElementById('ok_btn');

  button.textContent = "Fetching data....";
  button.disabled = true;

  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Inject config variable using func parameter (safer than code string)
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (zipcodeValue) => {
        window.config = { zipcode: zipcodeValue };
      },
      args: [zipcode]
    });

    // Inject tab.js
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['tab.js']
    });
  } catch (error) {
    console.error('Failed to inject script:', error);
    alert('Error fetching details. Please try again.');
  } finally {
    button.textContent = "Fetch details";
    button.disabled = false;
  }
}

document.getElementById('ok_btn').addEventListener('click', hello);

// Listen for messages from content script (if on Brightpearl page)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.zipcode !== undefined) {
    const zipcodeInput = document.getElementById('zipcode');
    if (zipcodeInput) {
      zipcodeInput.value = message.zipcode;
    }
  }
});

// On popup load, check if we're on a Brightpearl page
window.addEventListener('load', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Handle edge cases (chrome:// pages, etc.)
    if (!tab || !tab.url) {
      return;
    }

    const url = new URL(tab.url);
    const isBrightpearl = url.hostname.includes('brightpearl.com') ||
                          url.hostname.includes('brightpearlapp.com');

    if (!isBrightpearl) {
      // Not on Brightpearl - show message and disable functionality
      const messageP = document.querySelector('.mainpopup p');
      if (messageP) {
        messageP.textContent = 'This extension only works on Brightpearl pages. Please navigate to a Brightpearl order page to use this extension.';
        messageP.style.color = '#cc0000';
      }
      const zipcodeInput = document.getElementById('zipcode');
      const button = document.getElementById('ok_btn');
      if (zipcodeInput) zipcodeInput.disabled = true;
      if (button) button.disabled = true;
    } else {
      // On Brightpearl - enable functionality
      const zipcodeInput = document.getElementById('zipcode');
      if (zipcodeInput) {
        zipcodeInput.focus();
      }
    }
  } catch (error) {
    // Silently fail - not critical for popup to work
    console.log('Page check skipped:', error.message);
  }
});
