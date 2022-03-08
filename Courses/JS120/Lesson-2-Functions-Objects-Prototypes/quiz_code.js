// let cats = {
//   names: ['Butterscotch', 'Pudding', 'Fluffy'],
//   foo() {
//     [1, 2, 3].forEach(function (number) {
//       console.log(`${number}: ${this.names[number - 1]}`);
//     });
//   },
// };

// cats.foo();
// Expected output:
// 1: Butterscotch
// 2: Pudding
// 3: Fluffy


/* Question 8 0 / 1 Points
Incorrect

What will the code below log to the console when using Node.js? Assume that the code is in a separate file, and that you would use the node command to run it. However, try to answer without running the code.
*/

function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

obj.foo();

/*
Expected Output:
good night
good afternoon
good morning


Discussion

Correct:

C: Line 33 uses method invocation to invoke obj.foo on line 26, which sets the context (this) for obj.foo to the obj object. Thus, line 27 invokes obj.inner.bar on line 13, which logs good night. The calls on lines 28 and 29 don't use this, so both calls look elsewhere; namely, in the global object. Thus, line 28 invokes global.inner.bar on line 6, which logs good afternoon, and line 29 invokes bar on line 1, which logs good morning.

*/