# Object Oriented Programming with JavaScript (20220623 15:43 Version)

## Topical Outline

1. What is OOP?
   1.1 Advantages and Disadvantages of OOP
2. Encapsulation
3. Creating Objects
   3.1 Property Access
   3.2 Property Existence
4. 

## Object Oriented Programming

### 1. What is OOP?

Object oriented programming is a programming paradigm that solves problems by organizing programs into objects that hold data as both state (properties) and behavior (methods). The four basic principles of OOP are APIE: Abstraction, Polymorphism, Inheritance, and Encapsulation.

#### 1.1 Advantages and Disadvantages of OOP

- Advantages
  - OOP lets programmers think about problems at a higher-level of abstraction, which helps them break down and solve the problem.
  - OOP helps programmers write programs that reduce **dependencies** in a program, which makes maintenance easier.
  - Done right, OOP makes code flexible, easy to understand, and easy to change.

- Disadvantages
  - OOP programs are often much larger than the equivalent procedural program.
  - OOP may lead to less efficient code; OO programs may require more memory, disk space, and computing power.

### 2. Encapsulation

**Encapsulation** is the idea of bundling data and operations related to that data in a cohesive unit called an object. This grouping together of related data and functions through encapsulation is one of the fundamental principles of object-oriented programming.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors. An object only exposes a **public interface** of the data and behaviors that other parts of the application need to work and keep its implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. However, JavaScript does not directly provide the means to limit exposure of properties and methods.

#### 2.1 Encapsulation Example

To illustrate encapsulation, let’s take the following code:

```js
let overtime = 10;
let baseSalary = 6000;
let rate = 50;

function computeWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}
```

Up top are the data related to the employee’s wage and a function that operates on the data. The object-oriented way of solving this problem by using encapsulation is done by simply *combining data and related functions into one unit* like so:

```js
let employee = {
  baseSalary: 6000,
  overtime: 10,
  rate: 50,
  computeWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
  }
}
```

Everything that's related to the `employee` object is bundled. Object-oriented programming organizes code into logical units.

Here, we *instantiated an object using the object literal syntax*. While there are other more sophisticated patterns of object creation, at the very core, we are essentially doing the same thing: *grouping data and related functions together*.

### 3. Creating Objects

Objects are one of the eight fundamental types in JavaScript (String, Number, Boolean, Null, Undefined, Object, BigInt, and Symbol). They are a collection of properties where each property has a key and value. While values can be any of the JavaScript types, property keys are always strings. If you define a property with a non-string key, it will first be *converted to a string*.

```js
// Object literal syntax
let myObject = {};

myObject[false] = "one"
myObject[7] = "two"
myObject[[1, 2, 3]] = "three"

Object.keys(myObject); // ["7", "false", "1,2,3"]

myObject["false"]  // "one"
myObject["7"]      // "two"
myObject["1,2,3"]  // "three"
```

#### 3.1 Property Access

When dealing with objects, we are basically doing either one of two things: *setting a property* or *accessing a property*. We do both operations through the property key by using bracket notation or dot notation.

```js
myObject["foo"] = "bar";
myObject.foo     // "bar" using dot notation
myObject["foo"]  // "bar" using bracket notation
```

Dot notation is also called **member access notation**, while bracket notation is called **computed member access notation**. The main difference between the two is that bracket notation can take any UTF-8-compatible string as the key, while member access notation requires valid variable names. Most importantly, computed member access notation can be computed on the fly -- *any expression between the brackets gets evaluated as a string and used to reference the property*.

```js
myObject["a-key"] = 'four';

myObject.a-key // SyntaxError (a-key is not a valid variable name)
myObject["a-key"] // 'four'
myObject["a" + "-" + "key"] // 'four'
```

#### 3.2 Property Existence

If we *access a non-existent property on an object*, we get `undefined`. However, we also get the same value when we try to access a property that is explicitly set to `undefined`.

```js
Object.keys(myObject) // [ '7', 'false', '1,2,3', 'a-key' ]
myObject[undefinedKey] = undefined

myObject.undefinedKey // undefined
myObject.missingKey  // undefined
```

The `in` operator as well as the `hasOwnProperty()` method allow us to check for property existence in an object. Both methods check if a property exists in an object. If it does, `true` is returned, and `false` otherwise.

```js
Object.keys(myObject)  //  [ '7', 'false', '1,2,3', 'a-key' ]

"false" in myObject // true
"true" in myObject // false

myObject.hasOwnProperty('7') // true
myObject.hasOwnProperty('8') // false
```

