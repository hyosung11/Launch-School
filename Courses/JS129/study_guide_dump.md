# JS129 Assessment: Object Oriented Programming > Specific Topics of Interest > Study Guide

## Overview

## Checklist

## Specific Topics of Interest

- [x] 1. Objects, object factories, constructors and prototypes, OLOO, and ES6 classes
- [x] 2. Methods and properties; instance and static methods and properties
- [x] 3. Prototypal and pseudo-classical inheritance
- [x] 4. Encapsulation
- [x] 5. Polymorphism
- [x] 6. Collaborator objects
- [x] 7. Single vs multiple inheritance
- [x] 8. Mix-ins; mix-ins vs. inheritance
- [x] 9. Methods and functions; method invocation vs. function invocation
- [x] 10. Higher-order functions
- [x] 11. The global object
- [x] 12. Method and property lookup sequence
- [x] 13. Function execution context and this
- [x] 14. Implicit and explicit execution context
- [ ] 15. Dealing with context loss
- [ ] 16. `call`, `apply`, and `bind`
- [ ] 17. `Object.assign` and `Object.create`
- [ ] 18. Built-in constructors like `Array`, `Object`, `String` and `Number`
- [ ] 19. Reading OO code



## 15. Dealing with Context Loss

In the next three assignments, we'll discuss how functions and methods can "lose context." We've used quotes since functions don't lose their execution context in reality -- they always have one, but it may not be the context that you expect. If you understand how execution context is determined, you shouldn't be surprised by the value of `this` in any given scenario. That said, how a specific context is arrived at isn't always intuitive. Even when you understand the rules, the context for any given invocation may surprise you.

In these assignments, we'll talk about the different scenarios and how to deal with them. In this first assignment, we'll study what happens when a method is copied out of an object and used elsewhere.

### 12.1 Method Copied from Object

In an earlier assignment, you saw what happens when you take a method out of an object and execute it as a function or as a method on another object. In either case, the function's context is no longer the original object. For instance:

```js
let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings();         // context is john
let foo = john.greetings; // Strips context
foo(); // context is now the global object
```

You could use `foo.call(john)` to restore the original context, but suppose you don't execute the function right away or you need to pass it to another function for execution? By the time `foo` gets called, `john` may be out of scope.

```js
function repeatThreeTimes(func) {
  func(); // can't use func.call(john); john is out of scope
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings); // Strips context
}

foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

One way to solve this problem is to change `repeatThreeTimes` to accept the context object as a second parameter, then pass the context to `repeatThreeTimes` when calling it.

```js
function repeatThreeTimes(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// hello, John Doe
// hello, John Doe
// hello, John Doe
```

Some of JavaScript's built-in methods, such as the Array abstraction methods like `forEach`, `map`, and `filter`, use this technique. Such methods take a callback function as an argument and an optional `thisArg` context object that gets used as the callback's execution context.

However, it's not always possible to pass a context argument to a function or method; you may not even be able to change the function if, say, it belongs to a third-party library. Besides, it's generally not a good idea to pass a lot of arguments to your functions; the more arguments a function can accept, the harder the function is to use.

Another approach you can use is to hard-bind the method's context using `bind`:

```js
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john));
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe
```

`bind` has one significant advantage: once you bind a context to a function, that *binding is permanent* and does not need to be repeated if it gets called more than once. The disadvantage of `bind` is that it is no longer possible to determine the context by looking at the invocation of the final function.

In the next assignment, we'll study how functions can lose their surrounding context. Loss of surrounding context is a common issue when dealing with functions nested within object methods.

## 13. Dealing with Context Loss II

In this assignment, we'll see how **nested functions** *suffer from context loss*.

### 13.1 Inner Function Not Using the Surrounding Context

Examine the following code:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar(); // line 9
  },
};

obj.foo();  // => undefined undefined
```

By now, you should be able to understand why this code logs `undefined` `undefined` instead of `hello world`. However, the behavior is not intuitive, so don't worry if you can't see the problem just yet.

As we've said repeatedly, a function or method's execution context depends solely on how you invoke it, not on how and where it's defined. Here, `bar` is invoked as a standalone function on line 9. Thus, its execution context is the global object, not the `obj` object that you may have expected.

Let's examine some solutions to this problem.

