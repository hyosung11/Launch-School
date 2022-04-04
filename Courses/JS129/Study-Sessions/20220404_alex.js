/* 06:20 and Alex has now appeared this morning.

### 11.2 What will the following code log to the console? */

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);

/* ### 11.2 Solution

Nothing. Unlike `call` and `apply`, `bind` doesn't invoke the function used to call it. Instead, it returns a new function that is permanently bound to the context argument. */

/* ### 11.3 What will the following code output? */

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj); // line 10

console.log(foo());
console.log(bar());

/*
The code will output `NaN` and `5`. The function `foo` looks for  properties `a` and `b` on the global object since it is invoked as a function. Both `this.a` and `this.b` evaluate to `undefined`, resulting in a `NaN` value. In Coderpad's strict mode, `console.log(foo()) will raise a `TypeError: Cannot read property `a` of undefined.

`bar` is explicitly bound to `obj` on line 10, so it references that object's `a` and `b` properties when it is invoked returning 5.
*/

/* ### 11.4 What will the code below log to the console? */

let positivity = {
  message: 'JavaScript makes sense!',
};

let negativity = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positivity); // line 13

negativity.logMessage = bar;
negativity.logMessage(); // line 16
console.log(negativity)

/* The code will log `'JavaScript makes sense'`.

The function execution context of `bar` is explicitly and permanently bound to `positivity` as the return value of the `bind` invocation on line 13. Therefore, `positivity`'s property `message` is logged by the function call on line 16 even though the function is invoked as a method on the `negativity` object.   */

/* ### 11.5 What will the code below output? */

let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj); // line 13

bar.call(otherObj);

/* The code will output `'Amazebulous'`

The function execution context of `bar` is explicitly and permanently bound to `obj` as the return value of `bind` invocation on line 13. Once a function's execution context gets bound using `bind`, its context cannot be changed, even with `call` or `apply`. */