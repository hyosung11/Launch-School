// Example 2
// [[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

// Example 5
// console.log([[1, 2], [3, 4]].map(arr => {
//   return arr.map(num => num * 2);
// }));

/*
What will the return value be in this example? Use what you've learned so far to break it down on your own before checking the solution below.

Solution

The return
*/

// Example 6
console.log([{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
}));

// => [ { c: 'cat', d: 'dog' } ]

// with `some`
console.log(
  [
    { a: 'ant', b: 'elephant' },
    { c: 'cat', d: 'dog' },
  ].filter((object) => {
    return Object.keys(object).some((key) => object[key][0] === key);
  })
);
// [ { a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' } ]