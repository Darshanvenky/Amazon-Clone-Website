import {calculateCartQuantity, updateQuantity} from '../data/cart.js';

import {renderOrderSummary} from './checkout/orderSummary.js';

import {renderPaymentSummary} from './checkout/paymentsSummary.js'

renderOrderSummary();

renderPaymentSummary();



  function updateCartQuantity() {
    const cartQuantity = calculateCartQuantity();

    document.querySelector('.js-return-to-home-link')
      .innerHTML = `${cartQuantity} items`;
}

updateCartQuantity();





document.querySelectorAll('.js-update-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`);

      container.classList.add('is-editing-quantity');
    });
    
  });
  

  document.querySelectorAll('.js-save-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
    const productId = link.dataset.productId;


    const quantityInput = document.querySelector(`.js-quantity-input-${productId}`);

    const newQuantity = Number(quantityInput.value);

    if (newQuantity < 0 || newQuantity >= 1000) {
      alert('quantity must be at least 0 and less than 1000');
      return;
    }

    updateQuantity(productId, newQuantity);

    const container = document.querySelector(
      `.js-cart-item-container-${productId}`);

    container.classList.remove('is-editing-quantity');


    const quantityLabel = document.querySelector(`.js-quantity-label-${productId}`);

    quantityLabel.innerHTML = newQuantity;

    updateCartQuantity();

    });
    
  });














