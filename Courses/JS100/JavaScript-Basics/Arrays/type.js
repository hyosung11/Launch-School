/* JS100 - JavaScript Basics Arrays > 8. Type

Type

How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

function filter(input) {
  // Is input an array?
}
*/

let someValue1 = ['Omi', 'Zomi', 'Omsi', 'Omes'];
let someValue2 = { name: 'SungOh', sex: 'male' }

console.log(Array.isArray(someValue1));
console.log(Array.isArray(someValue2));