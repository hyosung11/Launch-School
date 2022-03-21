/* JS120 - Object Oriented JavaScript > Objects > 2. Buggy Code 2

Buggy Code 2

A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results. */

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function (percent) {
//     let discount = (this.price * percent) / 100;
//     this.price -= discount;

//     return this.price;
//   },
// };

// > item.discount(20)   // should return 40
// = 40
// > item.discount(50)   // should return 25
// = 20
// > item.discount(25)   // should return 37.5
// = 15

/* Solution

The problem is that the `discount` method is mutating the `item` object. Recall that objects are mutable, and as such, changes made to the property of the `item` object are compounded every time that the `discount` method is called. To resolve this, the `discount` method should be modified so that it doesn't mutate the object. Here's one approach:

*/
// I don't understand how this works and where it goes? Laurent agrees that the LS solution is confusing.
// function discountItem(item, percent) {
//   let discount = (item.price * percent) / 100;
//   return item.price - discount;
// }

// Integrating into the code above, like this works:
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = item.price * percent / 100;
    return item.price - discount;
  },
};

// console.log(item.discount(20))   // returns 40
// console.log(item.discount(50))   // returns 25
// console.log(item.discount(25))   // returns 37.5

/* Posi Odumosu
11 months ago

The method inside the object modifies the price property each time it's run. Individually the code runs fine but when practically used consecutively, the prop value for price keeps changing. So I just declared a new variable inside the function I'm returning, as opposed to returning price. */

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = (this.price * percent) / 100;
    let newPrice = this.price - discount;

    return newPrice;
  },
};

console.log(item.discount(20))   // returns 40
console.log(item.discount(50))   // returns 25
console.log(item.discount(25))   // returns 37.5