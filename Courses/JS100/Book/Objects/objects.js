objA = { a: 'foo' }
objB = { b: 'bar' }

let output = Object.assign({}, objA, objB)
// { a: 'foo', b: 'bar' }

objA
// { a: 'foo' }

objB
// { b: 'bar' }

console.log(output, objA, objB); // {} { a: 'foo' } { b: 'bar' }
// { a: 'foo', b: 'bar' } { a: 'foo' } { b: 'bar' }
// Yes, I figured it out!