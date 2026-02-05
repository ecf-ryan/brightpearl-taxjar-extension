// Modern async/await implementation with fetch API
async function loadZipcodeData(zipcode) {
  const clientKey = await ConfigManager.getApiKey('zipcode');

  if (!clientKey) {
    console.error('Zipcode API key not configured');
    alert('Please configure the extension from the options page');
    return;
  }

  const url = `https://www.zipcodeapi.com/rest/${clientKey}/info.json/${zipcode}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // Field mapping for auto-fill
    const fields = {
      'customer_postcode': zipcode,
      'billing_postcode': zipcode,
      'delivery_postcode': zipcode,
      'delivery_city': data.city,
      'billing_city': data.city,
      'customer_city': data.city,
      'customer_state': data.state,
      'billing_state': data.state,
      'delivery_state': data.state
    };

    // Update form fields
    Object.entries(fields).forEach(([id, value]) => {
      const element = document.getElementById(id);
      if (element) {
        element.value = value;
      }
    });
  } catch (error) {
    console.error('Failed to fetch zipcode data:', error);
    alert('Failed to fetch zipcode information. Please check your API key configuration.');
  }
}

// Execute with config from popup
if (typeof window.config !== 'undefined') {
  loadZipcodeData(window.config.zipcode);
}