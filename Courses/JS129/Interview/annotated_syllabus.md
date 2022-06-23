# Object Oriented Programming with JavaScript (20220623 15:43 Version)

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

### 1. Function Expressions



### 2. Higher Order Functions

A function that accepts one or more arguments that are themselves functions is a higher-order function. A function that returns a function is a higher-order function. All JavaScript functions are first-class values. Therefore, all higher-order functions are also first-class values.

JavaScript has first-class functions that have the following characteristics:

- You can add them to objects and execute them in the respective object's context.
- You can remove them from their objects, pass them around, and execute them in entirely different contexts.
- They're initially unbound but dynamically bound to a context object at execution time.

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

### 5. Hard-binding Functions with Contexts

### 6. Dealing with Context Loss

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

