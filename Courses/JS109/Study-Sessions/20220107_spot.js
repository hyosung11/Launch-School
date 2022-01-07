/* JS 101-109 & 210-211 SPOT Study Session with Ian Austin (LS216)

Introductions
- Ian, SPOT leader, with LS for two years, now FT in JavaScript 9/10 course
- Jeannine, JS101 Lesson 5, coming back from 5 month break
- Shane, started JS109
- HyoSung, fluency with the language, tons of 7 kyu to help with syntax, read other people's solutions, break problems down
- Spencer Haka, just getting into JS109 written assessment
- Rona Hsu, written
- Alfonso Gonzalez, JS211 written
- MasantXVI aka

Kahoot
- not the same value in memory

Symbol => a guaranteed unique value

first class function => function that can be passed to or returned by a function
higher order function

[] => true

!!"" === ![]
false === false // true
*/
// let a = [1, 2, 3];

// function sayHello(a) {
//   a.push(24);
//   return a;
// }

// sayHello(a)
// console.log(a)
// console.log(a === [1, 2, 3, 24])

// What is returned? what is output? Are any errors thrown?
// why? What is the fundamental principle?

// let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];
// let copyOfArr = [...arr];

// copyOfArr[4] = [{d: 'qux'}];
// console.log(copyOfArr);

// arr[4].e = 'xyz';
// console.log(arr);

// // What is returned? what is output? Are any errors thrown?
// // why? What is the fundamental principle?

// let arr = [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }]; // [0x1234, 0x1235, 0x1236]
// let copyOfArr = [...arr]; // => [{a: 'foo'}, {b: 'bar'}, {c: 'baz'}, <empty space>, [{d: 'qux'}]]

// //[0x1234, 0x1235, 0x1236]

// copyOfArr[4] = [{d: 'qux'}];
// console.log(copyOfArr); // [{a: 'foo'}, {b: 'bar'}, {c: 'baz'}, <empty space>, {d: 'qux', e: 'xyz'}]

// arr[2].c = 'abc';
// arr[4].e = 'xyz';
// console.log(arr); // [{ a: 'foo' }, { b: 'bar' }, { c: 'baz' }];

// let a = 1 == 1 ? true : false; // true

// function hello(arg) {
//   console.log(arg);
// }

// hello(a); // true

// Create a function that takes a string as an argument and return an object
// with letters of the string and their occurrence as properties:
// countOccurences('abbab'); // => {a:2, b: 3}

// -count each letter in the string

function countOccurrences(string) {
  let result = {}
  
  string.split('').forEach(char => {
    result[char] ? result[char] += 1 : result[char] = 1;
  });
  
  return result;
}

console.log(countOccurrences('abbab')); // => {a:2, b: 3}

// Can you do 20 problems in 30 minutes? 
// 15 -20 problems in 30 minutes each and you're ready to go

https://docs.google.com/document/d/1WVxV5LeGCeVdR1n-cMNdl7Rwr-avKanXoihpK9YoYkE/edit#