/* JS120 - Object Oriented JavaScriptObjectsBuggy Code 2

Buggy Code 2

A grocery store uses a JavaScript function to calculate discounts on various items. They are testing out various percentage discounts but are getting unexpected results. Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. Then, modify the code so that it produces the correct results. */

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function (percent) {
    let discount = (this.price * percent) / 100;
    return this.price - discount;
  },
};

console.log(item.discount(20)); // should return 40
console.log(item.discount(50)); // should return 25
console.log(item.discount(25)); // should return 37.5

/* JS120 - Object Oriented JavaScript > Objects > Testing Object Equality

Testing Object Equality

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs. */

function objectsEqual(obj1, obj2) {
  let arr1 = Object.entries(obj1).sort();
  let arr2 = Object.entries(obj2).sort();

  if (arr1.length !== arr2.length) return false;

  for (let idx = 0; idx < arr1.length; idx += 1) {
    if (arr1[idx][0] !== arr2[idx][0]) return false;
    if (arr1[idx][1] !== arr2[idx][1]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {})); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({a: 'foo'}, {a: 'foo'})); // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})); // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 1}, {c: 'foo', b: 1}));  // false
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', b: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 1}, {a: 'foo', b: 1}));  // true
console.log(objectsEqual({b: 1, a: 'foo'}, {a: 'foo', b: 1}));  // true