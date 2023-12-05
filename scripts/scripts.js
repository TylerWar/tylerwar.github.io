var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail() {
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    hideTooltip();
    emailInput.style.boxShadow = '0px 0px 5px 1px rgba(68,204,0,1)';
  } else {
    showTooltip('Invalid email address. Please enter a valid email.');
    emailInput.style.boxShadow = '0px 0px 5px 1px rgba(255,0,0,1)';
  }
}

function showTooltip(message) {
  const emailInput = document.getElementById('emailInput');
  const tooltip = new bootstrap.Tooltip(emailInput, { title: message, placement: 'top' });
  tooltip.show();
}

function hideTooltip() {
  const emailInput = document.getElementById('emailInput');
  const tooltip = bootstrap.Tooltip.getInstance(emailInput);
  if (tooltip) {
    tooltip.dispose();
  }
}