# Object Oriented Programming with JavaScript (20220623 15:43 Version)

## Topical Outline

I. Object Oriented Programming

1. What is OOP?
   1.1 Advantages and Disadvantages of OOP
2. Encapsulation
3. Creating Objects
   3.1 Property Access
   3.2 Property Existence
4. Factory Functions
5. Collaborator Objects

II. Functions and Execution Context

1. Functions Declarations, Function Expressions, Hoisting, Anonymous Functions, Arrow Functions, First-class Functions
2. Higher Order Functions
3. The Global Object
4. Execution Context

## I. Object Oriented Programming

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

### 5. Collaborator Objects

Objects that *help provide state within another object* are called **collaborator objects**, or more simply **collaborators**. Objects *collaborate* with other objects by using them as part of their **state**. We say that two objects have a **collaborator relationship** *if one of them is part of the state of the other*. Collaborator objects let you chop up and modularize the problem domain into cohesive pieces. They play an important role in modeling complicated problem domains in OO programming.

Collaborator objects play an important role in object-oriented design; they *represent the connections between the different classes* in your program. When working on an object-oriented program, be sure to consider what collaborators your objects need and whether those associations make sense, both from a technical standpoint and in terms of modeling the problem your program aims to solve.

#### 5.1 Example 1

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat, // <-- `cat` collaborator object stored in the `pet` property of the `pete` object

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`); // line 19
  },
};

pete.printName();
// => My name is Pete!
// => My pet's name is Fluffy
```

The `pete` object has the collaborator object `cat` stored in its `pet` property. The `pete` object and the object referenced by its `pet` property work together. When we need to access the `pet` object or have it perform a behavior, we can use `pete.pet` to access and use the object's properties. For instance, on line 19, the `pete` object collaborates with the `cat` object (via `this.pet`) to access the `cat`'s name.

#### 5.2 Example 2 - Using an Array

We often talk of collaborators in the context of custom objects like `pet`, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well.

Let's now develop our program further and change the implementation to let Pete have many pets through an array of `pet` objects.

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pets: [],
};

pete.pets.push(cat);
pete.pets.push(dog);
```

#### 5.3 Example 3 - Assessment Question Variation

Examine the code below:

```js
let sohee = {
  name: 'Sohee',
  children: [],
};

let omi = {
  name: 'Omi',
  eat() {
    console.log(`Cowboy spaghetti`);
  },
};

let sungoh = {
  name: 'SungOh',
  eat() {
    console.log(`Crunchy penne`);
  },
};

sohee.children.push(omi)
sohee.children.push(sungoh);
```

- Describe the relationship between the `sohee` object and the `omi` and `sungoh` objects.
  - The `omi` and `sungoh` objects are collaborators with the `sohee` object.

- Implement a method `childrenEat`, in the `sohee` object. The method should invoke the `eat` method of all the children for that object.

```js
let sohee = {
  name: 'Sohee',
  children: [],

  childrenEat() {
    return this.children.forEach(child => child.eat());
  }
}

sohee.children.push(omi)
sohee.children.push(sungoh);

sohee.childrenEat();
// Cowboy spaghetti
// Crunchy penne
```

## II. Functions and Execution Context

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

### 4. Execution Context

The execution context -- or **context** -- is a concept that refers to the **environment** in which a function executes. In JavaScript, it most commonly refers to the current value of the `this` keyword, sometimes called its `this` binding. When we talk about the execution context of a function or method call, we're talking about the value of `this` when that code executes. The context depends on *how the function or method was invoked*, not on where the function was defined.

You can *access the properties and methods of an object from within a method* using the `this` keyword. The `this` keyword lets us refer to the properties and methods of the object. Inside the methods, the `this` keyword lets us refer to the properties and other methods of the object. So, the `this` keyword is basically a dynamic pointer whose value depends on where it's being referenced and how.

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

#### 4.2 What is `this`?

The value of `this` is the current execution context of a function or method. The value of `this` *changes based on how you invoke a function*, not how you define it.

The JavaScript `this` keyword refers to the object it belongs to. It has different values depending on where it is used:

- Alone, `this` refers to the **global object**.
- In a function, `this` refers to the **global object**.
- In a function, in strict mode, `this` is `undefined`.
- In a method, `this` refers to the calling object.
- Method calls like `call()`, and `apply()` can refer `this` to any object.
- In an event, `this` refers to the **element** that received the event.

#### 4.3 When does JavaScript bind an object to `this`?

- It binds the execution context when the function is executed using **function call syntax**, eg., `bar()`.
  - A function that is invoked using function call syntax receives the **global** object as its execution context.

- It binds the execution context when the function is executed using **method call syntax**, e.g., `foo.bar()`.
  - A function that is invoked using method call syntax receives the **calling** object as its execution context.

- It binds the execution context when the function is executed by either `call` or `apply`.
  - Both `call` and `apply` set the execution context for a function invocation.

#### 4.4 Function Execution Context and `this` Example

Thus far in our example, we refer to the object from inside the methods by directly using the variable name, `raceCar`. Suppose we change the variable name or pass the object to a function that refers to its arguments by a different name. In that case, calling a method with the original variable name will *throw a reference error*. We need some way to refer to the object that contains a method from other methods in that object. The keyword `this` provides the desired functionality:

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};
```

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

#### 4.5 Function Invocation and Method Invocation

**Function invocations** (e.g., `parseInt(numberString)`) rely upon implicit execution context that resolves to the **global** object.

**Method invocations** (e.g., `array.forEach(processElement)`) rely upon implicit context that resolves to the **object that holds the method**.

#### 4.6 Code Snippet Example 1

Examine the two code examples below:

Example 1

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce();
```

Example 2

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce.call(paul); // line 12
```

For each example, identify the execution context of `introduce`. Explain how you determined the execution context, and outline the difference between the execution context in the two examples.

#### 4.6 Example 1 Answer

For example 1, the execution context of `introduce` is the `sarah` object. Here, `sarah.introduce()` uses method invocation syntax whose implicit execution context is the calling object. Thus, the `this` keyword is set to the `sarah` object.

For example 2, the execution context of `introduce` is the `paul` object. Here, the `call` method is used to explicitly bind the `paul` object to the invocation on line 12. Thus, the `this` keyword references the `paul` object and not the `sarah` object.

#### 4.7 Code Snippet Example 2

Examine the two code examples below:

Example 1

```js
let omi = {
  game: 'Roblox',
  play() {
    console.log(`My favorite game is ${this.game}`);
  }
}

let sungoh = {
  game: 'Cooking Craze';
};

omi.play(); // My favorite game is Roblox
```

Example 2

```js
let omi = {
  game: 'Roblox',
  play() {
    console.log(`My favorite game is ${this.game}`);
  }
}

let sungoh = {
  game: 'Cooking Craze';
};

omi.play.call(sungoh); // My favorite game is Cooking Craze
```

For each example, identify the execution context of `play`. Explain how you determined the execution context, and outline the difference between the execution context in the two examples.

#### 4.7 Example 2 Answer

For example 1, the execution context of the `play` method is the `omi` object. Here, `omi.play()` uses method call syntax whose implicit execution context is the calling object, `omi`. Thus, the `this` keyword references the `omi` object.

For example 2, the execution context of `play` is the `sungoh` object. Here, the `call` method is used to explicitly bind the `sungoh` object to the invocation on the last line. Thus, `this` of `this.game` is assigned to the `game` property on the `sungoh` object and logs `'My favorite game is Cooking Craze'`.

#### 4.8 Code Snippet Example 3

Snippet 1

```js
let obj = {
  foo() {
    return this;
  }
};

console.log(obj.foo());
```

Snippet 2

```js
let obj = {
  foo() {
    return this;
  }
};

let foo = obj.foo;
console.log(foo());
```

Snippet 3

```js
let obj = {
  foo() {
    return this;
  }
};

let obj2 = {
  bar: 42,
  foo() {
    console.log(this.bar);
  }
};

console.log(obj.foo.call(obj2));
```

