// Modern ES2022 implementation of Brightpearl TaxJar content script

// Send initial message containing page details
chrome.runtime.sendMessage({
  'title': document.title,
  'url': window.location.href,
  'zipcode': window.getSelection().toString()
});

// Main tax calculation logic wrapped in async IIFE
(async function() {
  'use strict';

  // Get configuration from ConfigManager
  const baseUrl = await ConfigManager.getBaseUrl();

  if (!baseUrl) {
    console.error('Backend URL not configured');
    return;
  }

  // Main tax calculation function
  async function taxCalculation() {
    const accountID = document.querySelector(".account-info .account-id .white")?.textContent || '';
    const transactiontype = document.getElementById('search_type')?.value || '';
    const department_id = document.getElementById('department_id')?.value || '';
    const tjTaxCalculated = document.getElementById('PCF_TJCALTAX')?.value || '';

    if (transactiontype !== 'sales' || !document.getElementById('sale-invoice-btn')) {
      return;
    }

    let docUrl = window.location.href.replace("#", "");
    const url = new URL(docUrl);
    const taxCalculated = url.searchParams.get("tcal") === "1" ? 1 : 0;
    const orderType = document.title;

    try {
      // Validate order channel
      const channelData = await validateOrderChannel(department_id, taxCalculated, orderType);

      if (channelData.channelFound !== 1) {
        return;
      }

      await setupTaxCalculationUI(channelData, taxCalculated, department_id, orderType);
    } catch (error) {
      console.error('Tax calculation failed:', error);
    }
  }

  // Validate order channel with backend
  async function validateOrderChannel(channelId, taxCalculated, orderType) {
    const url = `${baseUrl}webhooks/validateOrdersChannel`;
    const formData = new URLSearchParams({
      channelId,
      taxCalculated,
      orderType
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });

    const text = await response.text();
    return JSON.parse(text);
  }

  // Setup UI for tax calculation
  async function setupTaxCalculationUI(channelData, taxCalculated, department_id, orderType) {
    const { channelFound, taxMode, taxCode, noTaxCode } = channelData;
    const tjTaxCalculated = document.getElementById('PCF_TJCALTAX')?.value || '';
    const customers_id = document.getElementById('customers_id')?.value || '';
    const transactiontype = document.getElementById('search_type')?.value || '';
    const detailsTable = document.getElementById("details_table");

    if (!detailsTable) {
      return;
    }

    if (!document.getElementById('sale-invoice-btn') || transactiontype !== 'sales' || channelFound !== 1) {
      return;
    }

    // Set save button ID
    const saveButton = document.querySelector("#page-controls .btns .btn");
    if (saveButton) {
      saveButton.id = 'saveTaxjarChanges';
    }

    // If tax already calculated, update tax codes
    let finalTaxCalculated = taxCalculated;
    if (taxMode === 1 && tjTaxCalculated.toLowerCase() === 'yes') {
      finalTaxCalculated = 1;
    }

    if (finalTaxCalculated === 1) {
      if (taxCode > 0 && noTaxCode > 0) {
        updateTaxCodes(taxCode, noTaxCode);
      }
    } else {
      // Disable save button until tax calculated
      const invoiceBtn = document.getElementById('sale-invoice-btn');
      if (invoiceBtn) {
        invoiceBtn.classList.add('disabled');
        invoiceBtn.style.pointerEvents = 'none';
      }
    }

    // Add Calculate Taxes button if not already present
    const buttonRow = document.getElementsByClassName('buttonrow')[0];
    if (buttonRow && !document.getElementById("calculateTax")) {
      buttonRow.insertAdjacentHTML('beforeend', `
        <button class="btn btn-danger calculatetaxbtn"
                style="float:right; background-color:#cc0000 !important; font-weight:600 !important; color:white !important;"
                id="calculateTax">Calculate Taxes</button>
        <span id="calculate_tax_spinner" style="display:none; margin-left:10px; color:#cc0000;">
          <style>
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .spinner { display: inline-block; width: 16px; height: 16px; border: 2px solid #f3f3f3; border-top: 2px solid #cc0000; border-radius: 50%; animation: spin 1s linear infinite; }
          </style>
          <span class="spinner"></span> Calculating...
        </span>
        <input type="hidden" name="isChanges" id="isChanges" value="0">
      `);

      // Setup form change detection
      setupFormChangeListeners();

      // Setup Calculate Taxes button handler
      setupCalculateTaxesHandler(department_id, customers_id, orderType);
    } else if (document.getElementById('calculateTax')) {
      // Button already exists, ensure handlers are set up
      setupFormChangeListeners();
      setupCalculateTaxesHandler(department_id, customers_id, orderType);
    }
  }

  // Update tax codes for line items
  function updateTaxCodes(taxCode, noTaxCode) {
    const rows = document.querySelectorAll("#details_table tbody tr");
    rows.forEach((row, index) => {
      const taxUserInput = document.querySelectorAll("#details_table input[name='rwTotalTaxUser[]']")[index];
      const taxSelect = row.querySelector(".colTaxCode .invoiceSelect");

      if (taxUserInput && taxSelect) {
        const taxUserValue = parseFloat(taxUserInput.value) || 0;
        if (taxUserValue > 0) {
          taxSelect.value = taxCode;
        } else if (taxUserValue === 0) {
          taxSelect.value = noTaxCode;
        }
      }
    });
  }

  // Setup form change listeners with event delegation
  function setupFormChangeListeners() {
    const formChangeHandler = () => {
      const isChangesInput = document.getElementById('isChanges');
      const saveBtn = document.getElementById('sale-invoice-btn');
      const taxField = document.getElementById('PCF_TJCALTAX');

      if (isChangesInput) isChangesInput.value = '1';
      if (saveBtn) {
        saveBtn.classList.add('disabled');
        saveBtn.style.pointerEvents = 'none';
      }
      if (taxField) taxField.value = '';
    };

    // Selectors that should trigger form change
    const watchedSelectors = [
      '#date',
      '#trigger_date',
      '#department_id',
      '#details_table input',
      '#details_table .colNominal .invoiceSelect',
      '#invoice-batch-add-items-link',
      '#invoice-add-row-link',
      '.rowTools .delete',
      '#orders_warehouse',
      '#vat_method',
      '#delivery_street_address',
      '#delivery_suburb',
      '#delivery_city',
      '#delivery_state',
      '#delivery_postcode',
      '#delivery_country'
    ];

    // Use event delegation for change events
    document.addEventListener('change', (e) => {
      if (watchedSelectors.some(sel => e.target.matches(sel))) {
        formChangeHandler();
      }
    }, { capture: true, once: false });

    // Use event delegation for click events
    const clickSelectors = [
      '#trigger_date',
      '#invoice-batch-add-items-link',
      '#invoice-add-row-link',
      '.rowTools .delete'
    ];

    document.addEventListener('click', (e) => {
      if (clickSelectors.some(sel => e.target.matches(sel))) {
        formChangeHandler();
      }
    }, { capture: true, once: false });
  }

  // Setup Calculate Taxes button handler
  function setupCalculateTaxesHandler(department_id, customers_id, orderType) {
    const calculateBtn = document.getElementById("calculateTax");
    if (!calculateBtn) return;

    // Remove any existing listeners by cloning the element
    const newBtn = calculateBtn.cloneNode(true);
    calculateBtn.parentNode.replaceChild(newBtn, calculateBtn);

    newBtn.addEventListener('click', async (event) => {
      event.preventDefault();

      const isChanges = document.getElementById('isChanges')?.value || '0';

      if (isChanges === '1') {
        alert("Your order has changed, click OK to save these changes and then press `Calculate Taxes` again.");
        return;
      }

      const vat_method = document.getElementById('vat_method')?.value || '';

      if (vat_method !== '1') {
        alert("Please select `Price exclude tax` as `Price mode` to calculate tax.");
        return;
      }

      // Show loading state
      newBtn.style.display = 'none';
      const loadingSpinner = document.getElementById("calculate_tax_spinner");
      if (loadingSpinner) loadingSpinner.style.display = 'inline-block';

      try {
        // Collect order data
        const orderData = collectOrderData(department_id, customers_id, orderType);

        // Calculate taxes
        await calculateTaxes(orderData);
      } catch (error) {
        console.error('Tax calculation failed:', error);
        alert('Failed to calculate taxes. Please try again.');
      } finally {
        // Hide loading state
        newBtn.style.display = 'block';
        if (loadingSpinner) loadingSpinner.style.display = 'none';
      }
    });
  }

  // Collect order data from form
  function collectOrderData(department_id, customers_id, orderType) {
    const warehouse = document.getElementById('orders_warehouse')?.value || '';
    const taxDate = document.getElementById('date')?.value || '';
    const bpOrderId = document.getElementById('order-id-input')?.value || '';
    const postcode = document.getElementById('delivery_postcode')?.value.substring(0, 7) || '';
    const del_street = document.getElementById('delivery_street_address')?.value || '';
    const del_suburb = document.getElementById('delivery_suburb')?.value || '';
    const del_city = document.getElementById('delivery_city')?.value || '';
    const del_state = document.getElementById('delivery_state')?.value || '';
    const del_country = document.getElementById('delivery_country')?.value || '';

    // Build delivery address
    let fullStreet = del_street;
    if (del_suburb) {
      fullStreet += ' ,' + del_suburb;
    }

    const deliveryParams = JSON.stringify([{
      'street': fullStreet,
      'city': del_city,
      'state': del_state,
      'postcode': postcode,
      'country': del_country
    }]);

    // Check for dropship PO
    const dropshipElement = document.querySelector(".colFulfilment a");
    const dropshipPO = dropshipElement ? dropshipElement.textContent : 0;

    // Collect line items
    const bpItemArr = [];
    const rows = document.querySelectorAll("#details_table tbody tr");

    rows.forEach((row, index) => {
      const rowId = row.getAttribute('data-row-id');
      const rowIndex = rowId ? parseInt(rowId) - 1 : index;

      const getInputValue = (name) => {
        const input = document.querySelectorAll(`#details_table input[name='${name}']`)[rowIndex];
        return input ? input.value : '';
      };

      bpItemArr.push({
        "index": rowIndex,
        "prod_id": getInputValue('products_id[]'),
        "prod_sku": getInputValue('sku[]'),
        "prod_details": getInputValue('details[]'),
        "prod_nominal": row.querySelector(".colNominal .invoiceSelect")?.value || '',
        "prod_taxcode": row.querySelector(".colTaxCode .invoiceSelect")?.value || '',
        "prod_qty": getInputValue('qty[]'),
        "prod_onHand": getInputValue('onHand[]'),
        "prod_stock_managed": getInputValue('stock_managed[]'),
        "prod_bundleQty": getInputValue('bundleQty[]'),
        "prod_listPrice": getInputValue('listPrice[]'),
        "prod_discount": getInputValue('discount[]'),
        "prod_itemnet": getInputValue('itemnet[]'),
        "prod_itemnet4dp": getInputValue('itemnet4dp[]'),
        "prod_rowNet": getInputValue('rowNet[]'),
        "prod_rwTotalTaxUser": getInputValue('rwTotalTaxUser[]'),
        "prod_rowManualTaxOverride": getInputValue('rowManualTaxOverride[]'),
        "prod_rowTotalBase": getInputValue('rowTotalBase[]'),
        "prod_bpRowId": getInputValue('orders_products_id[]'),
        "prod_orderId": bpOrderId,
        "prod_orderType": orderType
      });
    });

    console.log('Order data collected:', bpItemArr);

    return {
      data: JSON.stringify(bpItemArr),
      warehouse,
      deliveryParams,
      oID: bpOrderId,
      channelId: department_id,
      customerId: customers_id,
      orderType,
      taxDate,
      dropshipPO
    };
  }

  // Calculate taxes via backend API
  async function calculateTaxes(orderData) {
    const url = `${baseUrl}webhooks/calculateTaxLines`;
    const formData = new URLSearchParams(orderData);

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });

    const text = await response.text();
    const returnedData = JSON.parse(text);

    // Handle response
    if (returnedData.messge) {
      alert(returnedData.messge);
    } else if (returnedData.exempted) {
      const saveBtn = document.getElementById('sale-invoice-btn');
      if (saveBtn) {
        saveBtn.classList.remove('disabled');
        saveBtn.style.pointerEvents = '';
      }
      alert(returnedData.exempted);
    } else if (returnedData.success) {
      // Reload page with tcal=1 parameter
      let docUrl = window.location.href.replace("#", "");
      window.location.href = docUrl + '&tcal=1';
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', taxCalculation);
  } else {
    taxCalculation();
  }

  // Handle department change
  document.addEventListener('change', (e) => {
    if (e.target.id === 'department_id') {
      taxCalculation();
    }
  });

})();
