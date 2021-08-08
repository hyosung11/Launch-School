// let greeting = ["Hello"];

// function test(arr) {
//   arr = arr.concat("World!");
//   return arr;
// }

// console.log(test(greeting));
// console.log(greeting);

// let arr = ['Hello'];
// arr.push('World');
// arr = arr.concat('World');
// console.log(arr);

// let array = [5, 6, 7];

// function reassign (arr) {
//   arr[2] = 34;
//   return arr;
// }

// console.log(array);
// array = reassign(array);
// console.log(array);

// let animal = 'dog';

// const speak = (animal) => {
//   if (animal === undefined) {
//     console.log('Bark');
//   } else {
//     console.log('Meow');
//   }
// };

// speak();

/*
- The function speak is declared with a parameter animal.
- When we invoke the function speak (on line 11), we are not passing any argument to it.
- (not passing a required argument) does not throw an error, instead, the argument takes the value of undefined
- animal === undefined returns true, therefore the console.log("Bark") branch is executed and "bark" is printed
*/

function test(str) {
  str + '!!!';
}

let word = test('Hello');

if (word) {
  console.log('Hi');
} else {
  console.log('Goodbye');
}