What does each snippet log, and why does it log what it does?

#### 4.8 Example 3 Answer

Snippet 1 logs `{ foo: [Function: foo] }`, a reference to the `obj` object. Here, `obj.foo()` uses method invocation which implicitly sets the execution context to the calling object. Thus, the `this` keyword references the `obj` object.

Snippet 2 logs the global object in Node. Assigning the `foo` variable to the return value of `obj.foo` strips the `foo` method of its execution context. On the last line, `foo` is invoked using function invocation. Thus, its implicit execution context is set to the global object.

Snippet 3 logs `{ bar: 42, foo: [Function: foo] }`, a reference to the `obj2` object. On the last line, the `call` method is used to explicitly bind the `foo` method to the `obj2` object.

#### 4.9 Code Snippet Example 4

What does the following code do? Explain why it does that.

```js
let obj = {
  a: 'Freaky',
  b: 'Friday',
  bar: {
    a: 'Totally',
    b: 'Awesome',
  },
  foo: function() {
    return `${this.a} ${this.b}`;
  },
};

let qux = obj.foo.bind(obj.bar); // line 13
console.log(qux());
```

#### Example 4 Answer

The code logs `'Totally Awesome'`. On line 13, the `qux` variable is assigned to the return value of hard-binding the `foo` method's context using `bind` to the `obj.bar` object. Thus, when `qux` is invoked on line 14, its execution context is the `bar` object because it has been permanently bound.

### 5. Hard-binding Functions with Contexts

*You can provide an explicit context to any function or method*, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even `null` -- as the execution context for any function or method. There are two main ways to do that in JavaScript: `call` and `apply`.

#### 5.1 `call`, `apply` and `bind`

The `call` and `apply` methods *invoke a function with an explicit execution context*.  To pass arguments to a function with `call`, the arguments should be specified as separate arguments.

The `bind` method *returns a new function that permanently binds a function to a context*.

Arrow functions are permanently bound to the execution context of the enclosing function invocation. When defined at the top level, the context of an arrow function is the global object.

#### 5.2 Explicit Execution Context with `call`

The `call` method calls a function with an explicit execution context.

```js
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42
```

We can call the `logNum` function and tell it to use `obj` as its execution context. When we use `call` in this manner, `this` refers to the `obj` object inside the `logNum` function. The first argument to `call` *provides the explicit context for the function invocation*. The context doesn't get determined until we invoke the function; in this case, we're using `call` to invoke it and set the context.

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

Those last two code examples aren't identical, however. In the second example, we add a new property to the `obj` object; *we don't mutate the object when we use `call`.*

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

// We mutate `obj2` when we give it a `logNum` property that it didn't have before.
console.log(obj2) // => { num: 42, logNum: [ Function: logNum]}
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

We want to call `sumNum` in such a way that it updates `obj.num`. Fortunately, the `call` method *lets us pass arguments as a comma-separated list to our function*:

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

printLine.call(iPad, 1, ';');  // => 1: iPad, 400 dollars;
printLine.call(kindle, 2, '.'); // => 2: Kindle, 300 dollars.
```

The general syntax for `call` is as follows:

```js
someObject.someMethod.call(context, arg1, arg2, arg3, ...)
```

#### 5.3 Explicit Execution Context with `apply`

The apply method works in much the same way as call. The only difference is that *apply uses an array* to pass any arguments to the function. Here's the general syntax:

```js
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])
```

`apply` is handy when you have the list of arguments in an array. With modern JavaScript (ES6 and higher), `apply` isn't needed since *you can use `call` in conjunction with the spread operator to accomplish the same thing*:

```js
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
```

#### 5.4 Hard Binding Functions with Contexts with `bind`

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

In this example, we don't call the function immediately as we do when using `call` and `apply`, Instead, *bind returns a new function*. The new function is **permanently** bound to the object passed as bind's first argument. You can then pass that method around and call it without worrying about losing its context since it's *permanently bound* to the provided object.

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

baz.call(object2);  // "hello world" - `this` still refers to `object` from the previous code snippet
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

`bind`'s context is the original function, and it *returns a new function that calls the original function with the context supplied to `bind` as its first argument*. This code also shows why *the binding makes permanent changes* -- no matter what you do to the returned function, you can't change the value of `context`.

It's important to remember that `bind` *returns a new function*, and that new function is permanently context-bound to the object provided as the first argument to `bind`. The original function isn't changed and doesn't have its context changed.

It's also important to understand that `bind` does not contradict our repeated statement that context is determined entirely based on how you call a function or method, not where you call it or how you define it. Technically, `bind` defines a new function. However, when we call that function, its implementation -- as shown above -- calls the original function using `apply`. Thus, it's still the "how" of the call that determines the context, not the definition or location.

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

In this example, we bind the `greeting` method of the `greetings` object to the `spanishWords` object and assign the result to `spanishGreeter`. When we call `spanishGreeter`, JavaScript uses `spanishWords` as the context. Thus, `spanishGreeter('Jose')` will log something like `'Buenas tardes, Jose'` instead of `'Good afternoon, Jose'`.

In this assignment, we saw a third way to specify the execution context. Unlike `call` and `apply`, though, `bind` *returns a new function that is permanently bound to the context that's provided to bind as the first argument*. You cannot alter the execution context of the resulting function, even if you use `call`, `apply`, or try calling `bind` a second time.

#### 5.5 Code Example 1

What does the following code do? Explain why it does that.

```js
let obj = {
  a: "hello",
  b: "world",
  bar: {
    a: "completely",
    b: "different",
  },
  foo: function() {
    return `${this.a} ${this.b}`;
  },
};

let qux = obj.foo.bind(obj.bar); // line 13
console.log(qux()); // line 14
```

#### 5.5 Example 1 Answer

The code logs `'completely different'`. On line 13, the `qux` variable is assigned to the return value of hard-binding the `foo` method's context using `bind` to the `obj.bar` object. `bind` returns a new function that is permanently bound to the context that's provided to bind as the first argument. Thus, when `qux` is invoked on line 14, its execution context is the `bar` object because `bar` has been permanently bound to the `foo` method.

### 6. Dealing with Context Loss

Let's discuss how functions and methods can "lose context." We've used quotes since functions don't lose their execution context in reality -- they always have one, but it may not be the context that you expect. If you understand how execution context is determined, you shouldn't be surprised by the value of `this` in any given scenario. That said, how a specific context is arrived at isn't always intuitive. Even when you understand the rules, the context for any given invocation may surprise you.

#### 6.1 Problem 1 - Method Copied from Object

When you take a method out of an object and execute it as a function or as a method on another object, *the function's context is no longer the original object.* For instance:

```js
let john = {
  firstName: 'John',
  lasName: 'Doe',
  greetings() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};

john.greetings(); // Context is `john`
let foo = john.greetings; // Strips `greetings` method from the `john` object
foo(); // Context is now the global object.

