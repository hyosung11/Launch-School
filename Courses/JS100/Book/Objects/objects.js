objA = { a: 'foo' }
objB = { b: 'bar' }

Object.assign({}, objA, objB)
// { a: 'foo', b: 'bar' }

objA
// { a: 'foo' }

objB
// { b: 'bar' }

console.log({}, objA, objB); // {} { a: 'foo' } { b: 'bar' }