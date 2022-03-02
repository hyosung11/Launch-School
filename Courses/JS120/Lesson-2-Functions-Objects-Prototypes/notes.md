# Lesson 2: Functions, Objects, and Prototypes

## 1. Introduction

Welcome to lesson 2 of JS120! In this lesson, we'll talk about how functions and objects work together. Specifically, we'll discuss two major topics: **execution context** and **object prototypes**.

It's crucial to understand how the execution context, i.e., the value of `this`, is determined and what it refers to in various scenarios. Understanding this is one of the most challenging aspects of JavaScript. It's also one of the most important. Many errors and bugs in JavaScript programs result from a poor understanding of the execution context. It's imperative, therefore, that you **pay extra attention to this lesson** and go through it several times to solidify your mental model.

A cornerstone of object-oriented JavaScript is the concept of object prototypes. In fact, it is the sole mechanism with which JavaScript implements object oriented programming. This is a very important topic, which we'll get an introduction to in this lesson.

## 2. Review - Objects

Objects are one of the eight fundamental types in JavaScript:

- String
- Number
- Boolean
- Null
- Undefined
- Object
- BigInt (you don't need to know about this)
- Symbol (you don't need to know about this)

They are basically a collection of properties where each property has a key and value. While values can be any of the JavaScript types, **property keys are always strings**. If you define a property with a non-string key, it will first be *converted to a string*.

```js
let myObject = {};

myObject[false] = "one"
myObject[7] = "two"
myObject[[1, 2, 3]] = "three"

Object.keys(myObject); // ["7", "false", "1,2,3"]

myObject["false"]  // "one"
myObject["7"]      // "two"
myObject["1,2,3"]  // "three"
```

### Property Access

When dealing with objects, we are basically doing either one of two things: *setting a property* or *accessing a property*. We do both operations through the property key by using bracket notation or dot notation.

```js
myObject["foo"] = "bar";
myObject.foo              // "bar"
myObject["foo"]           // "bar"
```

Dot notation is also called **member access notation**, while bracket notation is called **computed member access notation**. The main difference between the two is that bracket notation can take any UTF-8-compatible string as the key, while member access notation requires valid variable names. Most importantly, computed member access notation can be computed on the fly -- *any expression between the brackets gets evaluated as a string and used to reference the property*.

```js
myObject["a-key"] = 'four';

myObject.a-key // SyntaxError (a-key is not a valid variable name)
myObject["a-key"] // 'four'
myObject["a" + "-" + "key"] // 'four'
```

### Property Existence

What happens if we access a non-existent property on an object? We get `undefined`. However, we also get the same value when we try to access a property that is explicitly set to `undefined`.

```js
Object.keys(myObject)  //  [ '7', 'false', '1,2,3', 'a-key' ]
myObject[undefinedKey] = undefined

myObject.undefinedKey // undefined
myObject.missingKey  // undefined
```

That’s a dilemma. How do we distinguish one from the other? There are two ways to do that:

- `in` operator
- `hasOwnProperty`

Both methods check if a property exists in an object. If it does, `true` is returned, and `false` otherwise.

```js
Object.keys(myObject)  //  [ '7', 'false', '1,2,3', 'a-key' ]

"false" in myObject // true
"true" in myObject // false

myObject.hasOwnProperty('7') // true
myObject.hasOwnProperty('8') // false
```

If they both do the same thing, why the need for duplication? They are not exactly identical. There is a difference but it’s something we have to cover in future assignments. What’s important to note for now is that both `in` operator as well as `hasOwnProperty()` allows us to check for property existence in an object.

Another indirect way of checking for property existence is to enumerate the properties of an object via `Object.keys` or `Object.getOwnPropertyNames`. Both return an array of the object’s properties. The difference is that `Object.keys` returns an array of enumerable properties while `Object.getOwnPropertyNames` returns all properties regardless if they’re enumerable or not. For more on enumerable properties, check [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) out.

```js
Object.keys(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
Object.getOwnPropertyNames(myObject) // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
```

### Review - Objects Summary

We’ve reviewed some basic concepts on objects. Specifically, we talked about objects as a collection of properties, setting and accessing properties, as well as checking for property existence. In the next assignments, we’ll dig deeper into objects and discuss topics that are essential to understanding object-oriented JavaScript.

## 3. Object Prototypes

In an earlier lesson, we learned about the concept of automating object creation and talked about why we need such automation. We studied factory functions as one way to automate object creation. An object factory serves two purposes:

1. It returns objects that represent data of a specific type.
2. It reuses code.

Let's examine another factory function:

```js
function createCar(make, model, year) {
  return {
    make,         // Same as "make: make"
    model,        // Same as "model: model"
    year,         // Same as "year: year"
    started: false,

    start() {     // Same as "start: function() {"
      this.started = true;
    },

    stop() {      // Same as "stop: function() {"
      this.started = false;
    },
  };
}
```

With this `createCar` **object factory**, you can create as many car objects as your program needs:

```js
let car1 = createCar('Toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic', 2017);

// my addition
let car3 = createCar('Tesla', 'Model X', 2022);
```

Factory functions give us the ability to create objects of the same type by merely calling a function. Entities that are common to multiple objects, such as the `start` and `stop` methods, get declared in one place. On the other hand, *arguments are passed to the factory function* to distinguish one object from another, such as the make, model, and year. Some entities, like `started`, don't fall easily into either category, but that's not important here.

As useful as factory functions are, *there are other ways to extract code into one place so that multiple objects can use it*. In JavaScript, we rely heavily on **prototypes** to accomplish this.

### Prototypes

In JavaScript, objects can *inherit properties and behavior from other objects*. If another object, for instance, has a `language` property and a `speak` behavior, a new object can access and use `language` and `speak` without explicitly defining them in the new object.

More specifically, JavaScript objects use something called **prototypal inheritance**. The object that you inherit properties and methods from is called the **prototype**. The function `Object.create` creates a new object that inherits properties from an existing object. It takes an object that is called the prototype object as an argument, and returns a new object that inherits properties from the prototype object. The newly created object has access to all the properties and methods that the prototype object provides.

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
b.foo; // => 1
```

An unusual aspect of this relationship is that the **inheriting object** (`b` above) doesn't receive any properties or methods of its own. Instead, it **delegates** property and method access to its prototype. You can see this in the node console:

```sh
> let a = { foo: 1, bar: 2 }
undefined

> let b = Object.create(a)
undefined

> b.foo
1

> b
{}
```

Evaluating `b` in the node console gives us an empty object, which demonstrates that `b` doesn't have any properties of its own. We can also use the `hasOwnProperty` method to demonstrate this:

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);

console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false
```

The `hasOwnProperty` method is available on all JavaScript objects. It takes the name of a property as a string and returns `true` if the object has a property by that name, `false` if it does not.

JavaScript objects use an internal `[[Prototype]]` property to keep track of their prototype. When you create an object with `Object.create()`, the new object's `[[Prototype]]` property gets assigned to the prototype object.

Note that `[[Prototype]]` is an **internal** property: you cannot access it directly in your code. However, you can access and replace its value with `Object` functions. For instance, `Object.getPrototypeOf()` takes an object as an argument and returns its prototype object:

```js
> Object.getPrototypeOf(b)
{ foo: 1, bar: 2}
```

You can use `Object.setPrototypeOf()` to set the prototype object of an object:

```js
let a = {
  foo: 1,
  bar: 2,
},

let b = {}; // line 6
Object.setPrototypeOf(b, a);

console.log(b.foo); // => 1
console.log(b); // => {}
console.log(Object.getPrototypeOf(b)); // { foo: 1, bar: 2}
```

The code on lines 6 and 7 is effectively identical to the code that we used on line 6 of the `Object.create` example. However, in this example, we declare and initialize `b` to an empty object rather than using `Object.create`; we then use `Object.setPrototypeOf` to set the prototype object.

An important consideration when dealing with prototypes is that objects hold a reference to their prototype objects through their internal `[[Prototype]]` property. If the object's prototype changes in some way, the changes are *observable in the inheriting object as well*.

```js
let a = {
  foo: 1,
  bar: 2,
};

let b = {};
Object.setPrototypeOf(b, a);
console.log(b.foo) // => 1

a.foo = 42;
console.log(b.foo); // => 42

// adds key 'baz' with value 12
a.baz = 12;
console.log(b.baz); // => 12
```

### The Default Prototype

rr

### Iterating Over Objects with Prototypes

### The Prototype Chain

### The `__proto__` Property

### Property Look-Up in the Prototype Chain

### Methods on Object.prototype

### Objects Without Prototypes

### JavaScript OOP Video

### Object Prototypes Summary

JavaScript objects can *inherit properties from other objects*. The object that another object inherits properties from is its **prototype**. In most cases, we use `Object.create` to create objects whose prototype we need to *set explicitly*. We can also use `Object.setPrototypeOf` to *set the prototype of an object that already exists*.

By default, all object literals inherit from `Object.prototype`.

When you access a property on an object, JavaScript looks for the property first in the object, then its prototype chain, all the way up to `Object.prototype`.

## 4. Practice Problems: Object Prototypes

## 5. Function Expressions

## 6. Higher Order Functions

## 7. The Global Object

## 8. Implicit and Explicit Execution Context

## 9. Practice Problems: Implicit and Explicit Function Execution Contexts

## 10. Hard Binding Functions with Contexts

## 11. Practice Problems: Hard Binding Functions with Contexts

## 12. Dealing with Context Loss I

## 13. Dealing with Context Loss II

## 14. Dealing with Context Loss III

## 15. Practice Problems: Dealing with Context Loss

## 16. Summary

## 17. Lesson 2 Quiz 1

## 18. Lesson 2 Quiz 2

