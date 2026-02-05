// Modern utility functions to replace jQuery
const Utils = {
  // $(selector) equivalent - single element
  $(selector, context = document) {
    return context.querySelector(selector);
  },

  // $(selector) for multiple elements
  $$(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
  },

  // $.ajax() equivalent with fetch
  async ajax(options) {
    const config = {
      method: options.type || 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    if (options.data) {
      if (config.method === 'GET') {
        const params = new URLSearchParams(options.data);
        options.url += '?' + params.toString();
      } else {
        const formData = new FormData();
        Object.entries(options.data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        config.body = formData;
      }
    }

    try {
      const response = await fetch(options.url, config);
      const text = await response.text();

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      if (options.success) {
        options.success(text);
      }

      return text;
    } catch (error) {
      if (options.error) {
        options.error(error);
      }
      throw error;
    }
  },

  // Event delegation helper
  on(parent, event, selector, handler) {
    parent.addEventListener(event, (e) => {
      const target = e.target.closest(selector);
      if (target) {
        handler.call(target, e);
      }
    });
  },

  // Show/hide helpers
  show(element) {
    if (element) element.style.display = '';
  },

  hide(element) {
    if (element) element.style.display = 'none';
  },

  // Class manipulation
  addClass(element, className) {
    if (element) element.classList.add(className);
  },

  removeClass(element, className) {
    if (element) element.classList.remove(className);
  },

  // Get/set value
  val(element, value) {
    if (value !== undefined) {
      if (element) element.value = value;
      return value;
    }
    return element ? element.value : '';
  },

  // Get/set text content
  text(element, value) {
    if (value !== undefined) {
      if (element) element.textContent = value;
      return value;
    }
    return element ? element.textContent : '';
  },

  // Get/set attribute
  attr(element, name, value) {
    if (!element) return undefined;
    if (value !== undefined) {
      element.setAttribute(name, value);
      return value;
    }
    return element.getAttribute(name);
  },

  // Find child elements
  find(element, selector) {
    return element ? element.querySelector(selector) : null;
  },

  findAll(element, selector) {
    return element ? Array.from(element.querySelectorAll(selector)) : [];
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.Utils = Utils;
}