#### 13.1.1 Solution 1: Preserve Context with a Variable in Outer Scope

One common way to preserve the context in this scenario is to use something like let s`elf = this` or `let that = this` in the outer function. If you define the `self` or `that` variable -- these names are idiomatic, and not a required name --- in the outer scope, you can use that variable and whatever value it contains inside your nested inner function(s).

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this; // line 5

    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  },
};

obj.foo(); // => hello world
```

In this example, line 5 assigns `this` to the local variable `self`. Since JavaScript uses lexical scoping rules for variables, `bar` can access `self` within its body; that lets us use it instead of `this` to access the correct context object.

#### 13.1.2 Solution 2: Call Inner Functions with Explicit Context

You can also use `call` or `apply` to explicitly provide a context when calling the inner function. For instance:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  },
};

obj.foo(); // => hello world
```

We won't show an example of `apply` since you can always use `call` in its place if you use the spread operator to expand `apply`'s array argument.

#### 13.1.3 Solution 3: Use `bind`

A third approach is to call `bind` on the inner function and get a new function with its execution context permanently set to the object.

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

Note that we're calling bind on the function expression here, then assigning the returned function to the bar variable. You can also use a function declaration instead of a function expression, but you'll need an extra variable:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    let qux = bar.bind(this);

    // some code
    qux();

    // some more code
    qux();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

One advantage of `bind` is that you can do it once and then *call it as often as needed without an explicit context*.

#### 13.1.4 Solution 4: Using an Arrow Function



Arrow functions have a property that comes in very handy when dealing with context loss; they inherit their execution context from the surrounding context. That means that an arrow function defined inside another function always has the same context as the outer function's context:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    }

    // some code
    bar();

    // some more code
    bar();

    // still more code
  }
};

obj.foo();
// => hello world
// => hello world
```

Using arrow functions like this is similar to using bind in that you don't have to worry about arrow functions losing their surrounding context. An arrow function, once created, always has the same context as the function that surrounded it when it was created.

Of all the techniques we saw in this assignment, using arrow functions is the most common these days.

#### 13.1.5 Don't Use Arrow Functions as Methods on an Object

Despite how useful arrow functions are for avoiding context loss, *you should not try to use them as methods on an object*. They don't work as expected.

```js
let obj = {
  a: 5,

  foo: () => {
    console.log(this.a);
  },
};

obj.foo(); // => undefined
```

The reason that this code doesn't work is that arrow functions always get the value of `this` from the surrounding context. In the code shown above, it certainly looks like the surrounding context is `obj`, so shouldn't `this` refer to `obj`? Despite appearances and what your logic tells you, that isn't the case.

The surrounding context is, in fact, the `global object`. The reason for that is simple: the `let` statement in this example *is in the program's top-level code*, so its context is the global object. That means that `this` inside the object literal is also the global object, so `this` on line 5 refers to the global object, not `obj`.

When using `node` to execute a file, e.g., `node somefile.js`, the surrounding context is the `module`, not the global object. This can cause a certain amount of confusion when working with node in both REPL and file modes. We'll discuss modules in a later course.

You may have noticed that `this` in `obj.foo` is not determined by how the method is called. We call the method on line 9, and we seem to be telling JavaScript to use obj as the context. Instead, the context ends up being the global object. That seems to contradict our repeated statements that the context is determined entirely by how a function or method is invoked. That's clearly not the case here; it certainly violates the rule. However, *you won't usually see code like this in practice.*

In general, you should not use arrow functions to write methods. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), "Arrow function expressions are ill suited as methods, and they cannot be used as constructors." The example shown here demonstrates one reason why that is so: it doesn't follow the rules. As long as you don't try to use arrow functions as methods, you can ignore this exception.

In the next assignment, we'll study how functions can lose their context by being passed as arguments.

## 14. Dealing with Context Loss III

In this assignment, we'll see how *passing functions as arguments can strip them of their intended context objects*, and see what we can do to deal with that loss.

### 14.1 Function as Argument Losing Surrounding Context

This scenario is a variation of one that we dealt with in the previous assignment. Examine this code:

```js
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined
```

In this example, we use the `john` object to call the `greetings` method, with `john` as its context. `greetings`, in turn, calls the `repeatThreeTimes` function with a function argument whose body refers to `this`. `repeatThreeTimes` *calls its argument three times with an implicit context*. As we've learned, the context is determined by how a function is invoked, so the context for all three invocations will be the global object. Thus, `this` inside the function passed to `repeatThreeTimes` is the **global object**, not `john`.

You might look at this and think that this problem probably doesn't happen often. However, consider the following code:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined
```

