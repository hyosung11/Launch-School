// levels of variables

// let a = 1; // first level variable

// function foo() { // second level
//   let b = 2;

//   function bar() { // third level
//     let c = 3;
//     console.log(a); // => 1
//     console.log(b); // => 2
//     console.log(c); // => 3
//   }

//   bar();

//   console.log(a); // => 1
//   console.log(b); // => 2
//   console.log(c); // => ReferenceError
// }

// foo();

// variable shadowing 
// - discards the outer scoped local variable
// - prevents us from making changes to the outer scoped `number` variable.

// let number = 10;

// [1, 2, 3].forEach(number => {
//   console.log(number);
// });
// =>
// 1
// 2
// 3

// Block Scope
// if (true) {
//   let a = 'foo';
// }

// console.log(a); // ReferenceError

// let a = 'foo';

// if (true) {
//   console.log(a); // => 'foo'
// }

function aFunc() {
  let a = 'foo';

  if (true) {
    let b = 'bar';
    console.log(a); // => 'foo'

    if (true) {
      let c = 'baz';
    }

    console.log(a); // => 'foo'
    console.log(b); // => 'bar'
    console.log(c); // => ReferenceError -- halts execution of the program immediately and the rest of the console.logs are not logged
  }

  console.log(a); // => 'foo'
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}

aFunc();