// Could use `foo.call(john)` to restore the original context.
```

You could use `foo.call(john)` to restore the original context, but suppose you don't execute the function right away or you need to pass it to another function for execution? By the time `foo` gets called, `john` may be out of scope. For example:

```js
function repeatThreeTimes(func) {
  func(); // Can't use `func.call(john)`; `john` is out of scope. -->`ReferenceError: `john` is not defined
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

#### 6.1 Solution 1 - Accept the Context Object as a Second Parameter

One way to solve this problem is to change `repeatThreeTimes` to accept the context object as a second parameter, then pass the `context` to `repeatThreeTimes` when calling it.

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
      console.log(`hello, ${this.firstName} ${this.lastName}`);
    },
  };

  repeatThreeTimes(john.greetings, john);
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe
```

Some of JavaScript's built-in methods, such as the Array abstraction methods like `forEach`, `map`, and `filter`, use this technique. Such methods take a callback function as an argument and an optional `thisArg` **context object** that gets used as the callback's execution context.

However, it's not always possible to pass a context argument to a function or method; you may not even be able to change the function if, say, it belongs to a third-party library. Besides, it's generally not a good idea to pass a lot of arguments to your functions; the more arguments a function can accept, the harder the function is to use.

#### 6.1 Solution 2 - Hard-bind the Method's Context Using `bind`

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

`bind` has one significant **advantage**: once you bind a context to a function, that *binding is permanent* and does not need to be repeated if it gets called more than once. The **disadvantage** of `bind` is that it is no longer possible to determine the context by looking at the invocation of the final function.

#### 6.2 Problem 2 - Inner/Nested Function Not Using the Surrounding Context

Loss of surrounding context is a common issue when dealing with functions nested within object methods. Here, we'll see how nested functions *suffer from context loss*.

Examine the following code:

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar(); // line 9 `bar` invoked as a standalone function
  },
};

obj.foo();  // => undefined undefined
```

Function or method's execution context depends solely on how you invoke it, not on how and where it's defined. Here, `bar` is *invoked as a standalone function* on line 9. Thus, its execution context is the global object, not the `obj` object that you may have expected.

#### 6.2 Solution 1 - Preserve Context with a Variable in Outer Scope

Use something like `let self = this` or `let that = this` in the outer function. If you define the `self` or `that` variable in the outer scope, you can use that variable and whatever value it contains inside your nested inner function(s).

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

#### 6.2 Solution 2 - Call Inner Functions with Explicit Context (`call` or `apply`)

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

#### 6.2 Solution 3 - Use `bind`

A third approach is to call `bind` on the inner function and *get a new function* with its execution context permanently set to the object.

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

Note that we're calling `bind` on the function expression here, then assigning the returned function to the `bar` variable.

You can also use a function declaration instead of a function expression, but you'll need an extra variable:

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

#### 6.2 Solution 4 - Use an Arrow Function

Arrow functions inherit their execution context from the surrounding context. That means that an arrow function *defined inside another function* always has the same context as the outer function's context:

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

Using arrow functions like this is similar to using `bind` in that you don't have to worry about arrow functions losing their surrounding context. An arrow function, once created, *always has the same context as the function that surrounded it when it was created*. Using arrow functions is the most common these days.

##### 6.2.1 Don't Use Arrow Functions as Methods on an Object

Despite how useful arrow functions are for avoiding context loss, *you should not try to use them as methods on an object*. They don't work as expected.

```js
let obj = {
  a: 5,

  foo: () => {
    console.log(this.a); // line 5
  },
};

obj.foo(); // line 9 => undefined
```

Arrow functions always get the value of `this` from the surrounding context. In the code shown above, it certainly looks like the surrounding context is `obj`, so shouldn't `this` refer to `obj`? Despite appearances and what your logic tells you, that isn't the case.

The surrounding context is, in fact, the `global object`. The reason for that is simple: the `let` statement in this example *is in the program's top-level code*, so its context is the global object. That means that `this` inside the object literal is also the global object, so `this` on line 5 refers to the global object, not `obj`.

When using `node` to execute a file, e.g., `node somefile.js`, the surrounding context is the `module`, not the global object. This can cause a certain amount of confusion when working with node in both REPL and file modes.

You may have noticed that `this` in `obj.foo` is not determined by how the method is called. We call the method on line 9, and we seem to be telling JavaScript to use `obj` as the context. Instead, the context ends up being the global object. That seems to contradict our repeated statements that the context is determined entirely by how a function or method is invoked. That's clearly not the case here; it certainly violates the rule. However, *you won't usually see code like this in practice.*

In general, you should not use arrow functions to write methods. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), "Arrow function expressions are ill suited as methods, and they cannot be used as constructors." The example shown here demonstrates one reason why that is so: it doesn't follow the rules. As long as you don't try to use arrow functions as methods, you can ignore this exception.

#### 6.3 Problem 3 - Functions as Arguments Losing Surrounding Context

Passing functions as arguments can strip them of their intended context object.

Examine this code:

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

In this example, we use the `john` object to call the `greetings` method, with `john` as its context. `greetings`, in turn, calls the `repeatThreeTimes` function with a function argument whose body refers to `this`. `repeatThreeTimes` *calls its argument three times with the global object as the implicit context*. Thus, `this` inside the function passed to `repeatThreeTimes` is the **global object**, not `john`.

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

The code loops over an array and logs some information to the console. The problem, though, is that `forEach` executes the function expression passed to it, so it *gets executed with the global object as context*. Once again, this has the wrong value, and the function doesn't do what we want.

We can use the same solutions we used to solve a similar problem in the previous assignment.

#### 6.3 Solution 1 - Preserve the Context with a Variable in Outer Scope

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

#### 6.3 Solution 2 - Use `bind`

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

#### 6.3 Solution 3 - Use an Arrow Function

```js
let obj = {
  a: 'hello',
  b: 'world',
  foo() {
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

#### 6.4 Solution 4 - Use the optional `thisArg` argument

Some methods that take function arguments allow an optional argument that specifies the context to use when invoking the function. `Array.prototype.forEach`, for instance, has an optional `thisArg` argument for the context. This argument makes it easy to work around this context-loss problem. The array methods `map`, `every` and `some` and others also take an optional `thisArg` argument.

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

#### 6.5 Dealing with Context Loss Summary

- Problem 1 - Method Copied from Object
  - Solution 1 - Accept the `context` object as a second parameter
  - Solution 2 - Hard-bind the method's context using `bind`

- Problem 2 - Inner/nested Function not Using the Surrounding Context
  - Solution 1 - Preserve context with a variable in outer scope
  - Solution 2 - Call inner function with explicit context (`call` or `apply`)
  - Solution 3 - Use `bind`
  - Solution 4 - Use an Arrow Function

- Problem 3 - Functions as arguments losing surrounding context
  - Solution 1 - Preserve context with a variable in  outer scope
  - Solution 2 - Use `bind`
  - Solution 3 - Use an arrow function
  - Solution 4 - Use the optional `thisArg` argument

Passing a function as an argument to another function *strips it of its execution context*, which means *the function argument gets invoked with the context set to the global object*. This problem is identical to the problem with copying a method from an object and using it as a bare function. For instance, the following two code snippets do the same thing:

```js
// Snippet 1
array.forEach(obj.logData);

// Snippet 2
let logData = obj.logData;
array.forEach(logData);
```

In both snippets, the `obj.logData` method gets invoked by `forEach` with the global object as the context, not `obj`.

## III. Object Creation Patterns

### 1. Object Prototypes

A prototype is an object from which other objects inherit properties and methods. In JavaScript this is done with the `[[Prototype]]` property ("internal prototype property").

Every **function** has a `prototype` property that points to an object that contains a `constructor` property. The `constructor` property points back to the function itself. Thus, if `Kumquat` is a constructor function, then `Kumquat.prototype.constructor === Kumquat`.

If the *function is used as a constructor*, the returned object's `[[Prototype]]` will reference the constructor's `prototype` property. That lets us set properties on the constructor's prototype object so that all objects created by the constructor will share them. We call this the **pseudo-classical** pattern of object creation.

### 2. Constructors

**Object constructors**, or **constructors** are another way to create objects in JavaScript.  Superficially, a constructor looks and acts a lot like a factory function: you define a constructor once then invoke it each time you want to create an object of that type.

Constructor functions are meant to be invoked with the `new` operator. They instantiate a new object behind the scenes and let the developer manipulate it through the `this` keyword. *A typical constructor uses the following pattern:*

1. The constructor is invoked with `new`.
2. The JS runtime *creates a new object that inherits from the constructor's prototype object*.
3. The new object is assigned to `this` within the function body.
4. The code in the function body is executed.
5. The function returns the object referenced by `this` unless the function returns an explicit object.

Use of a constructor function and the `new` keyword:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corolla = new Car('Toyota', 'Corolla', 2016);
let leaf = new Car('Nissan', 'LEAF', 2018);
let nova = new Car('Chevrolet', 'Nova', 1974);
```

