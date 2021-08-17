// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// arr.slice(2, 5)
// //  ['c', 'd', 'e']
// arr.slice(2, 5)[0]
// // 'c'

// let arr = ['a', 'b', 'c', 'd']
// let arrCopy = arr.slice()
// console.log(arrCopy.push('e'));
// // 5

// arr
// // [ 'a', 'b', 'c', 'd' ]
// arrCopy
// // [ 'a', 'b', 'c', 'd', 'e' ]

let nestedArr = [1, [2, 3], { foo: 4 } ]
let nestedCopy = nestedArr.slice()

nestedCopy.push(5);
// 4
nestedCopy[1].push(6);
// 3
nestedCopy[2].bar = 7;
// 7

nestedArr
// [ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ]
nestedCopy
// [ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]