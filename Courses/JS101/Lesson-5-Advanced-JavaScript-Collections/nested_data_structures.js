// let arr = [[1], [2]];

// arr[0].push(3);
// console.log(arr); // => [ [ 1, 3 ], [ 2 ] ]

// Add another array instead of an integer:
// let arr = [[1], [2]];

// arr[0].push([3]);
// console.log(arr); // => [ [ 1, [ 3 ] ], [ 2 ] ]

// let arr = [{ a: 'ant' }, { b: 'bear' }];

// arr[0]['c'] = 'cat';
// arr[0].d = 'dog';
// console.log(arr); // => [ { a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' } ]

let arr = [['a', ['b']], { b: 'bear', c: 'cat' }, 'cab'];

console.log(arr[0]);       // => [ 'a', [ 'b' ] ]
console.log(arr[0][1][0]); // => 'b'
console.log(arr[1]);       // => { b: 'bear', c: 'cat' }
console.log(arr[1]['b']);  // => 'bear'
console.log(arr[1].b[1]);  // => 'e'
console.log(arr[2][1]);    // => 'a'