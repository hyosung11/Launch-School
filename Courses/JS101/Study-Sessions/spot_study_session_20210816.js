/* SPOT Study Session

Introductions
Javi Mesa
Kris Ingva
Eamon O'Callaghan
Luci Temple
David Ecklund
HyoSung

Review of Hard Question 3

reassignment of a variable is not destructive

assignment is never destructive unless it's index assignment

*/

// function messWithVars(one, two, three) {
//   one[0] = two;
//   two[0] = three;
//   three[0] = one;
// }

// let one = ['one'];
// let two = ['two'];
// let three = ['three'];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // => one is:
// console.log(`two is: ${two}`); // => two is:
// console.log(`three is: ${three}`); // => three is:

// Eamon OCallaghan ran 18 lines of JavaScript (finished in 671ms):

// [ 'one' ] [ 'two' ] [ 'three' ]
// <ref *1> [ [ [ [Circular *1] ] ] ] <ref *1> [ [ [ [Circular *1] ] ] ] <ref *1> [ [ [ [Circular *1] ] ] ]
// <ref *1> [ [ [ [Circular *1] ] ] ]
// <ref *1> [ [ [ [Circular *1] ] ] ]
// <ref *1> [ [ [ [Circular *1] ] ] ]

// Truthiness
// let num = 5;
// if (num) {
//   console.log('valid number');
// } else {
//   console.log('error!');
// }

// evaluates to true vs is true
// evaluates to false or is a falsy value

// let num = 0;
// if (num) {
//   console.log('valid number');
// } else {
//   console.log('error!');
// }

// //
// function isArrayEmpty(arr) {
//   if (arr) {
//     console.log('Not Empty');
//   } else {
//     console.log('Empty');
//   }
// }

// isArrayEmpty([]);

// //
// function bar(foo) {
//   console.log(foo);
// }

// let foo = 1;
// bar();

// //
// function bar() {
//   console.log(foo);
// }

// let foo = 1;
// bar();

// hoisted
// function expressions do not get hoisted
// arrow functions are not hoisted
// function declarations are hoisted

// What will be printed to the console and why?
// ['kim', 'joe', 'sam'].forEach((name) => {
//   console.log(`${name} ${name}`);
// });

// variable shadowing
// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach((name) => {
//   console.log(`${name} ${name}`);
// });

// fix variable shadowing
// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach((firstName) => {
//   console.log(`${firstName} ${name}`);
// });

// function changeName(name) {
//   name = 'bob'; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name);
// }

// anotherFunction(); // => jim

// function changeName() {
//   name = 'bob'; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name);
// }

// anotherFunction();

// let name = 'Javi';

// function changeName() {
//   name = 'bob'; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   //console.log(name);
// }

// anotherFunction();

// console.log(name);

// let name = 'Javi';

// function changeName(name) {
//   name = 'bob'; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   //console.log(name);
// }

// anotherFunction();

// console.log(name); // => Javi

// from Slack
function messWithVars(one, two, three) {
  one[0] = two;
  two[0] = three;
  three[0] = one;
  console.log(one, two, three);
}
let one = ["one"];
let two = ["two"];
let three = ["three"];
messWithVars(one, two, three);

// = <ref *1> [ [ [ [Circular *1] ] ] ] <ref *1> [ [ [ [Circular *1] ] ] ] <ref *1> [ [ [ [Circular *1] ] ] ]