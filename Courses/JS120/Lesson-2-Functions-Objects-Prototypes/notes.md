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

### 1. Prototypes

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

### 2. The Default Prototype

As mentioned above, all JavaScript objects have access to the `hasOwnProperty()` method. Where does JavaScript get that method? When we create a new object, we don't have to add our own `hasOwnProperty()` method. Instead, JavaScript obtains the method from the object's prototype. All JavaScript objects inherit from a prototype. For instance:

```sh
> let a = {}
undefined

> Object.getPrototypeOf(a)
{}
```

Passing an empty object to `Object.getPrototypeOf()` returns a default prototype object. That object is the **prototype** for all objects created by using the object literal syntax (e.g., `{ a: 2 }`). The default prototype is the prototype object of the `Object` constructor, `Object.prototype`. We'll see what that means a little later. For now, all you need to know is that Object.prototype provides the default prototype.

### Iterating Over Objects with Prototypes

Now is an excellent time to revisit the [Iteration](https://launchschool.com/books/javascript/read/objects#iteration) section from the Objects chapter of our Introduction to Programming With JavaScript book. It discusses the impact of object prototypes on iteration. In particular:

- A `for/in` loop iterates over an object's properties. The iteration includes properties from the objects in its prototype chain. Use `hasOwnProperty()` to skip the prototype properties.

- `Object.keys()` returns an object's "own" property keys -- you do not need to use `hasOwnProperty()`.

Note that both `for/in` and `Object.keys()` deal with **enumerable properties**, which is merely a way of talking about properties you can iterate over. Not all properties are enumerable. In particular, most properties and methods of the built-in types are not. Usually, any properties or methods you define for an object are enumerable. You can check whether a property is enumerable with the `Object.prototype.propertyIsEnumerable()` method.

```js
let arr = [1, 2, 3];
console.log(arr.propertyIsEnumerable('length'));                     // false
console.log(arr.propertyIsEnumerable('2'));                          // true
console.log(arr.propertyIsEnumerable('forEach'));                    // false
console.log(Array.prototype.propertyIsEnumerable('forEach'));        // false

function Foo() {
  this.bar = "qux"
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar'));                        // true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); // true
```

You do not have to remember how to use `propertyIsEnumerable`.

### The Prototype Chain

Earlier, we said that all JavaScript objects could inherit from another object using the prototype model. Since the prototype of an object is itself an object, the prototype can also have a prototype from which it inherits. For example:

```js
let a = {
  foo: 1,
};

let b = {
  bar: 2,
};

let c = {
  baz: 3,
};

Object.setPrototypeOf(c, b);
Object.setPrototypeOf(b, a);

console.log(c.bar); // => 2
console.log(c.foo); // => 1
```

In this code, object `c` inherits from object `b` which, in turn, inherits from `a`. Stated differently, `b` is the prototype of `c` and `a` is the prototype of `b`. All properties that you can access on `a` or `b` are now available on `c`. We say that objects `b` and `a` are part of the **prototype chain** of object `c`. The complete prototype chain also includes the default prototype, which is the prototype of object `a` in this case. Since the prototype of `Object.prototype` is `null`, the complete prototype chain looks like this:

```sh
c --> b --> a --> Object.prototype --> null
```

### The `__proto__` Property

Many older JavaScript programs use a property named `__proto__`, which is pronounced **dunder proto**, instead of `Object.setPrototypeOf` and `Object.getPrototypeOf`. "dunder" is a shortened version of "double underscore", which alludes to the double underscores at the beginning and end of the name. The `__proto__` property is a *deprecated*, non-hidden version of the `[[Prototype]]` property. As a rule, you should only use `__proto__` if you need to support very old browsers or old versions of Node, or as a convenient shortcut with temporary code or debugging operations. You may run into code that uses it, so you need to at least be aware of it.

### Property Look-Up in the Prototype Chain

When you access a property on an object, JavaScript first looks for an "own" property with that name on the object. If the object does not define the specified property, JavaScript looks for it in the object's prototype. If it can't find the property there, it next looks in the prototype's prototype. This process continues until it finds the property or it reaches `Object.prototype`. If `Object.prototype` also doesn't define the property, the property access evaluates to `undefined`.

The implication here is that when two objects in the same prototype chain have a property with the same name, the object that's closer to the calling object takes precedence. Let's see an example:

```js
let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2;
```

How about *setting a property*? What do you think happens when we set the `foo` property on object `c` to a different value?

```js
c.foo = 42;
```

Is `b.foo` assigned to `42` by this code? How can you test that in node?

```js
let a = {
  foo: 1,
};

let b = {
  foo: 2,
};

Object.setPrototypeOf(b, a);

let c = Object.create(b);
console.log(c.foo); // => 2
c.foo = 42;
console.log(c.foo); // => 42
console.log(b.foo); // => 2
```

Interesting! Object `b` wasn't mutated! When assigning a property on a JavaScript object, it always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, `foo` becomes an "own" property of `c`:

```js
console.log(c.hasOwnProperty('foo')); // => true
```

The discussion of inheriting *properties* from other objects *applies to methods as well*. Methods in JavaScript are merely *properties that refer to functions*. Thus, when we talk about object properties, we also mean methods.

### Methods on Object.prototype

The `Object.prototype` object is at the top of all JavaScript prototype chains. Thus, its methods are available from any JavaScript object provided you don't explicitly use something like `null` as the prototype object. Here are 3 useful methods:

- `Object.prototype.toString()` returns a string representation of the object.
- `Object.prototype.isPrototypeOf(obj)` determines whether the object is part of another object's prototype chain.
- Object.prototype.hasOwnProperty(prop) determines whether the object contains the property.

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

