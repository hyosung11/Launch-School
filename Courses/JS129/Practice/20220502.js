/* 4. What will this code log to the console? */

// let positivity = {
//   message: 'JavaScript makes sense!',
// };

// let negativity = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positivity);

// negativity.logMessage = bar;
// // console.log(negativity);
// negativity.logMessage();

/* The code will log `'JavaScript makes sense!'`. Since `bar` is bound to `positivity` as the return value of the `bind` invocation on line 13, `positivity`'s property `message` is logged by the function call on the last line, despite the fact that the function is invoked as a method on the `negativity` object.  */

/*5. What will the code output? */

let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

/* The code will output `'Amazebulous!'`. Once a function's context gets bound using `bind`, its context can't be changed, even with `call` or `apply`. The last line of our code outputs `'Amazebulous'` because the function `bar`'s context has been permanently bound to `obj`. */