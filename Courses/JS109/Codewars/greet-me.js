/* Greet Me - 7 kyu

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"

describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message) 
Test.assertEquals(greet('riley'), 'Hello Riley!');
  });
});

*/

// function greet(name) {
//   return `Hello ${name[0].toUpperCase() + name.slice(1)}!`
// }

var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.toLowerCase().slice(1)}!`;
};

console.log(greet('riley'));
console.log(greet('Bbaily')); // Hello Bbaily!
// console.log(greet('riley') === 'Hello Riley!')

Just return the numbers - 
Expected: 142258358364925210000, 
instead go142258358364925200000