That code looks simple enough; it loops over an array and logs some information to the console. The problem, though, is that `forEach` executes the function expression passed to it, so it *gets executed with the global object as context*. Once again, this has the wrong value, and the function doesn't do what we want.

This problem is easy to fix. You can use the same solutions we used to solve a similar problem in the previous assignment.

#### 14.1.1 Solution 1: Preserve the Context with a Variable in Outer Scope

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.2 Solution 2: Use `bind`

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.3 Solution 3: Use an Arrow Function

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

#### 14.1.4 Solution 4: Use the optional `thisArg` argument

Some methods that take function arguments allow an optional argument that specifies the context to use when invoking the function. `Array.prototype.forEach`, for instance, has an optional `thisArg` argument for the context. This argument makes it easy to work around this context-loss problem.

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj.foo();

// => 1 hello world
// => 2 hello world
// => 3 hello world
```

The array methods `map`, `every` and `some` and others also take an optional `thisArg` argument.

### 14.2 Dealing with Context Loss III Summary

Passing a function as an argument to another function strips it of its execution context, which means *the function argument gets invoked with the context set to the global object*. This problem is identical to the problem with copying a method from an object and using it as a bare function. For instance, the following two code snippets do the same thing:

```js
// Snippet 1
array.forEach(obj.logData);

// Snippet 2
let logData = obj.logData;
array.forEach(logData);
```

In both snippets, the `obj.logData` method gets invoked by `forEach` with the global object as the context, not `obj`.

## 16. `call`, `apply`, and `bind`

8. The `call` and `apply` methods invoke a function with an explicit execution context.

9. The `bind` method returns a new function that permanently binds a function to a context.

10. Arrow functions are permanently bound to the execution context of the enclosing function invocation. When defined at the top level, the context of an arrow function is the global object.

### 16.1 Explicit Execution Context with `call`

In previous assignments, we said that JavaScript functions are objects: they have properties and methods just like any other object. One method that all JavaScript functions have is the call method. The call method calls a function with an explicit execution context. Let's see how that works:

```js
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42
```

That's interesting! We can call the `logNum` function and tell it to use `obj` as its execution context. When we use call in this manner, `this` refers to the `obj` object inside the `logNum` function. The first argument to `call` provides the explicit context for the function invocation.

Again, we see that a function's definition has no bearing on its execution context. The context doesn't get determined until we invoke the function; in this case, we're using `call` to invoke it and set the context.

The code is functionally similar to the following:

```js
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

obj.logNum = logNum;
obj.logNum(); // logs 42
```

Those last two code examples aren't identical, however. In the second example, we add a new property to the `obj` object; we don't mutate the object when we use `call`.

You can also use `call` to explicitly set execution context on methods, not just functions:

```js
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj1.logNum.call(obj2); // logs 42
```

The behavior here is similar to:

```js
let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num: 42
};

obj2.logNum = obj1.logNum;
obj2.logNum(); // logs 42
```

Again, there is a difference: in this case, we *mutate* `obj2` when we give it a `logNum` property that it didn't have before.

You may have already spotted a problem with this pattern. Suppose our function takes arguments. How do we provide them? Let's see an example to illustrate this point:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};
```

We want to call `sumNum` in such a way that it updates `obj.num`. Fortunately, the `call` method lets us pass arguments as a comma-separated list to our function:

```js
obj.num = sumNum.call(obj, 5);
console.log(obj.num); // => 47
```

Again, we can understand this better if we try to write the code more directly:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

obj.sumNum = sumNum;
obj.num = obj.sumNum(5);
console.log(obj.num); // => 47
```

You can, of course, add as many arguments to the `call` method invocation as the function needs. Let's see another, more complex example:

```js
let iPad = {
  name: 'iPad',
  price: 40000,
};

