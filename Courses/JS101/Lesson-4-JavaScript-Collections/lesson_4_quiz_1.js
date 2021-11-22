// let cat = 'Butterscotch';
// console.log(cat[8]);

// let dog = 'fido';
// dog = dog[0].toUpperCase() + dog.substring(1);
// console.log(dog);

// let str = 'This is a string';
// let arr = ['This', 'is', 'a', 'string'];
// let obj = { 'This is': 'a string' };

// console.log(str[10]);
// console.log(arr[3.14]); // => undefined
// console.log(obj.'This is');
// console.log(obj["This is"]);
// console.log(obj[This is]);

// Q4

let obj = { a: 1, x: 2};

// console.log(obj.hasOwnProperty('x'));
// console.log(obj.x); // => 2

// console.log(Object.keys(obj).includes('x')); // =>  true

// console.log(obj.keys().includes('x')); // => TypeError: obj.keys is not a function

// console.log(obj['x']); // => 2

// Q6
// let str = 'abcdefghij'

// console.log(str.substring(2, 5)); // => cde

// Q7
// let myArray = [1, 2, 3]
// console.log(myArray[-1]);

// Q8
// function lessThan(upperLimit) {
//   let numbers = [];
//   let candidate = 1;

//   while (true) {
//     numbers.push(candidate);
//     ++candidate;
//     if (candidate > upperLimit) break;
//   }

//   return numbers;
// }

// console.log(lessThan(5));

// function lessThan(upperLimit) {
//   let numbers = [];
//   let candidate = 1;

//   while (candidate < upperLimit) {
//     numbers.push(candidate);
//   }

//   return numbers;
// }

// function lessThan(upperLimit) {
//   let numbers = [];
//   let candidate = 0;

//   do {
//     candidate++;
//     numbers.push(candidate);
//   } while (candidate < upperLimit);

//   return numbers;
// }

// function lessThan(upperLimit) {
//   let lengths = [];

//   for (let candidate = 1; candidate < upperLimit; candidate += 1) {
//     lengths.push(candidate);
//   }

//   return lengths;
// }

// console.log(lessThan(5));

// Q9

// let arr = [1, 2]

// console.log(arr.shift(0));
// console.log(arr.splice(0));
// console.log(arr.slice(1));
// console.log(arr.concat(0));

// Q12
// let arr = true;
// console.log(Object.keys(arr).length === arr.length);

// Q13

// Q19
// let result = ['a', 'b', 'c'].map(function(item) {
//   console.log(item);
// });

// console.log(result); // []

// Q20
// let result = [1, 2, 3, 4, 5].map(num => num + 1);
// console.log(result); // []

// Q21
// let colors = ['green', 'blue', 'red'];
// let result = colors.map(word => word.toUpperCase());
// console.log(result); // ['GREEN', 'BLUE', 'RED']

// Q22
const obj = { a: 'able', b: 'baker', c: 'charley' };
let result = someMethod(obj).map(value => value.toUpperCase());
// => [ 'ABLE', 'BAKER', 'CHARLEY' ]