Defining a constructor is nearly identical to defining an ordinary function, but there are differences. For starters, notice that *we gave the constructor a name that begins with a capital letter*: `Car`. Capitalizing the name isn't a language requirement, but it is a convention employed by most JavaScript developers.

The function parameters, in general, match the properties associated with each `Car` object. In this case, we supply parameters for all of the properties except `started`, which receives an initial value instead. *The initial value for such properties can come from anywhere.* For instance, we can compute the value from other properties or retrieve a value from a database.

#### 2.1 The `new` Keyword

JavaScript does the following six things when a constructor function is invoked with `new`:

1. Creates a new object.
2. Sets `[[Prototype]]` of the new object to the same object as the constructor's `prototype` property.
3. Sets the `constructor` property of the new object to point to the constructor function (the function that created the new object).
4. Sets `this` inside the function to refer to the new object.
5. Invokes the function.
6. Returns the new object implicitly (no `return` expression necessary; explicit return values only override the new object if the return value itself is an object).

```js
// Example where `instanceof` operator confirms if object was made by the constructor function. Using `constructor` property can be more useful.

function Car(make, model) {
  this.make = make;
  this.model = model;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}

let truck = new Car("Ford", "F150");
console.log(truck) // => Car { make: 'Ford', model: 'F150', drive: [Function (anonymous)] }
console.log(truck.__proto__ === Car.prototype) // =>  true
console.log(Object.getPrototypeOf(truck) === Car.prototype) // => true
console.log(truck.constructor) // => [Function: Car]
console.log(truck.constructor === Car) // => true
console.log(truck instanceof Car) // => true
```

#### 2.2 Calling a Constructor Function

The most striking features that distinguish **constructors** from ordinary functions are that:

- we call it with the `new` keyword,
- we use `this` to set the object's properties and methods, and
- we *don't supply an explicit return value* (we can, but usually don't).

`this` *always refers to an object*. Its value depends on how we call the function. Calling constructors is where you see the most significant difference between them and other functions.

Let's create a `Car` object:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

// Using the `new` keyword with the function invocation treats the function as a constructor
let corolla = new Car('Toyota', 'Corolla', 2016);

corolla.make;    // => 'Toyota'
corolla.model;   // => 'Corolla'
corolla.year;    // => 2016
corolla.started; // => false

corolla.start();
corolla.started; // => true
```

Notice that the `new` keyword precedes the function invocation. This combination of using `new` with a function call *treats the function as a constructor*.

JavaScript takes the following steps when you invoke a function with `new`:

1. It creates an entirely new object.
2. It sets the prototype of the new object to the object that is referenced by the constructor's `prototype` property.
3. It sets the value of `this` for use inside the function to point to the new object.
4. It invokes the function. Since `this` refers to the new object, we use it within the function to set the object's properties and methods.
5. Finally, once the function finishes running, `new` returns the new object even though we don't explicitly return anything.

**JavaScript won't complain about a missing `new` keyword.**

```js
Car(); // => undefined
```

If you don't use the `new` keyword, the constructor function won't work as intended. Instead, it *acts like an ordinary function*. In particular, *no new objects are created*, so `this` won't point to a new object.

Furthermore, since functions that don't return an explicit value return `undefined`, calling a constructor without `new` also returns `undefined`. When you use `new`, however, the function doesn't have to return anything explicitly: it *returns the newly created object automatically*.

#### 2.3 Lesson 3 Quiz 1 Question 2

In the following code, the `Animal` function is meant to be used as a constructor.

```js
const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = Animal('Panthera leo');
lion.sleep(); // TypeError
```

The constructor should return a new object that can subsequently be used to call the `Animal.prototype.sleep` method shown below. However, this program does not work as intended -- we get a `TypeError` when we try to call `sleep`.

The problem here is that we did not use the `new` operator. Without the `new` operator, `Animal` isn't called as a constructor function. Thus, `this` refers to the global object instead of a new object, and the function returns a string instead of a new object.

#### 2.4 Who Can be a Constructor

You can use `new` to call almost any JavaScript function that you create. However, *you cannot call arrow functions with `new`* since they use their surrounding context as the value of `this`:

```js
let Car = (make, model, year) => {
  this.make = make;
  this.model = model;
  this.year = year;
}

new Car(); // TypeError: Car is not a constructor
```

You *can also use* `new` on methods that you define in objects. Consider:

```js
let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let car1 = new foo.Car('Toyota', 'Camry', 2019);
car1.make; //=> 'Toyota'
```

However, *calling a method defined with concise syntax* (also called a concise method) *won't work*:

```js
let foo = {
  Car(make, model, year) { // calling with concise syntax raises an error
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

new foo.Car(); //=> Uncaught TypeError: foo.Car is not a constructor
```

In addition, many -- but not all -- **built-in objects and methods** are *incompatible* with `new`:

```js
new console.log(); // => Uncaught TypeError: console.log is not a constructor
new Math();  // => Uncaught TypeError: Math is not a constructor
new parseInt("3"); // => Uncaught TypeError: parseInt is not a constructor

// The `Date` constructor is compatible with `new`
new Date(); // => 2019-06-26T02:50:20.191Z
```

#### 2.5 Constructors with Explicit Return Values

What happens when you use `new` to call a function that returns an explicit value?

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'a cat';
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy) // Cat { name: 'fluffy', breed: 'Persian', weight: 15 }
fluffy.weight; // 15
```

Even though we explicitly returned the string `'a cat'`, our constructor returned the `Cat` object with `name`, `breed` and `weight` as its properties.

Note that `'a cat'` is a **primitive value**. Suppose we returned an object instead.

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return { foo: 1 };
}

let fluffy = new Cat('fluffy', 'Persian', 15);
console.log(fluffy) // { foo: 1 }
fluffy.weight; // undefined
fluffy.foo; // 1
```

This time the constructor returned the object `{ foo: 1 }`, not a cat object.

*A constructor that explicitly tries to return an object returns that object instead of a new object of the desired type*. In all other situations, it returns the newly created object, provided no errors occur. In particular, *the constructor ignores primitive return values and returns the new object instead*.

#### 2.6 Constructors with Explicit Return Values Example (Lesson 3 Quiz 1 Question 3)

Examine the following code:

```js
function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');
```

Without running the code, determine the type of data that the `dog`, `lion`, and `cat` variables would reference if you were to run it.

- dog: a `Dog` object
- lion: a `Pet` object
- cat: a `Pet` object

A constructor that attempts to *return an object will return an object of that type*. Thus, `dog` refers to a `Dog` object since that's what the constructor tried to return.

A constructor that attempts to *return a non-object value*, such as a string, will instead return a new object of the type associated with the constructor, e.g., `Pet` in this case. Thus, `lion` refers to a `Pet` object *since the constructor attempts to return a string*.

A constructor that *doesn't return an explicit value* will return a new object of the type associated with the constructor, e.g., `Pet`. Thus, `cat` refers to a `Pet` object since the constructor doesn't return an explicit value.

#### 2.7 Supplying Constructor Arguments with Plain Objects

Constructor functions sometimes have to grow with the needs of a program. That often means adding more arguments to the constructor. For instance, our `Car` constructor may one day end up looking like this:

```js
function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}
```

That's quite a few parameters, with plenty of opportunities for mistakes. For instance, we may *pass the arguments in the wrong order*, and JavaScript won't complain. The more parameters a function needs, the harder it is to read the code and the more likely that problems will arise.

One common technique that we can use to manage our parameters better involves *passing them to our constructor with an object argument*:

```js
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
}