let kindle = {
  name: 'Kindle',
  price: 30000,
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price / 100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');        // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.');      // => 2: Kindle, 300 dollars.
```

The general syntax for `call` is as follows:

```js
someObject.someMethod.call(context, arg1, arg2, arg3, ...)
```

### 16.2 Explicit Execution Context with `apply`

The apply method works in much the same way as call. The only difference is that apply uses an array to pass any arguments to the function. Here's the general syntax:

```js
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])
```

`apply` is handy when you have the list of arguments in an array. With modern JavaScript (ES6 and higher), `apply` isn't needed since *you can use call in conjunction with the spread operator to accomplish the same thing*:

```js
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
```

## 16.3 `bind` - Hard Binding Functions with Contexts

In the previous two assignments, we learned about two methods on function objects that we *can use to set the execution context of function and method calls explicitly*: `call` and `apply`. JavaScript has a third way to specify the context: the `bind` method on function objects. `bind` works a little differently, however. Let's see an example:

```js
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
sumNum2(5); // => 47
```

In this example, we don't call the function immediately as we do when using `call` and `apply`, Instead, bind returns a new function. The new function is **permanently** bound to the object passed as bind's first argument. You can then pass that method around and call it without worrying about losing its context since it's *permanently bound* to the provided object.

Let's see another example:

```js
let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
bar();  // "undefined undefined"

let baz = object.foo.bind(object);
baz(); // "hello world"
```

An interesting and important property of permanently bound functions is that *you cannot change their execution context*, even if you use `call` or `apply` or call `bind` a second time. Continuing with the code from the previous example:

```js
let object2 = {
  a: 'hi',
  b: 'there',
};

baz.call(object2);  // "hello world" - `this` still refers to `object`
```

JavaScript implements the `bind` method something like this:

```js
Function.prototype.bind = function (...args) {
  let fn = this;
  let context = args.shift();

  return function () {
    return fn.apply(context, args);
  };
};
```

While you've learned enough to understand most of that code, it's not really important to wrap your head around it. What's important to recognize is that `bind`'s context is the original function, and it returns a new function that calls the original function with the context supplied to bind as its first argument. This code also shows why *the binding makes permanent changes* -- no matter what you do to the returned function, you can't change the value of `context`.

A trap that students often fall into is the thinking that `bind` permanently alters the original function. It's important to remember that `bind` *returns a new function*, and that new function is permanently context-bound to the object provided as the first argument to `bind`. The original function isn't changed and doesn't have its context changed.

It's also important to understand that bind does not contradict our repeated statement that context is determined entirely based on how you call a function or method, not where you call it or how you define it. Technically, `bind` defines a new function. However, when we call that function, its implementation -- as shown above -- calls the original function using `apply`. Thus, it's still the "how" of the call that determines the context, not the definition or location.

Let's close this assignment with a final example:

```js
let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buena noches, '
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');
```

In this example, we bind the `greeting` function to the `spanishWords` object and assign the result to `spanishGreeter`. When we call `spanishGreeter`, JavaScript uses `spanishWords` as the context. Thus, `spanishGreeter('Jose')` will log something like `'Buenas tardes, Jose'` instead of `'Good afternoon, Jose'`.

In this assignment, we saw a third way to specify the execution context. Unlike `call` and `apply`, though, `bind` *returns a new function that is permanently bound to the context that's provided to bind as the first argument*. You cannot alter the execution context of the resulting function, even if you use `call`, `apply`, or try calling `bind` a second time.

## 17. `Object.assign` and `Object.create`

One object factory can *reuse another object* factory by mixing the object returned by another factory function into itself by using `Object.assign()`.

## 18. Built-in Constructors like `Array`, `Object`, `String` and `Number`

JavaScript comes with a variety of built-in constructors and prototypes that let you *instantiate useful objects*. These constructors work like constructors for other objects; they're used with the `new` keyword to create objects. In this assignment, we will discuss some of JavaScript's built-in constructors, their prototypes, and how you can extend them.

### 18.1 The `Array` constructor

You've seen and worked with array objects many times so far. The simplest way to create an array object uses the bracket syntax:

```sh
> let numbers = [1, 2, 3, 4]
> numbers
[ 1, 2, 3, 4 ]
```

This syntax is how you usually create arrays in JavaScript. However, you can also use the `Array` constructor:

```sh
> let emptyArray = new Array();
> emptyArray
[]
```

As you might suspect, calling `new Array()` creates and returns a new array. That array is empty unless you also pass some arguments to the constructor. Each argument you provide gets added to the new array as an element:

```sh
> let numbers = new Array(1, 2, 3, 4)
> numbers
[ 1, 2, 3, 4 ]

