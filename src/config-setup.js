document.getElementById('config-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const config = {
    apiKeys: {
      zipcode: document.getElementById('zipcode-key').value.trim()
    },
    baseUrl: document.getElementById('base-url').value.trim()
  };

  // Ensure baseUrl ends with /
  if (!config.baseUrl.endsWith('/')) {
    config.baseUrl += '/';
  }

  const statusEl = document.getElementById('status');
  statusEl.textContent = 'Saving configuration...';
  statusEl.className = 'status-message info';

  try {
    await chrome.storage.local.set({ config });
    statusEl.textContent = '✓ Configuration saved successfully!';
    statusEl.className = 'status-message success';

    setTimeout(() => {
      statusEl.textContent = '';
    }, 3000);
  } catch (error) {
    console.error('Failed to save configuration:', error);
    statusEl.textContent = '✗ Failed to save configuration. Please try again.';
    statusEl.className = 'status-message error';
  }
});

// Load existing config on page load
window.addEventListener('load', async () => {
  try {
    const { config } = await chrome.storage.local.get(['config']);
    if (config) {
      document.getElementById('zipcode-key').value = config.apiKeys?.zipcode || '';
      document.getElementById('base-url').value = config.baseUrl || '';
    }
  } catch (error) {
    console.error('Failed to load configuration:', error);
  }
});
