// script.js

// Token purchase with different payment modes
function purchaseWithCard() {
  // Implement purchase with credit/debit card functionality
}

function purchaseWithMobileMoney() {
  // Implement purchase with mobile money functionality
}

function purchaseWithPayPal() {
  // Implement purchase with PayPal functionality
}

// Start live web chat
function startChat() {
  // Implement live web chat functionality
}

// Toggle modal for token purchase
document.addEventListener('DOMContentLoaded', function() {
  const purchaseModal = document.getElementById('purchaseModal');
  const closeBtn = document.querySelector('.close');
  const burgerMenu = document.querySelector('.burger-menu');
  const mainNav = document.querySelector('.main-nav ul');

  burgerMenu.addEventListener('click', function() {
      mainNav.classList.toggle('show');
  });

  closeBtn.addEventListener('click', function() {
      purchaseModal.style.display = 'none';
  });
});