> let colors = new Array('green', 'blue', 'yellow')
> colors
[ 'green', 'blue', 'yellow' ]
```

The behavior is considerably different when you *provide a single number argument*. In this case, the constructor creates an array with a length equal to the number specified by the argument, but with no actual elements:

```sh
> new Array(3)
[ < 3 empty items ]
```

You can think of `[ <3 empty items> ]` as an array that has three empty slots. In effect, it's an empty array that happens to contain spaces for three items; alternatively, it's a non-empty array that contains no values. Call it Schrödinger's array if you wish.

Note that the single-number form of the constructor does not accept non-integers or negative numbers:

```sh
> new Array(3.1415)
=> RangeError: Invalid array length

> new Array(-5)
=> RangeError: Invalid array length
```

The single-number constructor, together with the `Array.prototype.fill` method, lets you create arrays with a value that is repeated in every element:

```sh
> (new Array(3)).fill('*');
[ '*', '*', '*' ]
```

The `fill` method takes any value as an argument and replaces all elements of the array with that value. Note that the parentheses around `new Array(3)` aren't strictly necessary; however, you should *use them for clarity*. They show your intent to run `fill` on the new array.

You may recall that the `new` keyword provides some useful behavior when creating new objects. In many cases, omitting the keyword can lead to unexpected behavior and errors. Interestingly, `Array` *lets you omit the new keyword*:

```sh
> Array(1, 2, 3)
[ 1, 2, 3 ]
```

The behavior of this above code is identical to the earlier example that uses `new Array(1, 2, 3)`.

Some other JavaScript constructors exhibit this behavior. In fact, the ECMAScript specification document requires it in specific cases. However, that doesn't mean that you should omit `new` routinely in your code. You might be using a constructor that doesn't implement this behavior, which can sometimes lead to different behavior when you omit `new`.

For now, don't worry about why the specification requires this behavior or how you can do the same thing yourself. *Stay consistent and use `new` unless there's a good reason to omit it*.

#### 18.1.1 `Array.prototype`

As with any JavaScript function, the `Array` constructor has a `prototype` property. All arrays inherit from the object referenced by this property:

```sh
> let numbers = [1, 2, 3]
> Object.getPrototypeOf(numbers) === Array.prototype
true
```

This relationship implies that every array can use the methods defined in `Array.prototype`. In particular, that means that all arrays can use methods like `forEach`, `map`, `includes`, as well as all the other methods defined on `Array.prototype`:

```sh
// let numbers = [1, 2, 3] <-- from above
> numbers.map(number => number * number);
[ 1, 4, 9 ]

> numbers.includes(3)
true
```

If you go to the [MDN documentation page for arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), you'll see a list of all these array methods with names that follow the pattern `Array.prototype.aMethod`. These methods are the instance methods for the Array type.

#### 18.1.2 Static Array Methods

Besides instance methods, the array type also has several static methods. We'll discuss two in this section. Remember: static methods belong directly to the constructor function; they aren't part of the prototype used to create new objects. As a result, their names don't include `.prototype`. Moreover, you usually use the constructor to invoke the static methods, not the object created by that constructor. (This definition isn't complete, but it will do for our purposes.)

**Array.isArray**

The `Array.isArray` method takes one argument and returns `true` if the argument is an array object, and `false` if it is not:

```sh
> Array.isArray([])
true

> Array.isArray({})
false

> Array.isArray(5)
false
```

Programs often use `Array.isArray` to verify or refute that a given value is an array object. Why do we need it? Won't `typeof` tell us whether the argument is an array? Unfortunately, no. The `typeof` operator returns an unexpected and somewhat useless value when used with an array:

```sh
> typeof []
'object'
```

That result may be unexpected, but it shouldn't be too surprising if you think about it. You already know that all arrays are objects. That doesn't make it any less useless, however, so we need `Array.isArray` to distinguish between arrays and other objects.

**Array.from**

The `Array.from` method takes an **array-like object** as an argument and returns a new array with the equivalent element values. An array-like object is any object that has a `length` property and provides indexed access to some of its properties with the `[index]` notation. Such objects have properties whose keys are non-negative integers. In many cases, the `length` property won't self-update if you add or remove properties to or from the object.

```sh
> Array.from({0: 'a', 1: 'b', 2: 'c', length: 3})
['a', 'b', 'c']
```

The following code shows one way to implement the logic behind `Array.from`. Studying this code should help you make sense of what `Array.from` does:

```js
let arrayFrom = obj => {
  let len = obj.length;
  let returnArr = [];

  for (let idx = 0; idx < len; idx += 1) {
    returnArr.push(obj[idx]);
  }

  return returnArr;
};

arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 3});
// => [ 'a', 'b', 'c' ]
```

Why would somebody need to do that? It seems silly to create an object that looks like an array but isn't an array. Why bother?

The use case shown isn't particularly useful, but there are other use cases for `Array.from`. In particular, some functions and methods return objects that resemble arrays in some ways but serve some other purpose. For instance, if you use JavaScript to request a list of elements from your browser, the **DOM** (more on that much later) may return an array-like object called a **node list**. Such objects can *store live data* -- dynamic data that can change without intervention by your code. A simple array wouldn't do the trick here, but a node list does. Better yet, the node list is an array-like object, so `Array.from` can create an array based on its content.

In the degenerate case, all arrays are themselves array-like objects.

### 18.2 The `Object` constructor

As with the `Array` constructor, the `Object` constructor creates new objects:

```sh
> new Object()
{}
```

You can invoke `Object` without the `new` keyword, just as you can omit `new` with the `Array` constructor:

```sh
> Object()
{}
```

To repeat ourselves, omitting `new` is probably not a good practice.

#### 18.2.1 `Object.prototype`

All objects created by the `Object` constructor or with object literal syntax (e.g., `{ a: 1, b: 2 }`, inherit from `Object.prototype`. Thus, all such objects have access to the instance methods defined in `Object.prototype`. We've already seen some of these methods in action, such as `Object.prototype.hasOwnProperty` and `Object.prototype.isPrototypeOf`.

Since arrays are a subtype of objects, it should come as no surprise that *all array objects have access to all the methods* on `Object.prototype`.

```sh
> ['a', 'b', 'c'].hasOwnProperty(1)
true
```

You can think of the integer indices as properties of the array. In our example, `0`, `1`, `2` are the properties and `'a'`, `'b'`, `'c'` are the values. We can verify that `Array` is a subtype of `Object` by checking whether `Array.prototype` inherits from `Object.prototype`:

```sh
> Object.getPrototypeOf(Array.prototype) === Object.prototype
true
```

**Almost all JavaScript objects, whether built-in or custom-created, inherit from `Object.prototype`, either directly or further down the prototype chain.** That includes prototype objects of constructors. Note that we said "almost all"; as discussed in an earlier lesson, it is possible to create objects that don't inherit from `Object.prototype`.

Another oft-used method is `Object.prototype.toString`. It returns a string representation of the object that it's called on. Since `toString` is a method on `Object.prototype`, all JavaScript objects -- including arrays, functions, and dates -- inherit this method. However, the default behavior of `Object.prototype.toString` is not very useful; it merely returns `[object Object]` for objects that don't override this method to provide smarter behavior:

```sh
> let obj = { a: 1, b: 2 }
> obj.toString()
'[object Object]'   // not very helpful!

> [1, 2, 3].toString()
'1,2,3'