Another *indirect way of checking for property existence* is to enumerate the properties of an object via `Object.keys` or `Object.getOwnPropertyNames`. Both return an array of the object’s properties. The difference is that `Object.keys` *returns an array of enumerable properties* while `Object.getOwnPropertyNames` *returns all properties* regardless if they’re enumerable or not.

```js
// `Object.keys()` returns an array of the object's enumerable properties.
Object.keys(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]

// `Object.getOwnPropertyNames()` returns an array of all properties regardless if they're enumerable or not.
Object.getOwnPropertyNames(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
```

#### 3.3 Property Existence Operator/Method Table

Operator/Method                | Own Property | Prototype Chain | Enumerable | Non-Enumerable
-------------------------------|--------------|-----------------|------------|---------------
`in`                           | Yes          | Yes             | Yes        | Yes
`hasOwnProperty()`             | Yes          | No              | Yes        | Yes
`Object.getOwnPropertyNames()` | Yes          | No              | Yes        | Yes
`Object.keys()`                | Yes          | No              | Yes        | No

#### 3.4 Property Existence Examples

```js
let obj = {
  key1: "value1",
  key2: "value2",
}

// `Object.keys` is good for iterating over enumerable properties
let keys = Object.keys(obj)
console.log(keys) // =>  [ 'key1', 'key2' ]

// `hasOwnProperty`
console.log(obj.hasOwnProperty("key1")); // => true
console.log(keys.hasOwnProperty("length")); // => true (because `keys` is an array)
console.log(obj.hasOwnProperty("hasOwnProperty")); // => false

// `Object.getOwnPropertyNames` will return non-enumerable properties too
console.log(Object.getOwnPropertyNames(obj)); // =>  [ 'key1', 'key2' ]
console.log(Object.getOwnPropertyNames(keys)); // =>  [ '0', '1', 'length' ]

// `in`
console.log("key1" in obj); // => true
console.log("length" in keys); // => true
console.log("hasOwnProperty" in obj); // => true
```

### 4. Object Factories (Factory Functions)

One way to *automate the creation of objects* is to use the **factory function pattern**. A factory function returns an object with a particular set of methods and properties. The methods remain the same across the objects, while the property values can be customized by providing them as arguments. Factory functions instantiate and return a new object in the function body. They let us create new objects based on a predefined template.

#### 4.1 Advantages and Disadvantages of Factory Functions

- Advantages
  1. Reuse code (reduces repetitive code)
  2. Create objects that represent data of a specific type
  3. Allows for self-referential methods using the `this` keyword

- Disadvantages
  1. There is no way to inspect an object and learn whether we created it with a factory function.
     - That effectively *makes it impossible to identify the specific "type" of the object*; at best, you can only determine that an object has some specific characteristics.
     - Not compatible with the `instanceof` operator to determine type.
  2. Every object created with a factory function has a full copy of all the methods. That's **redundant**, and it can place a heavy load on system memory.

Using `Object.getPrototypeOf` would return `{}`, so you can't really figure out what function you used to construct instance objects.

#### 4.2 Factory Function Example 1 - `createCar`

```js
function createCar(make, model, year) {
  return {
    make, // Same as "make: make:
    model,
    year,
    started: false,

    start() { // Same as "start: function() {}"
      this.started = true;
    },

    stop() {
      this.started = false;
    },
  };
}

let car1 = createCar('Tesla', 'X', 2022);
let car2 = createCar('Toyota','Prius', 2010);
```

The `createCar` function takes three arguments and returns a car object with four properties and two methods. With this `createCar` **object factory**, you can create as many car objects as your program needs. In this case, `createCar` handles the similarities, while each invocation specifies the differences with arguments.

Factory functions give us the ability to create objects of the same type by merely calling a function. Entities that are common to multiple objects, such as the `start` and `stop` methods, get declared in one place. On the other hand, *arguments are passed to the factory function* to distinguish one object from another, such as the `make`, `model`, and `year`. Some entities, like `started`, don't fall easily into either category, but that's not important here.

**Compact Method Syntax (aka concise syntax)** - omits the `:` and the `function` keyword and uses parenthesis to denote a method.

#### 4.3 Factory Function Example 2 - `createPerson`

```js
// longer version of creating a factory function
function createPerson(firstName, lastName = '') {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;

  person.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };

  return person; // Remember to return the created object!
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

john.fullName(); // 'John Doe'
jane.fullName(); // 'Jane'
```