let civic = new Car(civicArgs);
```

Of course, that means that we now have to rework our `Car` constructor to accept an object as an argument:

```js
function Car(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

With `Object.assign`, we can simplify this constructor considerably:

```js
function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

However, one drawback of the `Object.assign` approach is that the `args` object may contain properties that the `Car` object doesn't need. Those additional properties will, nevertheless, get added to the `Car` object. Those properties may just be excess baggage for the objects to carry around, but they *may also cause trouble*.

#### 2.8 Determining an Object's Type with the `instanceof` Operator

Many object-oriented languages, like Java or C++, have a strong notion of object types. In most such languages, it's easy to determine the object's type, such as a dog or car. JavaScript, however, treats objects and their types in a looser, more dynamic way. You can't determine the specific type of arbitrary JavaScript objects; they are dynamic structures with a type of `object`, no matter what properties and methods they have. However, *we can get some useful information about an object if we know which constructor created it*.

Remember that the `new` operator creates a new object. Suppose that you call the `Car` constructor with `new`. Informally, we can say that the resulting object is a car. More formally, we can say that the object is an **instance** of a `Car`.

The object that the `new` operator returns *contains some information that ties it back to the constructor that created the object*. The `instanceof` operator uses that information to determine what constructor created the object.

```js
function Car(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}

let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

if (civic instanceof Car) { // `instanceof` operator
  console.log("It's a car!");
} else {
  console.log("It's not a car.");
}

// => logs 'It's a car!'
```

### 3. Constructors with Prototypes

Let's take a closer look at what happens when we create some objects with a constructor (but without a prototype):

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

Each of these dog objects, when created, receive the `name`, `breed`, and `weight` properties *as well as the `bark` method*. The properties have values that differ between objects, but the `bark` method remains the same in all. However, every time we create a new dog object, we must create a new `bark` method so we can add it to the object. This is inefficient and wasteful.

We can verify that each object has its own `bark` method with `hasOwnProperty`:

```js
maxi.hasOwnProperty('bark');   // true
dexter.hasOwnProperty('bark'); // true
biggie.hasOwnProperty('bark'); // true
maxi.bark === dexter.bark;     // false
maxi.bark === biggie.bark;     // false
dexter.bark === biggie.bark;   // false
```

#### 3.1 Method Delegation to Prototypes

Prototypes are especially *useful for sharing methods* as *all objects of a particular type share the same prototype object*. Delegation means that we can share methods by putting them in the prototype object; *if an object doesn't contain a requested method, JavaScript searches the prototype chain to find the method*. Thus, we can define a method once in the prototype object, and let the inheriting objects delegate the method calls to the prototype. We can use prototypes in conjunction with constructors to achieve this result:

```js
let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}
```

In this code, we've changed our `Dog` constructor and created a `DogPrototype` object. The first thing we do inside the constructor is set `DogPrototype` as the prototype of the newly created dog object. We then assign the arguments to the properties.

Note that we can continue to use our constructor without change:

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

This time, however, the `bark` method isn't defined on the individual objects, but is, instead, defined on the `[[Prototype]]` property:

```js
maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true
```

The `DogPrototype` object *has the only copy of the method*; all dog objects delegate `bark` to the `DogPrototype` object.

We now have a constructor and a related prototype object. Together, they construct objects of some type. In our code here, we can guess that the constructor and prototype are related by looking at their names. However, it would be better if we could establish that relationship more concretely. Let's assign the prototype object to a property of the `Dog` function.

```js
// Delete DogPrototype

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

// Assign the prototype object to a property of the `Dog` constructor function
Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};
```

Since JavaScript functions are objects, we can add properties to them. Here, we assign the prototype object to a `myPrototype` property on the `Dog` function object. Thus, we clearly show our intent that all dogs inherit from the `Dog.myPrototype` object. Once we've done that, we can change our constructor function to use `Dog.myPrototype` as the prototype object.

Here's the complete code as it now stands:

```js
function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false

Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true
```

#### 3.2 The Constructor `prototype` Property

What makes constructors special is a characteristic of all **function objects** in JavaScript: they all have a prototype property that we call the **function prototype** to distinguish them from the prototypes used when creating ordinary objects. The code we showed in the previous section emulates something that *JavaScript bundles with constructors*. Let's take a look at that property:

```sh
Dog.prototype; // => Dog {}
```

When you call a function `Foo` with the `new` keyword, JavaScript sets the new object's prototype to the current value of `Foo`'s `prototype` property. That is, the constructor creates an object that inherits from the constructor function's prototype (`Foo.prototype`). Since inheritance in JavaScript uses prototypes, we can also say that *the constructor creates an object whose prototype references `Foo.prototype`.*

The terminology of **constructor prototypes** and **object prototypes** is extremely confusing. Note in particular that we use the term "prototype" to refer to 2 distinct but related concepts:

1. If `bar` is an object, then the object from which `bar` inherits is the **object prototype**. By default, *constructor functions set the object prototype for the objects they create to the constructor's prototype object.*

2. The **constructor's prototype object**, also called the **function prototype**, is an object that the constructor uses as the object prototype for the objects it creates. In other words, each object that the constructor creates inherits from the constructor's prototype object. The constructor stores its prototype object in its `prototype` property; that is, if the constructor's name is `Foo`, then `Foo.prototype` references the constructor's prototype object.

In most cases, when we talk about a **prototype** without being more explicit, we mean an **object prototype**. We'll talk about the **constructor's prototype**, the **function prototype**, or the **`prototype` property** when talking about a constructor's prototype object.

- Prototype => object prototype

- Constructor Prototype => Function Prototype or `prototype` property

Note that *constructors don't inherit from the constructor's prototype object*. Instead, *the objects that the constructor creates inherit from it*.

*Every JavaScript function has a `prototype` property*. However, JavaScript only uses it when you call that function as a constructor by using the `new` keyword.

With this information, we can abandon our home-grown constructor-prototype pairing and *use the one that JavaScript provides instead:*

```js
// JavaScript's provided constructor-prototype pairing
function Dog (name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'
```

Note that our constructor doesn't have to explicitly set the prototype of `this` to `Dog.prototype`. JavaScript does that for us when we call the function with `new`. We left this detail out earlier, so let's restate those steps with updated information. We'll assume that the constructor function is named `Foo`:

1. It creates an entirely new object.
2. It sets `Foo.prototype` as the prototype for the new object. That is, the new object inherits from the object referenced by `Foo.prototype`.
3. It sets the execution context (`this`) for the function to point to the new object.
4. It invokes the function.
5. It returns the new object *unless the function returns another object*.

Since the `bark` method refers to `this` and `bark` belongs to the prototype object, you may think that `this` in `this.weight` refers to the prototype object rather than the object itself (e.g., `maxi` or `biggie`). However, that's not how `this` binding works.

When you call a method on an object, JavaScript binds `this` to the object whose method you used to call it. If it doesn't find the method in that object, but it does find it in the prototype, that doesn't change the value of `this`. `this` always refers to the original object -- that is, the object used to call the method -- even if the method is in the prototype. If we find the `bark` method in the prototype, `this` references the original dog object, not the prototype.

A property of interest on a prototype object is the `constructor` property. For instance:

```sh
Dog.prototype.constructor; // [Function: Dog]
```

As with the `instanceof` operator, the `constructor` property lets us determine the type of an object:

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);

if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}

// => 'It's a dog'
```

Be careful, however. *It's possible to reassign the `constructor` property to something else*. In that case, the test shown above would fail, even though the object is still a dog.

```js
Dog.prototype.constructor = function() {};

maxi.constructor === Dog; // false
maxi instanceof Dog;      // true
```

Note that `instanceof` still works.

#### 3.3 Overriding the Prototype

Inheriting methods from a prototype doesn't mean that the inheriting object is stuck with those methods. *JavaScript objects are incredibly dynamic and flexible*. Two objects created with the same constructor may end up looking completely different from each other because of changes and additions made after constructing the object. For instance, suppose we have a `dexter` dog that has an unusually loud and deep bark. We want to change the `bark` method to log `WOOF!` instead of `Woof!`. We can do that easily by *defining a custom* `bark` method on `dexter`.

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);