> let func = function hello() {}
> func.toString()
'function hello() {}'
```

#### 18.2.2 Static `Object` Methods

The list below shows some commonly used static `Object` methods. You've already seen and used several. Feel free to follow the links and read more about these methods, but you don't have to memorize them. Instead, learn what's available. You can look them up later when you need to use them:

- `Object.assign()`
- `Object.create()`
- `Object.entries()`
- `Object.freeze()`
- `Object.isFrozen()`
- `Object.keys()`
- `Object.values()`

### 18.3 The Date Constructor

The Date constructor creates objects, commonly called a **date object**, that represent a specific date and time. Calling `Date` without arguments returns a date object that represents the creation date and time of the object:

```sh
> let now = new Date()
> now
2022-03-09T14:57:44.473Z
```

You can create date objects that represent any given date and time by passing additional arguments to the Date constructor. For instance, to create a date object that represents "May 1, 1983", you can write:

```sh
> let birthday = new Date("May 1, 1983")
> birthday
1983-05-01T07:00:00.000Z
```

You can get even more specific by including the time:

```sh
> birthday = new Date("May 1, 1983 05:03 am")
> birthday
1983-05-01T12:03.00.000Z
```

The dates shown by the above code may appear as 1983-05-02. This issue is caused by the time zone of the environment where you run the code. Working with time zones is messy; we won't get into that in this course.

There are several other ways to specify the date and time, including variations on the date strings shown above, and by providing other arguments to the `Date` constructor. Check the [MDN documentation for Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) to learn more.

#### 18.3.1 Date.prototype

The `Date` prototype object provides a variety of convenient methods for working with dates. We'll mention a few here.

**`Date.prototype.toString()`**

The `toString` method returns a string that represents the date (it's pretty verbose):

```sh
> let now = new Date()
undefined
> now.toString()
'Wed Mar 09 2022 15:07:09 GMT+0000 (Coordinated Universal Time)'
>
```

**`Date.prototype.getFullYear()`**

The `getFullYear` method returns the year from the date as a number:

```sh
> now.getFullYear()
2022
```

**`Date.prototype.getDay()`**

The `getDay` method returns a number that represents the day of the week that corresponds to the date object. The return value is `0` for Sunday, `1` for Monday, and so on until it returns `6` for Saturday.

```sh
> now.getDay()
3 // (represents Wednesday)
```

The `Date` prototype has a bunch of useful methods for working with dates and times. Be sure to check the [MDN documentation page for Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and explore a few more methods.

### 18.4 The `String` Constructor

Why do we need a constructor for strings? Aren't JavaScript strings a primitive type? We know they are since the strict equality operator compares strings by value rather than identity:

```sh
> 'abc' === 'abc'
true
```

Two strings with the same characters are considered equal in JavaScript. Equality for objects works by identity, however. Two objects are strictly equal only when they are the same object. Consider:

```sh
> let arr1 = [1, 2, 3];
> let arr2 = arr1    // arr1 and arr2 both reference the same object
> arr1 === [1, 2, 3] // false
> arr1 === arr2      // true
```

Interestingly, we can *access properties and call methods on strings*:

```sh
> 'abc'.length
3

> 'abc'.toUpperCase()
'ABC'
```

How is that possible given that strings are primitive values? Primitive values aren't objects, so where does JavaScript find those properties and methods?

We'll return to those questions shortly. First, though, we need to learn that JavaScript has two kinds of strings: **string primitives** and **`String` objects**. Thus far, all the strings we've created and used have been string primitives. We create string primitives by using quotes (single or double) or back-tick characters to define a string's value. To create a `String` object, on the other hand, we must use the `String` constructor:

```sh
> let strPrimitive = 'abc'
> typeof strPrimitive
'string'

> let strObject = new String('xyz')
> typeof strObject
'object'
```

That's interesting: a string primitive's type is `'string'`, but the `String` object's type is `'object'`. It's clear that JavaScript considers the two types of string as different types. That difference has implications. Consider this code:

```sh
> 'abc' === 'abc'
true

> new String('abc') === new String('abc')
false
```

Wow! Two string primitives that have the same value are equal, but not two `String` objects. If you're confused by that, think of poor JavaScript. What's an OOP language to do with weirdness like that? Fortunately, JavaScript is pretty good about remembering what's what.

That still leaves us with a big question: why in the world do we need a `String` object? That goes back to our original question: how can we call methods on string primitives?

The answer is that when you try to access a property or invoke a method on a string primitive, JavaScript *wraps* the string primitive in a `String` object behind the scenes. The process sounds complicated and costly in computing resources, but the implementation is reasonably lightweight; there is little impact on your program. Best of all, the process is invisible.

Once JavaScript has wrapped your string primitive in a `String` object, it then uses the object to access the property or call the method. When the wrapping object has served its purpose, JavaScript discards it.

If a property or method returns a string, it returns a string primitive, so you also don't have to worry about converting `String` objects to primitives.

As a general rule, *you should not create* `String` objects explicitly. That's where you're likely to run into problems with the distinction between string primitives and `String` objects. However, if you're writing code where you may have to operate on `String` objects, you can use `String.prototype.valueOf()` to retrieve the value of the `String` object as a primitive.

#### 18.4.1 `String` Without `new`

As with most constructors, with the notable exception of `Array` and `Object`, calling the constructor without the `new` keyword *does not create* an object. In the case of `String`, it simply returns a new string, not an object, when you omit the `new` keyword:

```sh
> let str = String('abc')
> typeof str
'string'