We can simplify that somewhat by *returning an object literal*:

```js
function createPerson(firstName, lastName = '') {
  return {
    firstName,
    lastName,

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
```

#### 4.4 Factory Function Example 3 - `createRectangle`

```js
function createRectangle(length, width) {
  return {
    width,
    length,

    getLength() {
      return this.length;
    },

    getWidth() {
      return this.width;
    },

    getArea() {
      return this.length * this.width;
    },
  };
}

let rectangle = createRectangle(10, 5);
rectangle.getArea() // 50
```

#### 4.5 Factory Function Example 4 - `createToy` and `createCar` with Code Reuse

```js
function createToy(name, color) {
  return {
    name,
    color,

    move() {}
  }
}

function createCar(name, color) {
  let car = createToy(name, color);
  car.drive = function() { console.log(`Driving`) }
  car.fly = function() { console.log(`Flying`) }
  return car;
}

let lambo = createCar('Lambo', 'black');
lambo.fly(); // Flying
```

## Functions and Execution Context

### 1. Function Declarations, Function Expressions, Hoisting, Anonymous Functions, Arrow Functions, First-Class Functions

Function definitions that are the first thing on a line are known as **function declarations**. On the other hand, **function expressions** are function definitions that are part of an expression.

Take a look at the following function definition.

```js
// function declaration
function prompt(message) {
  console.log(`=> ${message}`);
}
```

Functions defined with this syntax *can be invoked before the declaration in the program*:

```js
prompt('How are you today?');

function prompt(message) {
  console.log(`=> ${message}`);
}
```

This code works since *the JavaScript engine runs our code in two passes*. During the first pass, it does some preparatory work, while the second executes the code. One action that occurs during the first pass is called **hoisting**; *the engine effectively moves function declarations to the top of the program file in which they're defined, or the top of the function in which they are nested.* The result is that the above code acts as though you wrote it like this:

```js
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('How are you today?');
```

#### 1.1 Hoisting

Note that you'll never see this hoisted code when working with JavaScript. *Hoisting is an internal step performed by the engine*; it doesn't move any code around. However, it's useful to think of hoisting in this way, so long as you understand that your code is not changed.

 For instance, the code in the above example shows `prompt` as a function declaration; the next example shows `foo` as a function expression: it is *not* a declaration.

```js
(function foo() {

})
```

You can test whether a function definition is a function declaration by trying to call it before the declaration. You can't call a function expression until after the expression is evaluated:

```js
// NOTE: Run this code from a file; don't use the REPL

bar();
function bar() {
  console.log("this is bar");
}
// => 'this is bar'

foo();
const foo = function() {
  console.log("this is foo");
};
// ReferenceError: Cannot access 'foo' before initialization
```

Typically, we assign a function expression to a variable or object property, pass it to another function, or return it to a calling function. For instance:

```js
let prompt = function() {}; // Assign to a variable

[1, 2, 3].forEach(function(elem) { // pass to another function
  console.log(elem);
});

function makeIncrementer(increment) {
  return function(value) { // return to caller
    return value + increment;
  }
}
```

#### 1.2 Anonymous Functions

Notice that we can define function expressions without giving them a name. You may argue that `prompt` is the name of the function we defined on line 1, but that's not the case: instead, we've *assigned an unnamed function to the prompt variable*. Such unnamed functions are called **anonymous functions**. Anonymous functions are commonplace in JavaScript code. The callback functions for array methods like `forEach` and `map` are often anonymous functions.

```js
let squaredNums = [1, 2, 3].map(function(num) {
  return num * num;
}); // => [1, 4, 9]
```

Function expressions don't have to be anonymous. *You can name a function expression*:

```js
let squaredNums = [1, 2, 3].map(function squareNum(num) {
  return num * num;
}); // => [1, 4, 9]
```

The main advantage of naming a function expression occurs when the function throws an error (raises an exception). If the function has a name, the stack trace uses that name to help you determine where the error occurred. Without the name, JavaScript merely reports the location as "anonymous."

The function name given to a function expression is **not visible** in the scope that includes the function expression.

```js
let foo = function bar() {};
foo();         // This works
bar();         // This does not work (line 3)
```

`foo` is a local variable that contains a reference to the function, so we can invoke the function using `foo()`. However, the function name, `bar`, is not in scope on line 3, so `bar()` does not work.

The function name on a function expression is visible inside the function, which is useful when working with recursive functions.