dexter.bark = function() {
  console.log('WOOF!');
}

maxi.bark(); // Woof!
dexter.bark(); // WOOF!
```

The `dexter` object now has its own `bark` method that **overrides** the `bark` method from `Dog.prototype`. Each time we call `bark` on `dexter`, *JavaScript looks for it first in the `dexter` object itself*. Since it finds it there, it doesn't need to check the prototype.

#### 3.4 Constructor and Prototype Example 1 - `function Rectangle`

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getWidth = function() {
  return this.width;
}

Rectangle.prototype.getLength = function() {
  return this.length;
}

Rectangle.prototype.getArea = function() {
  return this.width * this.length;
}

let rectangle1 = new Rectangle(5, 4);
console.log(rectangle1.getWidth()); // 4
console.log(rectangle1.getLength()); // 5
console.log(rectangle1.getArea()); // 20
```

#### 3.5 Constructor and Prototype Example 2 - `function Book`

```js
function Book(author, title, isbn) {
  this.author = author;
  this.title = title;
  this.isbn = isbn;
}

Book.prototype.describe = function() {
  console.log(this.title + ' was written by ' + this.author + '.');
};

let book = new Book("Neal Stephenson", "Snow Crash", "0-553-08853-X");
book.describe() // Snow Crash was written by Neal Stephenson
```

#### 3.6 Constructor and Prototype Example 3 - `function MyClass`

The reason we get the following output is because the `new` operator sets the context to the new object that's created. Because of this, technically a, b, c etc. don't exist as properties on the constructor, they exist as properties in the instantiated object.

```js
function MyClass(a, b, c, d, e, f) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.e = e;
  this.f = f;
}

let func = new MyClass(1, 2, 3, 4, 5, 6);

console.log(Object.getOwnPropertyNames(func)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(Object.getOwnPropertyNames(MyClass)); // [ 'length', 'name', 'arguments', 'caller', 'prototype' ]
```

### 4. Instance and Static Properties and Methods

In OOP, we often refer to individual objects of a specific data type as **instances** of that type. In the previous `Dog` example , `maxi` and `dexter` are instances of the `Dog` type. An instance is just another term for the objects created using any means of defining multiple objects of the same kind (e.g., dogs). The term **object** is more general, while **instance** is more specific.

#### 4.1 Instance Properties

The properties of an instance are **instance properties**. These properties belong to a specific instance of some type. Thus, in our `Dog` example from the earlier assignment, we say that the `name`, `breed`, and `weight` properties are all instance properties of the various instances of the `Dog` type. If we want to access the weight for `Maxi` from the above example, we must use the `maxi` object:

```js
maxi.weight; // 32
```

If we try to use the constructor, instead, it won't work:

```js
Dog.weight; // undefined
```

This code returns `undefined` since `weight` isn't a property of the constructor; it's a property of the instances created by that constructor. It also doesn't make sense to define it on the constructor function: weight is a property of an individual dog, not one that is related to dogs as a type.

#### 4.2 Instance Methods

Since methods are also properties on an object, we can refer to methods stored directly in an object as instance properties too. More commonly, we call them **instance methods** just to distinguish them from ordinary data properties.

However, methods usually aren't stored directly in instances. Instead, they are *usually defined in the object's prototype object*. While methods defined in the prototype object aren't stored in the instance object, they still operate on individual instances. Therefore, we usually refer to them as instance methods. Instance methods are stored either as part of an object or somewhere in the object's prototype chain. *In our `Dog` example, `bark` is an instance method since it's defined on the `Dog.prototype` object.*

As with `weight`, we must use an object created by the `Dog` constructor to invoke `bark`:

```js8
maxi.bark(); // Woof!
```

Again, we can't use the constructor to call this method:

```js
Dog.bark(); // TypeError: Dog.bark is not a function
```

In this specific example, we can call `Dog.prototype.bark()`, but that doesn't always work well. For instance, calling `Dog.prototype.bark()` won't recognize the fact that `dexter` has a different version of `bark`.

Any method defined in any prototype in the prototype chain of an object is considered to be an instance method of the object.

#### 4.3 Static Properties

Static properties are defined and accessed *directly on the constructor*, not on an instance or a prototype. Typically, static properties belong to the type (e.g., `Dog`) rather than to the individual instances or the prototype object.

For instance, dogs belong to the species "Canis lupus". That property of dogs doesn't have anything to do with individual dogs; *it's information that is pertinent about all dogs.* Therefore, it makes sense to add this property directly to the `Dog` constructor as a static property:

```js
Dog.species = "Canis lupus";
```

Now, when our application needs to know the species that dogs belong to, we can *access it from the constructor directly*:

```js
console.log(`Dogs belong to the species ${Dog.species}`);
```

One common use of static properties is to *keep track of all of the objects created by a constructor*. For instance:

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this); // static property
}

Dog.allDogs = [];
```

In this case, the static property `allDogs` contains an array with a reference to every dog object created while the program is running. While `allDogs` maintains a list of all the dogs, it isn't information that is pertinent to a specific dog -- it's information about dogs in general. Therefore, it should be a static property.

#### 4.4 Static Methods

Static methods are methods that *apply to the constructor or class itself*, not a specific object created by that constructor or class.

```js
// Example 1
Dog.showSpecies = function() {
  console.log(`Dogs belong to the species ${Dog.species}`);
};

Dog.showSpecies();
```

```js
// Constructor Static and Instance Methods Example
function Constructor() {}

Constructor.staticMethod = function() {};

Constructor.prototype.instanceMethod = {
  function() {}
}
```

```js
// Class Static and Instance Methods Example
class Class {
  constructor() {}

  static staticMethod() {}

  instanceMethod() {}
}
```

You've already seen examples of static methods on **built-in JavaScript constructors**.`Object.assign`, `Array.isArray`, and `Date.now` are all examples of static methods.

#### 4.5 Example with Constructor/Prototype

The code below defines a constructor function, `Car`, and adds a method, `drive`, to the prototype of that constructor:

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function() {
  console.log(`Driving a ${this.model}`);
}
```

Objects created by this constructor have `make` and `model` properties, as well as a `drive` method. However, we now need to add an `allMakes` method that returns an array of the makes of all the cars created by the constructor. Think about where the array and the method should live and then update the code to create the array and implement the method.

```js
function Car(make, model) {
  this.make = make;
  this.model = model;
  Car.makes.push(this.make);
}

Car.prototype.drive = function() {
  console.log(`Driving a ${this.model}`);
};

Car.allMakes = function() {
  return Car.makes;
}

Car.makes = [];

let car1 = new Car('Honda', 'Accord');
let car2 = new Car('Toyota', 'Prius');
console.log(Car.allMakes()); // [ 'Honda', 'Toyota' ]
```

#### 4.6 Example with Class Syntax

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    Car.makes.push(this.make);
  }

  static makes = [];

  static allMakes() {
    return Car.makes;
  }

  drive() {
    console.log(`Driving a ${this.model}`);
  }
}

let car1 = new Car('Honda', 'Accord');
let car2 = new Car('Toyota', 'Prius');
console.log(Car.allMakes()); // [ 'Honda', 'Toyota' ]
```

### 5. Built-in Constructors (`Array`, `Object`, `Date`, `String` and `Number`)

JavaScript comes with a variety of built-in constructors and prototypes that let you *instantiate useful objects*. These constructors work like constructors for other objects; they're used with the `new` keyword to create objects. In this assignment, we will discuss some of JavaScript's built-in constructors, their prototypes, and how you can extend them.

#### 5.1 The `Array` constructor

The simplest way to create an array object uses the bracket syntax:

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

The behavior is considerably different when you *provide a single number argument*. In this case, *the constructor creates an array with a length equal to the number specified by the argument*, but with no actual elements:

```sh
> new Array(3)
[ <3 empty items> ]
```

You can think of `[ <3 empty items> ]` as an array that has three empty slots. In effect, it's an empty array that happens to contain spaces for three items; alternatively, it's a non-empty array that contains no values.

Note that the single-number form of the constructor *does not accept non-integers or negative numbers*:

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

Stay consistent and use `new` unless there's a good reason to omit it.

##### 5.1.1 Example Question - Lesson 3 Quiz 1 Question 5

Examine the following code.

```js
let arr1 = new Array(1, 2, 3);
let arr2 = Array(1, 2, 3);

