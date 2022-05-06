// function bar() {
//   console.log('good morning');
// }

// global.inner = {
//   bar() {
//     console.log('good afternoon');
//   },
// };

// let obj = {
//   inner: {
//     bar() {
//       console.log('good night');
//     },

//     foo() {
//       bar();
//     },
//   },

//   bar() {
//     console.log('wake up');
//   },

//   foo() {
//     this.inner.bar();
//     inner.bar();
//     bar();
//   },
// };

// obj.foo();

/* The code logs `good night`, `good afternoon`, and `good morning`. Line 33 uses method invocation to invoke `obj.foo` on line 26, which sets the context (`this`) for `obj.foo` to the `obj` object. Thus, line 27 invokes `obj.inner.bar` on line 13, which logs `good night`. The calls on lines 28 and 29 don't use `this`, so both calls look to the global object. Line 28 invokes `global.inner.bar` on line 6 which logs `good afternoon` and line 29 invokes `bar` on line 1 which logs `good morning`. */

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

let foo = function () {
  console.log('go to sleep');
};

function go(foo) {
  foo();
}

go(obj.foo);