#### 1.3 Arrow Functions

*Arrow functions are always function expressions*. We often pass them around or assign them to variables or properties. Also, *arrow functions are always anonymous*: there's no way to define a named arrow function. Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments and return values.

#### 1.4 First-Class Functions

**First-class functions** or **first-class objects** refers to the fact that functions in JavaScript are **values** that we can assign to variables and properties, pass them to other functions, or return them from another function.

JavaScript has first-class functions that have the following characteristics:

- You can add them to objects and execute them in the respective object's context.
- You can remove them from their objects, pass them around, and execute them in entirely different contexts.
- They're initially unbound but dynamically bound to a context object at execution time.

Functions of all kinds, including declared functions, can be treated as values:

```js
function say(words) {
  console.log(words);
}

let speak = say;

speak('Howdy!'); // logs 'Howdy'
```

In this example, we declare a function `say()` and then assign it to the variable `speak`. We then invoke the function using `speak` as a handle. Note that we can still call the function using `say` as well -- both `say` and `speak` refer to the same function.

Here's another example:

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum);
// Number: 1
// Number: 2
// Number: 3
```

In this case, we're passing the function `logNum()` as an argument to the `forEach` method, which calls it three times. With each invocation of `logNum`, `forEach` passes it one of the array elements as an argument.

Notice that *we don't use invocation syntax*, `()`, when passing `logNum` as an argument to `forEach`. If we did, it would throw a `TypeError` exception since `forEach` expects a function; instead of passing a function, though, we would be passing `undefined`, the return value of `logNum()`.

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum());
// Uncaught TypeError: undefined is not a function
```

The takeaway is that you *should not invoke functions when you want to use them as* **values**. Use invocation only when you need to *run* the code in the function.

Let's return to the following example:

```js
function logNum(num) {
  console.log('Number: ' + num);
}

[1, 2, 3].forEach(logNum);
// Number: 1
// Number: 2
// Number: 3
```

This code is functionally identical to the following code:

```js
[1, 2, 3].forEach(function logNum(num) {
  console.log('Number: ' + num);
});
```

The only difference is that we're *using a function expression* instead of a variable.

We can also *use an arrow function* to do the same thing:

```js
[1, 2, 3].forEach(num => {
  console.log('Number: ' + num);
});
```

In this case, though, the function is anonymous. The results, however, are identical.

The point we want you to remember is that you can *treat any function as you would any other JavaScript value: remove the invocation syntax, and you've got an expression whose value is a function*.

##### 1.4.1 `typeof` Function Value

Since functions are first-class values in JavaScript, and all values in JavaScript have a type, functions must also have a type. Right? That's correct! Let's use the handy `typeof` operator to determine the type of a function value:

```js
let myFunc = function() {};
console.log(typeof myFunc); // 'function'
```

### 2. Higher Order Functions

The fact that JavaScript treats functions as values means that we can have a special kind of function in our programs: a **higher-order function**. A higher-order function is a function that has *at least one of the following properties*:

1. It takes a function as an argument.
2. It returns a function.

All JavaScript functions are first-class values. Therefore, all higher-order functions are also first-class values.

#### 2.1 Higher Order Functions that Accept Functions as Arguments

We've seen many examples of functions that have the first property. Specifically, array methods like `forEach`, `map`, `filter`, and `reduce` each take a function argument.

Let's pretend that we don't have a `map` method on JavaScript arrays. If we want to implement some code that squares all the elements of an array, we'd probably come up with something like this:

```js
function mapNumsToSquares(num) {
  let squaredArray = [];

  for (let index = 0; index < nums.length; index += 1) {
    let current = nums[index];
    squaredArray.push(current * current); // line 6
  }

  return squaredArray;
}
```

This approach is valid, and you'll see functions like this in languages that don't have first-class functions (nor the closely related concept of lambdas). However, squaring the numbers in an array almost certainly won't be the only type of mapping you'll need in your application. Suppose that we need another function that uppercases all the elements in an array of strings. The solution may look like this:

```js
function uppercaseStrings(strings) {
  let capStrings = [];

  for (let index = 0; index < strings.length; index++) {
    let current = strings[index];
    capStrings.push(current.toUpperCase()); // line 6
  }

  return capStrings;
}
```

The only significant difference between these two functions is line 6 of each function where we either square a number or uppercase a string; everything else follows the same general structure:

- Declare and initialize the result array.
- Iterate over the input array.
  - Add mapped values to the result.
