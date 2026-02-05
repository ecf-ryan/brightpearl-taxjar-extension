// Configuration manager for secure API key storage
const ConfigManager = {
  async init() {
    // Check if config already exists in storage
    const stored = await chrome.storage.local.get(['config']);

    if (!stored.config) {
      // First-time setup: prompt admin for keys
      console.warn('Extension configuration required');
      return null;
    }

    return stored.config;
  },

  async getConfig() {
    const { config } = await chrome.storage.local.get(['config']);
    return config || null;
  },

  async setConfig(configData) {
    await chrome.storage.local.set({ config: configData });
  },

  async getApiKey(keyName) {
    const config = await this.getConfig();
    return config?.apiKeys?.[keyName] || null;
  },

  async getBaseUrl() {
    const config = await this.getConfig();
    return config?.baseUrl || null;
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.ConfigManager = ConfigManager;
}