console.log(arr1 === arr2); // line 4 => false
```

While line 4 shows that the two arrays are different objects, it doesn't reveal whether the two arrays differ in any other way, i.e., in their type, content, or behavior. Both arrays are identical: they are both objects of type Array, and they both have the same values in their elements.

JavaScript *does not require* the `new` keyword when creating arrays; the `Array` constructor works the same regardless of whether `new` is used.

##### 5.1.2 `Array.prototype` (Instance Methods)

As with any JavaScript function, the `Array` constructor has a `prototype` property. All arrays inherit from the object referenced by this property:

```sh
> let numbers = [1, 2, 3]
> Object.getPrototypeOf(numbers) === Array.prototype
true
```

This relationship implies that *every array can use the methods defined in `Array.prototype`.* In particular, that means that all arrays can use methods like `forEach`, `map`, `includes`, as well as all the other methods defined on `Array.prototype`:

```js
// let numbers = [1, 2, 3] <-- from above
> numbers.map(number => number * number);
[ 1, 4, 9 ]

> numbers.includes(3)
true
```

All array methods with names that follow the pattern `Array.prototype.aMethod` are the **instance methods** for the Array type.

##### 5.1.3 Static Array Methods

Static methods belong directly to the constructor function. They aren't part of the prototype used to create new objects. Their names don't include `.prototype`. Moreover, you usually use the constructor to invoke the static methods, not the object created by that constructor.

##### 5.1.3.1 `Array.isArray`

The `Array.isArray` static method helps distinguish between arrays and objects. The `typeof` operator returns `object` when used with an array, so cannot be used to detect an array. `Array.isArray` helps improves readability and show intent.

The `Array.isArray` method takes one argument and returns `true` if the argument is an array object, and `false` if it is not:

```sh
> Array.isArray([])
true

> Array.isArray({})
false

> Array.isArray(5)
false
```

Programs often use `Array.isArray` to verify or refute that a given value is an array object.  The `typeof` operator returns an unexpected and somewhat useless value when used with an array:

```sh
> typeof []
'object'
```

We need `Array.isArray` to distinguish between arrays and other objects.

##### 5.1.3.2 `Array.from`

The `Array.from` method takes an **array-like object** as an argument and returns a new array with the equivalent element values. *An array-like object is any object that has a `length` property* and provides indexed access to some of its properties with the `[index]` notation. Such objects have properties whose keys are non-negative integers. In many cases, the `length` property won't self-update if you add or remove properties to or from the object.

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

###2 The `Object` constructor

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

Omitting `new` is probably not a good practice.

#### 5.2 The `Object` Constructor

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

##### 5.2.1 Static `Object` Methods

The list below shows some commonly used static `Object` methods. You've already seen and used several. Feel free to follow the links and read more about these methods, but you don't have to memorize them. Instead, learn what's available. You can look them up later when you need to use them:

- `Object.assign()`
- `Object.create()`
- `Object.entries()`
- `Object.freeze()`
- `Object.isFrozen()`
- `Object.keys()`
- `Object.values()`

#### 5.3 The Date Constructor

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

##### 5.3.1 `Date.prototype`

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

#### 5.5 The `String` Constructor

Why do we need a constructor for strings? Aren't JavaScript strings a primitive type? We know they are since the strict equality operator compares strings by value rather than identity:

```sh
> 'abc' === 'abc'
true
```

Two strings with the same characters are considered equal in JavaScript. Equality for objects works by identity, however. Two objects are strictly equal only when they are the same object. Consider:

```js
> let arr1 = [1, 2, 3];
> let arr2 = arr1    // arr1 and arr2 both reference the same object
> arr1 === [1, 2, 3] // false
> arr1 === arr2      // true
```

Interestingly, we can *access properties and call methods on strings*:

```js
> 'abc'.length
3

> 'abc'.toUpperCase()
'ABC'
```

JavaScript has two kinds of strings: **string primitives** and **`String` objects**. Thus far, all the strings we've created and used have been string primitives. We create string primitives by using quotes (single or double) or back-tick characters to define a string's value. To create a `String` object, on the other hand, we must use the `String` constructor:

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

When you try to access a property or invoke a method on a string primitive, JavaScript *wraps* the string primitive in a `String` object behind the scenes.

Once JavaScript has wrapped your string primitive in a `String` object, it then uses the object to access the property or call the method. When the wrapping object has served its purpose, JavaScript discards it.

If a property or method returns a string, it returns a string primitive, so you also don't have to worry about converting `String` objects to primitives.

As a general rule, *you should not create* `String` objects explicitly. That's where you're likely to run into problems with the distinction between string primitives and `String` objects. However, if you're writing code where you may have to operate on `String` objects, you can use `String.prototype.valueOf()` to retrieve the value of the `String` object as a primitive.

##### 5.5.1 `String` Without `new`

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

##### 5.5.2 Lesson 3 Quiz 1 Question 6

Examine the following code.

```js
let str1 = new String("abc");
let str2 = String("abc");

console.log(str1 === str2); // => false
```

While line 4 shows that the two strings are not identical, it doesn't reveal how the strings differ. Do the strings differ in any other way?

Yes. `str1` is an object of type `String`, while `str2` is a string primitive. Functionally, the two values act like objects in that you can write `str1.toLowerCase()` or `str2.toLowerCase()`. That's because *JavaScript silently wraps string primitives in a String class when it needs to use a method or property.* In addition, `typeof str1` returns `object`, while `typeof str2` returns `string`.

#### 5.6 The `Number` and `Boolean` Constructors

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

#### 5.7 Extending Built-in Prototypes

Since all JavaScript objects derive their behavior from the prototype objects associated with their constructors, we can add new capabilities to our built-in objects by changing those prototypes. For example, we can add a `first` method to all arrays by adding it to `Array.prototype`:

```js
Array.prototype.first = function() {
  return this[0];
}

[1, 2, 3].first(); // => 1
```

Since we use the array `[1, 2, 3]` to call `first`, `this` inside the function refers to `[1, 2, 3]`. Thus, the `first` method returns the first element of the array used to call it, or `undefined` if the array is empty.

Extending built-in objects is interesting to study, but it's *best to avoid doing so*. Adding a method like `first` to an array object *can confuse other developers* working on your project. It can lead to errors when other developers forget or don't realize that your array has an unexpected bonus.

#### 5.8 Borrowing Array Methods for Strings

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

### 6. Classes

The ECMAScript 6 (ES6) standard added the `class` keyword to JavaScript. In effect, classes act like **syntactic sugar** -- syntax designed to be easier to read or use -- that makes it easier for programmers to migrate to JavaScript from other OOP languages. *The `class` statement gets translated behind the scenes to a constructor function and a prototype object, and the class name refers to the constructor function.*

ES6 classes provide a cleaner, more compact alternative to constructors and prototypes. As with functions, they are first-class citizens and come in the form of declarations and expressions. Functionally, classes behave almost identically to the constructors and prototypes they aim to replace. Classes allow for static methods by using the `static` modifier.

A class is a kind of template for creating concrete objects of that type. Each concrete object is called an instance of the class. The process of creating an instance is performed by a special function called a **constructor**. *We pass the constructor values for any internal state that we want to initialize in the new instance.*

#### 6.1 A Simple Type - Constructor and Prototype Pattern

Before we get into the `class` syntax, let's first define a simple `Rectangle` type using the familiar **constructor** and **prototype** pattern:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor); // [Function: Rectangle]
console.log(rec.getArea()); // 50
```

