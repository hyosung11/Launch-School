// Object Key Assignment

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
obj['apple'] = 'Fruit'
obj.carrot = 'Vegetable'

// console.log(obj)
// { apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Produce',
//   broccoli: 'Produce' }

// In the node REPL or a code file, use the same method to set a value of either 'Fruit' or 'Vegetable' to the pear and broccoli properties.

obj.pear = 'Fruit';
obj['broccoli'] = 'Vegetable';

console.log(obj);
// {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// }