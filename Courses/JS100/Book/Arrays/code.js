// reduce
let array = [2, 3, 5, 7];

result = array.reduce((accumulator, element) => accumulator + element, 0)

// console.log(result); // => 17


result = array.reduce((accumulator, element) => accumulator * element, 1);

// console.log(result);

// The reduce function isn't limited to computing numbers: you can also use it to compute strings, objects, arrays: anything. Here's an example with strings:

let strings = ['a', 'b', 'c', 'd'];
allCaps = strings.reduce((accumulator, element) => {
  return accumulator + element.toUpperCase()
}, '')

console.log(allCaps); // => ABCD