The object created by the `Rectangle` constructor, `rec`, is an **instance** of the `Rectangle` type, and we can call the `getArea` method from its prototype to calculate the area.

If you call the `Rectangle` constructor without the `new` keyword, the constructor won't work properly.

#### 6.2 Class Declarations

**Class declarations** begin with the `class` keyword, followed by the name of the class. The rest of the syntax looks similar to the simplified (concise) method definition that you can use in object literals. However, there are *no commas between the properties of the class*.

```js
class Rectangle {
  constructor(length, width) { // `constructor` is a method named constructor inside the class
    this.length = length;
    this.width = width;
  } // no commas between the properties of the class

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle); // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor); // [class Rectangle]
console.log(rec.getArea()); // 50
```

The `constructor` is now a method named constructor inside our class instead of being a standalone function. Other methods have no special meaning; you can define as many as you need. In this case, we define `getArea`, and it gets placed in `Rectangle.prototype`.

In most situations, instantiating a new object from a class is identical to creating one with the constructor/prototype pattern:

```js
let rec = new Rectangle(10, 5);
```

You can even call methods on `Rectangle.prototype` in the same way:

```js
console.log(rec.getArea());
```

The class code and instantiation is so similar to the constructor/prototype code that `typeof` even returns `'function'`, and the object checks out as an instance of `Rectangle`:

```js
console.log(typeof Rectangle); // "function"
console.log(rec instanceof Rectangle); // true
```

One minor difference is that `rec.constructor` may produce different results in the two patterns. For example, in Node, logging `rec.constructor` produces `[Function: Rectangle]` for the constructor/prototype example, and `[class Rectangle]` for the class example. This difference is implementation dependent, and not considered significant.

There is one significant difference, however: *you must use the `new` keyword to call the constructor* when using a `class`. JavaScript raises a `TypeError` if you try to call the constructor without the `new` keyword.

Using classes, *it's possible to do everything you can with the constructor and prototype pattern*. However, the class syntax is easier to read and write, and the enforced `new` keyword helps prevent bugs.

#### 6.3 Class Expressions

Functions have an *expression* form that does not require a name after the function keyword. Classes have a similar expression form. Consider the following code:

```js
let Rectangle = class { // class expression
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
};
```

Aside from the syntax, class expressions are functionally equivalent to class declarations. Which you use is primarily a matter of style.

#### 6.4 Class Expression Syntax Examples

```js
// 1
let Cat = class {
  // omitted code
}

// 2
console.log(
  class Cat {
    // omitted code
  }
);

// 3
function createClass() {
  return (
    class Cat {
      // omitted code
    }
  );
};
```

## IV. Subclassing and Code Reuse Patterns

### 1. Object Creation with Prototypes (OLOO)



### 2. Sub-typing with Constructors and Prototypes

The combination of constructors and prototypes gives us something that resembles a **class**, a construct used in classical OOP languages like Java, Python, and Ruby. A *class is a blueprint for creating objects*. Traditional OOP languages use classes to create distinct objects of a particular type and give those objects the behaviors and state that they need.

*Constructors and prototypes let us mimic classes in JavaScript*. Until recently, the language had nothing that you could reasonably call a class. That made it hard for developers familiar with class-based languages to switch to JavaScript. One can even argue that constructors and prototypes are part of the language solely to make it easier for developers to switch to JavaScript.

An essential part of the OO paradigm is the concept of inheritance. In most OOP languages, inheritance means something a bit different from the way we use it in conjunction with JavaScript. That can make JavaScript inheritance confusing if you've seen inheritance in other languages.

Let's look at an example that shows why we might need **inheritance** in an application. Assume that we have a drawing application that lets the user work with shapes. In this app, the constructor/prototype combination for rectangles might look like this:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
}
```

We can create and manipulate `Rectangle` objects like so:

```js
let rect = new Rectangle(10, 5);
rect.getArea(); // => 50
rect.toString(); // '[Rectangle 10 x 5]'
```

Our `Rectangle` constructor creates rectangle objects that have `width` and `length` as properties and the methods `getArea` and `toString`.

Suppose our application also needs squares. We can set up another constructor/prototype combination for those squares, and then follow the same pattern we used for rectangles:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype.getArea = function() {
  return this.length * this.width;
};

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
sqr.getArea();     // => 25
sqr.toString();    // => "[Square 5 x 5]"
```

There's some code duplication between this code and the `Rectangle` code. In particular, `Square.prototype.getArea` and `Rectangle.prototype.getArea` are **identical**. That gives us a chance to *reuse some code*.

We can *use prototypal inheritance to our advantage here*. One way to think about the relationship between `Square` and `Rectangle` is that a square is a special kind of rectangle where both the length and width are the same. We say that `Square` is a **subtype** of `Rectangle`, or that `Rectangle` is a **supertype** of `Square`. Consider the following code:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.toString() = function() {
  return `[Square ${this.length} x ${this.width}]`;
};

let sqr = new Square(5);
sqr.getArea(); // => 25
sqr.toString(); // "[Square 5 x 5]"
```

Since a function's `prototype` property is writable -- we can change what object it references -- we can reassign `Square.prototype` to an object that inherits from `Rectangle.prototype`. The result is a **prototype chain** that looks like this:

```js
sqr ---> Square.prototype ---> Rectangle.prototype ---> Object.prototype
```

All objects created by the `Square` constructor inherit from `Square.prototype`, which we have set up to inherit from `Rectangle.prototype`. Thus, all square objects have access to methods on `Rectangle.prototype`. Since `toString` must be different for squares, we *override* it in `Square.prototype`. That is, we customize `Square.prototype.toString`. Since `getArea` *requires no customization*, we can let square objects use the inherited `Rectangle.prototype.getArea`.

#### 5.1 Restoring the `constructor` property

One side-effect of this approach is that the `constructor` property on square objects points to `Rectangle` when it should point to `Square` instead:

```js
// omitted code

sqr.constructor === Rectangle; // => true
```

Since we reassign `Square.prototype` to a new object that inherits from `Rectangle.prototype`, and the `constructor` property for `Rectangle.prototype` points back to `Rectangle`. Thus, `Square.prototype.constructor` points to `Rectangle`. To fix this situation, we merely need to reassign `Square.prototype.constructor` to `Square`:

```js
function Square(size) {
  this.length = size;
  this.width = size;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square; // <-- reassign

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

let sqr = new Square(5);
sqr.getArea(); // => 25
sqr.toString(); // => '[Square 5 x 5]'
sqr.constructor === Square; // => true
```

In most cases, failure to reassign it won't hurt anything, and it certainly doesn't in this code. However, there are [situations where the value of the `constructor` property is important](https://2ality.com/2011/06/constructor-property.html).

#### 5.2 Constructor Reuse

If you examine the bodies of the `Rectangle` and `Square` functions, you'll see that they're similar. That suggests that we may be able to use the `Rectangle` constructor in `Square`. To do that, we must *invoke `Rectangle` with its execution context explicitly set to the execution context of `Square`*:

```js
function Square(size) {
  Rectangle.call(this, size, size);
}
```

Our code now looks like this:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.area;
}

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`;
}

let rect = new Rectangle(10, 5);
console.log(rect.getArea()); // => 50
console.log(rect.toString()); // '[Rectangle 10 x 5]'


function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`;
}

let sqr = new Square(5);
console.log(sqr.getArea()); // 25
console.log(sqr.toString()); // [Square 5 x 5]
```

The combination of constructors and prototypes provides a way of mimicking classical inheritance with JavaScript. This lets us create **subtype** objects, which can 'inherit' methods from a **supertype** object. This is one way of facilitating code re-use.

### 6. Built-in Constructors

### 7. ES6 Classes

### 8. Code Reuse with Mixins

### 9. Polymorphism

OLOO?