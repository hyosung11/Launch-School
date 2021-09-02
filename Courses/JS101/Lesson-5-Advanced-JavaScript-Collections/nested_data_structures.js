// let arr = [[1], [2]];

// arr[0].push(3);
// console.log(arr); // => [ [ 1, 3 ], [ 2 ] ]

// Add another array instead of an integer:
let arr = [[1], [2]];

arr[0].push([3]);
console.log(arr); // => [ [ 1, [ 3 ] ], [ 2 ] ]