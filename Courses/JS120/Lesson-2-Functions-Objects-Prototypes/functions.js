// NOTE: Run this code from a file; don't use the REPL

bar();
function bar() {
  console.log('this is bar');
}

foo();
const foo = function () {
  console.log('this is foo');
};

/*
$ node functions.js
this is bar
/Users/foobar/projects/functions.js:6
foo();
^

ReferenceError: Cannot access 'foo' before initialization
*/