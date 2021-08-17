let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr; // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
console.log(arr.length);; // => 3 (not 5!)
arr.forEach((element) => console.log(element)); // prints: foo, bar, qux
console.log(Object.keys(arr));; // => [ '0', '1', '2', 'boo', '-1' ]
