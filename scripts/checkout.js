import {calculateCartQuantity, updateQuantity} from '../data/cart.js';

import {renderCheckoutHeader} from './checkout/checkoutHeader.js';

import {renderOrderSummary} from './checkout/orderSummary.js';

import {renderPaymentSummary} from './checkout/paymentsSummary.js';

import {loadProducts, loadProductsFetch} from '../data/products.js';

import {loadCart} from '../data/cart.js';

//import '../data/cart-class.js';

//import '../data/car.js';

//import '../data/backend-practice.js';



Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});



/*new Promise((resolve) => {
  loadProducts(() => {
    resolve();
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}); */



/*loadProducts(() => {
  loadCart(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
  });
}); */
