# with `new` keyword
> let str = new String('abc')
> typeof str
'object'
>
```

The `String` function takes non-string values as arguments as well. In that case, it *converts the value to a string*:

```sh
> String(undefined)
'undefined'

> String(3.14)
'3.14'

> String([1, 2, 3])
'1,2,3'

> String(a => a * a)
'a => a * a'
```

### 18.5 The `Number` and `Boolean` Constructors

The `Number` and `Boolean` constructors work in much the same way as the `String` constructor. When called with `new`, they create `Number` and `Boolean` objects. When called without `new`, the `Number` function *converts its argument to a number*, and the `Boolean` function *converts its argument to a boolean*.

```sh
> Number('123');
123

> Boolean(0);
false

> Boolean('abc');
true
```

As with strings, numbers and booleans both have primitive and object forms, and JavaScript invisibly wraps primitives in objects to access methods and properties. You should also *avoid creating `Number` and `Boolean` objects explicitly*.

### 18.6 Extending Built-in Prototypes

Since all JavaScript objects derive their behavior from the prototype objects associated with their constructors, we can add new capabilities to our built-in objects by changing those prototypes. For example, we can add a `first` method to all arrays by adding it to `Array.prototype`:

```js
Array.prototype.first = function() {
  return this[0];
}

[1, 2, 3].first(); // => 1
```

Since we use the array `[1, 2, 3]` to call `first`, `this` inside the function refers to `[1, 2, 3]`. Thus, the `first` method returns the first element of the array used to call it, or `undefined` if the array is empty.

Extending built-in objects is interesting to study, but it's *best to avoid doing so*. Adding a method like `first` to an array object *can confuse other developers* working on your project. It can lead to errors when other developers forget or don't realize that your array has an unexpected bonus.

### 18.7 Borrowing Array Methods for Strings

First-class functions in a programming language provide several benefits. One significant benefit is that methods aren't tied to a particular object type. *Using explicit context-binding techniques*, we can apply a method to a different object type than the one that defines the method. This "method borrowing," however, doesn't make sense for every object and every method. For example, it doesn't make sense to use the `getDay` date method on an array.

Array methods, however, are surprisingly useful with `String` objects. We can borrow many array methods to manipulate String objects. Consider the following code:

```js
let string = 'EEE';
Array.prototype.every.call(string, char => char === 'E'); // => true
```

JavaScript strings don't have an `every` method, but we can use `Array.prototype.every` on our string by using `call` or `apply`. Here, we use `every` to determine whether the string `EEE` contains all `E` characters.

We can shorten that expression noticeably by using an empty array instead of `Array.prototype` as the calling object:

```js
[].every.call(string, char => char === 'E'); // => true
```

Why does method borrowing work? Let's look at a simplified implementation of `Array.prototype.every`:

```js
Array.prototype.every = function(callback) {
  for (let index = 0; index < this.length; index++) {
    if (!callback(this[index])) return false;
  }

  return true;
};
```

Note how the method uses `this` to access the length and elements of the array that called it. Since `String` objects also have a `length` property and use index-based element access, this code works with strings as well as arrays.

Let's see another example:

```js
[].filter.call('olives', val => val < 'm'); // [ 'l', 'i', 'e' ]
```

Notice that the `filter` method *returns an array, even though we called it on a string*. If you think about it, that makes sense. The `call` and `apply` functions don't change a function's logic or return values; they merely change what object the method uses for its context. Array methods that return an array will still do so even when called on a string value. If you need a string result, you can use `join` to convert the array to a string:

```js
[].filter.call('olives', val => val < 'm').join(''); // => 'lie'
```

Note that not all array methods can operate on strings. Consider the following example:

```js
let ingredients = 'olives';
[].push.call(ingredients, ' and pepper');
// TypeError: Cannot assign to read only property 'length' of object '[object String]'
```

*Array methods that mutate the array won't work with strings*. Again, that makes sense: strings are **immutable**.

## 19. Reading OO code