- Return the result.

Can we abstract away the similar structure of the two functions and leave the specific mapping operation up to the function's caller to decide? That's what `map` does for us: *it abstracts away the mechanics of mapping an array and leaves the details for the developer to provide at runtime.* It does that by providing a function as an argument. The result is much more powerful and versatile:

```js
arrayOfNums.map(num => num * num);
arrayOfStrings.map(string => string.toUpperCase());
```

The `map` method, along with several other array methods, is a higher-order function since it takes another function as an argument.

#### 2.2 Higher Order Functions that Return a Function

You can think of a function that returns another function as a function factory: it creates and returns a new function. Typically, the function factory uses the arguments you pass to it to determine the specific job performed by the function it returns.

To truly appreciate how useful this is, you need to understand closure; we're not ready for that, though -- we'll discuss the topic later. For now, we can use a contrived example to demonstrate the mechanics of functions returning other functions. Let's use a simple `greeter` function as an example, one that can log greetings in multiple languages:

```js
function greet(language) {
  switch (language) {
    case 'en':
      console.log('Hello!');
      break;
    case 'es':
      console.log('Hola!');
      break;
    case 'fr':
      console.log('Bonjour!');
  }
}

greet('fr'); // logs 'Bonjour!'
```

This implementation works, but if we're using a particular language over and over, we need to provide the language string every time. Instead of a `greet` function, let's implement a greeter factory that lets us create a greeter function for a given language.

```js
function createGreeter(language) {
  switch (language) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Hola!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let greeterEs = createGreeter('es');
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'
greeterEs(); // logs 'Hola!'

let greeterEn = createGreeter('en');
greeterEn(); // logs 'Hello!'
```

This code doesn't provide a significant improvement or convenience for the developer, but it does illustrate how we might use a function that returns another function in our code.

### 3. The Global Object

JavaScript creates a **global object** when it starts running. It serves as the **implicit execution context** for function invocations. In Node.js, the global object is the object named `global`; in the browser, it's the `window` object.

The global object is available everywhere in your program and houses important global properties. In the previous course, we talked about **global values** such as `Infinity` and `NaN`, and **global functions**, such as `isNaN` and `parseInt`. All these entities are properties of the global object.

In your console, you can look at the global object to examine those properties.

```sh
> global.isNaN   // [Function: isNaN]
> global.Infinity // Infinity
```

Note: don't use `isNaN` in your code. Use `Number.isNaN` instead. The bare `isNaN` function has some odd behavior:

```sh
Number.isNaN('I am not a number'); // false - this is a correct value
isNaN('I am not a number');  // true - string gets coerced to NaN
```

As with other JavaScript objects, *you can add properties to the global object at any time*:

```sh
// in Node
> global.foo = 1
> global.foo       // 1
```

```sh
// in a browser
> window.foo = 1
> window.foo       // 1
```

#### 3.1 The Global Object and Undeclared Variables

Whenever you assign a value to a variable without using the `let`, `const`, or `var` keywords, *the variable gets added to the global object as a property*.

```js
foo = 'bar';
global.foo; // => 'bar' (in Node)
window.foo; // => 'bar' (in a browser)
```

Without a keyword, *the variable gets added to the global object as a property*. You can even access such variables without using the global object as the caller:

```js
foo = 'bar';
foo; // line 2 => 'bar'
```

Whenever you try to access a variable for which there are no local or global variables with the variable's name, JavaScript looks at the global object and looks for a property with that name. In this example, since there are no local or global variables named `foo`, JavaScript looks in the global object and finds the `foo` property. As a result, line `2` is identical to `global.foo`; *it returns the value of the property `foo` from the global object*.

We discuss the global object here since you need to know where JavaScript gets all those global entities like `NaN`, `Infinity`, and `setTimeout`. It's not very often that you'll need to modify the global object, but you'll sometimes use it to set properties in Node that you need in multiple modules.

### 4. Implicit and Explicit Execution Context

The execution context -- or **context** -- is a concept that refers to the **environment** in which a function executes. In JavaScript, it most commonly refers to the current value of the `this` keyword, sometimes called its `this` binding. When we talk about the execution context of a function or method call, we're talking about the value of `this` when that code executes. The context depends on *how the function or method was invoked*, not on where the function was defined.

There are two basic ways to set the context when calling a function or method:

1. **Explicit**: The execution context that you set explicitly.

2. **Implicit**: The execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

Setting the execution context is also called **binding** `this` or **setting the binding**.

