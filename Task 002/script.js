'use strict';
const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    };
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    };
  },
  add(productName, priceProduct, quantityProduct = 1) {
    const product = {
      productName,
      priceProduct,
      quantityProduct,
    };
    this.items.push(product);
    this.increaseCount();
    this.count += quantityProduct;
  },
  increaseCount() {
    return this.count;
  },
  calculateItemPrice() {
    let result = this.items.reduce((acc, { priceProduct, quantityProduct }) =>
    acc + priceProduct * quantityProduct, 0);
    return result - (result * this.discount / 100);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(this.items);
    console.log(this.totalPrice);
  },
};

cart.add('Вино', 450);
cart.add('Пиво', 100, 5);
cart.setDiscount = 'NEWYEAR';
cart.print();