All JavaScript code executes within a context. The top-level context is the `window` object in browsers and the `global` object in Node. All global methods and objects, such as `parseInt` and `Math`, are properties of `window` or `global`.

Regular function calls use the global object as their execution context, while method calls use the calling object as their context. You can override this behavior by setting the execution context explicitly with either `call` or `apply`.

The mechanics of context binding is an essential but difficult concept. Most difficulties arise from forgetting that *JavaScript does not use lexical scoping rules to determine the binding*. For instance, if you use `this` inside a method of `obj`, you expect that `this` refers to `obj`. However, that's not always the case. It's important to remember that the rules for `this` are entirely different from the rules for variable scope. While a variable's scope is determined by where you write the code, `this` *depends on how you invoke it*.

#### 4.1 Function Execution Context (Implicit)

Every JavaScript function call has an execution context. In other words, the `this` keyword is available to every function in your JavaScript program. Every time you call that function, *JavaScript binds some object to `this`*.

Let's define a function and use `this` within it to see what happens:

```js
function foo() {
  console.log("this refers to: " + this);
}

foo();
// this refers to: [object global]
```

Within a regular function call (e.g., `foo()`), JavaScript sets the binding for `this` to the global object. (Remember: in Node, the global object is called `global`; in a browser, it is `window`.) That means that when you use `this` inside the function, it refers to the global object. If you use `this` to access or modify properties, you will access or modify properties on the global object:

```js
function foo() {
  this.bar = 'bar';
}

foo();
global.bar; // 'bar'
```

That makes sense at some level. Since all function calls have an execution context, and since *a regular function call does not provide an explicit context*, JavaScript supplies an implicit context: the global object. We say that this execution context is **implicit** since the function invocation doesn't supply an explicit alternative.

#### 4.2 Strict Mode and Implicit Context

When strict mode is enabled, the implicit `this` is assigned to `undefined` instead of the global object:

```js
"use strict"; // the quotes are required

function foo() {
  console.log("this refers to: " + this);
}

foo(); // `this` refers to: undefined
```

Strict mode shows up in JavaScript classes and in **Coderpad**, the environment we use for assessment interviews.

#### 4.3 Method Execution Context (Implicit)

When you call a method that belongs to an object, the execution context inside that method call is *the object used to call the method*. We call that **method execution context**. Method execution syntax is usually said to provide an implicit context; we're using an explicit object to call the method, but JavaScript is interpreting that object as the implicit context. For this reason, we usually say that *method calls provide an implicit execution context*.

```js
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar();
// `foo` is the implicit execution context for `bar`
// => returns { bar: [Function: bar] }
```

Remember that the context is determined solely by how you call the function or method. Here, `foo.bar()` is considered a method call since we *call it as a method*; that is, we *use the method call syntax `object.method()`*. Since JavaScript functions are first-class objects, `bar` can be called in other ways that change the context:

```js
let baz = foo.bar;
baz();
// => Object [global] {...}
// `baz` called as a standalone function
```

In this code, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object. What should `baz()` log then?

Since `baz` references a method of the `foo` object, you may think that its execution context must be `foo`. That's wrong though: as we've repeated several times, the execution context is determined entirely by how a function or method is called. Since we're *calling `baz` as a standalone function*, its execution context is the global object, not the `foo` object.

#### 4.4 `new` and Implicit Execution Context

Function and method calls *provide an implicit context*. For a function call, the implicit context is the global object; for a method call, it's the object used to call the method.

A constructor call with `new` is a third way to *provide an implicit execution context*. When you call a function with `new`, its implicit context is the **new object**.

Call        | Where          | Example
------------|----------------|----------------------------
Function    | global object  | `foo()`
Method      | calling object | `obj.foo()`
Constructor | new object     | `let object = new Object()`

### 5. Hard-binding Functions with Contexts

*You can provide an explicit context to any function or method*, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even `null` -- as the execution context for any function or method. There are two main ways to do that in JavaScript: `call` and `apply`.



### 6. Dealing with Context Loss

### 7. Execution Context Problems

#### 7.1 Example 1


## Object Creation and Code Reuse Patterns

### 1. Object Prototypes

### 2. Object Creation with Prototypes

### 3. Constructors

### 4. Constructors with Prototypes

### 5. Sub-typing with Constructors and Prototypes

### 6. Built-in Constructors

### 7. ES6 Classes

### 8. Code Reuse with Mixins

### 9. Polymorphism

OLOO?