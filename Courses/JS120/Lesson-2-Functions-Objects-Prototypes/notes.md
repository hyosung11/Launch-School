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

Several times we've said that JavaScript objects all have a prototype object and that the prototype chain ends with `Object.prototype`. In reality, there is a way to create objects that don't have a prototype and, hence, do not have a prototype chain that ends with `Object.prototype`. However, as you're well aware by now, JavaScript is full of surprises waiting to bite the unwary developer.

It turns out that you *can* create an object that doesn't have a prototype by setting the prototype to `null`. This technique is a bit unusual and not seen very often. However, it lets you create a "clean" or "bare" object for use as a general key/value data structure. The bare object doesn't carry around a bunch of excess baggage in the form of unneeded properties and prototypes:

```sh
> let a = Object.create(null)
undefined

> Object.getPrototypeOf(a)
null
```

Note that objects created in this way do not have access to Object methods like `Object.prototype.hasOwnProperty()` or `Object.prototype.toString()`. They also don't have a prototype chain that ends with `Object.prototype` -- it ends with `null`.

For the most part, you can *assume that all JavaScript objects have* `Object.prototype` at the top of their inheritance chain. You can also assume that all objects can use the usual selection of Object properties. However, be wary of situations where bare objects may be in use. If you have bare objects in your program, you must remember that the usual `Object` properties and methods don't exist on those objects. That's why you sometimes see code like this:

```js
if (Object.getPrototypeOf(obj) && obj.isPrototypeOf(car)) {
  // obj has a non-null prototype AND
  // obj is in the prototype chain of car
}
```

If you don't first check whether `obj` has a non-`null` prototype, this code will raise an exception if `obj` has a `null` prototype. Even this code won't work properly if `obj` inherits from an object whose prototype is `null`.

Library developers often write code to check for the **bare object edge cases**. Since their code will see use in many different environments, they need to be ready for such unusual objects.

### JavaScript OOP Video

One of our students created an informative video that goes into a lot of depth about these concepts. In particular, he spends a lot of time clarifying how the prototype chain works. We believe it's worth watching the first part of the video now, even though it goes into some detail about constructors and the prototype property of function objects. We'll talk about constructors and the prototype property later, after which you might want to rewatch the first part of the video.

[Watch the video here](https://www.youtube.com/watch?v=-N9tBvlO9Bo). You can stop anytime after reaching the 00:39:20 mark (the end of Example 4).

#### Example 1

```js
const obj = {
  monkey: "yep",
};

console.log(typeof obj === 'object') // true
console.log(typeof obj === 'function') // false

console.log(obj.hasOwnProperty('monkey')) // true
console.log(obj.hasOwnProperty('elephant')) // false

console.log(typeof Object); // 'function'

// Do the exact same thing:
console.log(obj.__proto__ === Object.prototype); // true, "dunder proto" deprecated
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

console.log(obj.constructor === Object); // true

// Trying to reference the plain old object's prototype
console.log(obj.prototype); // undefined

/*
Why does this get confusing?

An object's "prototype" is said to be the next link up the chain, the object that the current object inherits from. In other words, what the current object's __proto__ property references.

But, "prototype" is ALSO the name for a specific property on the object form of Functions.
*/
```

#### Example 2

```js
const func = function() {};
func.call();

console.log(func.__proto__ === Function.prototype); // true
console.log(func.constructor === Function); // true
```

#### Example 3

```js
const arr = ['a', 'b'];
console.log(arr.join('')) // 'ab'

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.constructor === Array); // true

console.log(typeof arr); // 'object'
console.log(arr[0]); // 'a'
console.log(arr[1]); // 'b'
console.log(arr.prototype); // undefined
```

#### Example 4

```js
const arr = ['a', 'b'];
console.log(arr.hasOwnProperty(0)) // true because `arr` has property 0 (the index)

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.constructor === Array); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
console.log(arr.fantastical); // undefined

// Why can we call `from()` from on `Array`?
console.log(Array.from(arguments));

// check
console.log(typeof Array); // 'function'
console.log(typeof Function); // 'function'
console.log(typeof Object); // 'function'

console.log(Array.__proto__ === Function.prototype); // true
console.log(Array.constructor === Function); // true

console.log(typeof Array.prototype); // 'object'
console.log(typeof Object.prototype); // 'object'
console.log(typeof Function.prototype); // 'function'

// Checking the `constructor` property
console.log(Array.prototype.constructor === Array); // true
console.log(Function.prototype.constructor === Function); // true
console.log(Object.prototype.constructor === Object); // true
```

### Object Prototypes Summary

JavaScript objects can *inherit properties from other objects*. The object that another object inherits properties from is its **prototype**. In most cases, we use `Object.create` to create objects whose prototype we need to *set explicitly*. We can also use `Object.setPrototypeOf` to *set the prototype of an object that already exists*.

By default, all object literals inherit from `Object.prototype`.

When you access a property on an object, JavaScript looks for the property first in the object, then its prototype chain, all the way up to `Object.prototype`.

## 4. Practice Problems: Object Prototypes

### 1. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);
```

Answer: It will log `2` because it evaluates `baz.foo` to 1 + `quz.foo` to 1;

### Solution 1

```sh
2
```

Naturally, `qux.foo` returns `1` since `qux` has a `foo` property with that value. However, `baz` doesn't have its "own" copy of the `foo` property. Therefore, JavaScript searches the prototype chain for a `foo` property and finds the property in `qux`. Thus, `baz.foo` is also `1` and the sum of the two values is `2`.

### 2. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2; // line 3

console.log(baz.foo + qux.foo);
```

Answer: 3. The value of `baz.foo` returns `2` on line 3. `qux.foo` returns `1` on line 1. The assignment of `baz.foo` on line 3 does not mutate the `qux` object because when assigning a property on an object, JavaScript always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, `foo` becomes an "own" property of `baz`. (copied from notes)

### Solution 2

```sh
3
```

This code is very similar to that in problem 1. However, this time, we assign `baz.foo` to a value of `2`. Property assignment doesn't use the prototype chain; instead, it creates a new property in the `baz` object named `foo`.

When we add `baz.foo` and `qux.foo` together, `baz.foo` returns the value of its "own" `foo` property, while `qux.foo` returns the value of its "own" `foo` property. Thus, the result is `3`.

### 3. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code.

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);
```

Answer: 4. The reassignment of `qux.foo` to `2` is inherited by the `baz` object. Thus, `baz.foo` is `2`, and the sum of the two values is `4`.

### Solution 3

```sh
4
```

This code is also very similar to problem 1. This time, though, we assign the value `2` to `qux.foo`. Since `baz` doesn't have its "own" copy of the `foo` property, JavaScript uses the prototype chain to look up `baz.foo`, and it finds the `foo` property in `qux`. The result is equivalent to `2 + 2`, or `4`.

An important consideration when dealing with prototypes is that *objects hold a reference to their prototype objects*. If the object's prototype changes in some way, the changes are observable in the inheriting object as well.

### 4. As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object.

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;
```

Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown:

```js
let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
```

### Solution 4

Iterative Solution

```js
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }

    obj = Object.getPrototypeOf(obj);
  }
}
```

Recursive Solution

```js
function assignProperty(obj, property, value) {
  if (obj === null) {// property not found
    return;
  } else if (obj.hasOwnProperty(property)) {
    obj[property] = value;
  } else {
    assignProperty(Object.getPrototypeOf(obj), property, value);
  }
}
```

### 5. Consider the following two loops:

```js
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`)
}
```

```js
Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});
```

If `foo` is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ.

Answer:

~~for/in will log all the properties of the foo object not just the enumerable properties

`Object.keys` will log only the enumerable properties of the foo object.~~

### Solution 5

They don't always produce the same results since the second loop only iterates over `foo`'s "own" properties, but the first loop iterates over all of the object's enumerable properties, including those inside its prototype chain. For instance, assume that the following code precedes the loops:

```js
let bar = { a: 1, b: 2 };
let foo = Object.create(bar);
foo.a = 3;
foo.c = 4;
```

With this code, the first loop (`for/in`) outputs:

```sh
a: 3        // from foo
c: 4        // from foo
b: 2        // from bar
```

The second loop (`Object.keys()`) outputs:

```sh
a: 3        // from foo
c: 4        // from foo
```

The two loops produce the same results only when the prototype chain doesn't contain enumerable properties.

### 6. How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype?

Answer: set it to `null` 
Use Object.getPrototypeOf()

### Solution 6

You can create an object without a prototype by using `Object.create` with a `null` argument:

```js
let bareObject = Object.create(null);
```

If you need to check whether an object has a prototype, you can test the value produced by `Object.getPrototypeOf`:

```js
if (Object.getPrototypeOf(obj)) {
  // obj has a prototype
} else {
  // obj does not have a prototype
}
```

End 20220302 20:19

## 5. Function Expressions

Before you start this assignment, take a little time to review the section on the [three ways to define](https://launchschool.com/books/javascript/read/functions#threewaystodefineafunction) a function from our introductory JavaScript book.

### 1. Function Declarations vs Function Expressions

Take a look at the following function definition.

```js
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

This code works since *the JavaScript engine runs our code in two passes*. During the first pass, it does some preparatory work, while the second executes the code. One action that occurs during the first pass is called **hoisting**; the engine effectively moves function declarations to the top of the program file in which they're defined, or the top of the function in which they are nested. The result is that the above code acts as though you wrote it like this:

```js
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('How are you today?');
```

Note that you'll never see this hoisted code when working with JavaScript. *Hoisting is an internal step performed by the engine*; it doesn't move any code around. However, it's useful to think of hoisting in this way, so long as you understand that your code is not changed.

Hoisting isn't limited to function declarations. We'll discuss it in more detail later in the curriculum.

Function definitions that are the first thing on a line are known as **function declarations**. On the other hand, **function expressions** are function definitions that are part of an expression. For instance, the code in the above example shows `prompt` as a function declaration; the next example shows `foo` as a function expression: it is *not* a declaration.

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

foo();
const foo = function() {
  console.log("this is foo");
};
```

```sh
$ node functions.js
this is bar
/Users/foobar/projects/functions.js:6
foo();
^

ReferenceError: Cannot access 'foo' before initialization
```

Typically, we assign a function expression to a variable or object property, pass it to another function, or return it to a calling function. For instance:

```js
let prompt = function() { // Assign to a variable

};

[1, 2, 3].forEach(function(elem) { // pass to another function
  console.log(elem);
});


function makeIncrementer(increment) {
  return function(value) { // return to caller
    return value + increment;
  }
}
```

Notice that we can define function expressions without giving them a name. You may argue that `prompt` is the name of the function we defined on line 1, but that's not the case: instead, we've a*ssigned an unnamed function to the prompt variable*. Such unnamed functions are called **anonymous functions**. Anonymous functions are commonplace in JavaScript code, so be prepared to understand them. You've already seen examples with the callback functions for array methods like `forEach` and `map`: the callback functions for these methods are often anonymous functions.

```js
let squaredNums = [1, 2, 3].map(function(num) {
  return num * num;
}); // => [1, 4, 9]
```

Function expressions don't have to be anonymous. You can name a function expression:

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

The function name on a function expression is visible inside the function, which is useful when working with recursive functions. We won't trouble you with an example at this time.

End 20220302 21:35

### 2. Arrow Functions

There's no declaration syntax for arrow functions; arrow functions are always function expressions. That means that we often pass them around or assign them to variables or properties. Also, arrow functions are **always anonymous**: there's no way to define a named arrow function. Arrow functions are either immediately invoked, assigned to variables or properties, or passed around as arguments and return values. We'll discuss immediately invoked functions in a later course.

### 3. First-Class Functions

You'll often see the phrase **first-class functions** or **first-class objects** when discussing JavaScript functions. It merely refers to the fact that functions in JavaScript are values that we can assign to variables and properties, pass them to other functions, or return them from another function.

Functions of all kinds, including declared functions, can be treated as values:

```js
function say(words) {
  console.log(words);
}

let speak = say;

speak('Howdy!');   // logs 'Howdy'
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

The takeaway is that you *should not invoke functions when you want to use them as* **values**. Use invocation only when you need to run the code in the function.

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

The point we want you to remember is that you can *treat any function as you would any other JavaScript value: remove the invocation syntax, and you've got an expression whose value is a function*. You can do whatever you want with that value (at least within the limits of what JavaScript can do).

### 4. Type of a Function Value

Since functions are first-class values in JavaScript, and all values in JavaScript have a type, functions must also have a type. Right? That's correct! Let's use the handy `typeof` operator to determine the type of a function value:

```js
let myFunc = function() {};
console.log(typeof myFunc); // 'function'
```

### 5. Function Expressions Summary

Functions in JavaScript are first-class values, just like any other value in JavaScript. You can use them any place that you can use an expression. To use a function as an expression, write its name without the parentheses of invocation. All functions have a type of `function`, which is a kind of object with properties and methods.

## 6. Higher Order Functions

The fact that JavaScript treats functions as values means that we can have a special kind of function in our programs: a **higher-order function**. A higher-order function is a function that has at least one of the following properties:

1. It takes a function as an argument.
2. It returns a function.

### 1. Functions that Accept Functions as Arguments

We've seen many examples of functions that have the first property. Specifically, array methods like `forEach`, `map`, `filter`, and `reduce` each take a function argument. As these methods show, functions that take other functions give the developer a lot of power and flexibility.

Let's pretend that we don't have a `map` method on JavaScript arrays. If we want to implement some code that squares all the elements of an array, we'd probably come up with something like this:

```js
function mapNumsToSquares(nums) {
  let squaredArray = [];

  for (let index = 0; index < nums.length; index++) {
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

Can we abstract away the similar structure of the two functions and leave the specific mapping operation up to the function's caller to decide? That's what `map` does for us: it abstracts away the mechanics of mapping an array and leaves the details for the developer to provide at runtime. She does that by providing a function as an argument. The result is much more powerful and versatile:

```js
arrayOfNums.map(num => num * num);
arrayOfStrings.map(string => string.toUpperCase());
```

The `map` method, along with several other array methods, is a higher-order function since it takes another function as an argument.

### 2. Functions that Return a Function

In the previous section, we saw an example of how a higher-order function that takes another function lets us write elegant and flexible code. Let's look at another useful application of higher-order functions by having one return another function.

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

This implementation works, but if we're using a particular language over and over, we need to provide the language string every time. That's not a big deal, but it would be useful if we only had to provide the language once. Instead of a `greet` function, let's implement a greeter factory that lets us create a greeter function for a given language.

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

### 3. Higher Order Functions Summary

Higher-order functions are functions that return another function or take another function as an argument. Higher-order functions let the programmer use powerful and flexible abstractions.

## 7. The Global Object

JavaScript creates a global object when it starts running. It serves as the i**mplicit execution context** for function invocations, a term that we'll study later in this lesson. For now, we'll use the term casually, but we'll learn much more later.

In Node.js, the global object is the object named `global`; in the browser, it's the `window` object. You can investigate this in the node REPL or a browser's console:

```sh
> global
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: [Getter/Setter],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
```

The global object is available everywhere in your program and houses important global properties. In the previous course, we talked about **global values** such as `Infinity` and `NaN`, and **global functions**, such as `isNaN` and `parseInt`. All these entities are properties of the global object! In your console, you can look at the global object to examine those properties.

```sh
> global.isNaN      // [Function: isNaN]
> global.Infinity   // Infinity
```

Note: don't use `isNaN` in your code. Use `Number.isNaN` instead. The bare `isNaN` function has some odd behavior:

```sh
Number.isNaN('I am not a number');   // false - this is a correct value
isNaN('I am not a number');          // true - string gets coerced to NaN
```

As with other JavaScript objects, you can add properties to the global object at any time:

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

### 1. The Global Object and Undeclared Variables

The global object has an interesting property: whenever you assign a value to a variable without using the `let`, `const`, or `var` keywords (we'll discuss `var` later), the variable gets added to the global object as a property. Let's see an example:

```js
foo = 'bar';
global.foo; // => 'bar' (in Node)
window.foo; // => 'bar' (in a browser)
```

Without a keyword, *the variable gets added to the global object as a property*. You can even access such variables without using the global object as the caller:

```js
foo = 'bar';
foo; // => 'bar'
```

Whenever you try to access a variable for which there are no local or global variables with the variable's name, JavaScript looks at the global object and looks for a property with that name. In this example, since there are no local or global variables named `foo`, JavaScript looks in the global object and finds the `foo` property. As a result, line `2` is identical to `global.foo`; it returns the value of the property `foo` from the global object.

We discuss the global object here since you need to know where JavaScript gets all those global entities like `NaN`, `Infinity`, and `setTimeout`. It's not very often that you'll need to modify the global object, but you'll sometimes use it to set properties in Node that you need in multiple modules. We'll discuss Node modules in the next course.

## 8 Implicit and Explicit Execution Context

### 8.1 Execution Context

Earlier, we met the keyword `this` when talking about object methods. At the time, we said that `this` refers to the object that contains the method. That's true, but there's a bit more nuance to how JavaScript determines the value of `this`. In this assignment, we'll discuss `this` and how JavaScript determines its value in a function or method call.

If we're discussing `this`, why, then, does this section's title refer to **execution context**? The execution context -- or **context** -- is a concept that refers to the **environment** in which a function executes. In JavaScript, it most commonly refers to the current value of the `this` keyword. When we talk about the execution context of a function or method call, we're talking about the value of `this` when that code executes. The context depends on *how the function or method was invoked*, not on where the function was defined.

Put another way, how you invoke a function or method determines its execution context for that invocation. It doesn't matter how you define the function or method, nor does it matter where or when you call it. The only factor that determines the context is how you call the function or method. In other words, two invocations of the same function or method can have very different contexts depending on how you make those calls. Remember this point: it's crucial to understanding JavaScript.

There are two basic ways to set the context when calling a function or method:

1. **Explicit**: The execution context that you set explicitly.
2. **Implicit**: The execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

Setting the execution context is also called **binding** this or **setting the binding**. A binding is something that ties two things together. In this case, it refers to the fact that a call binds `this` to a specific object when the function or method is called.

### 8.2 Function Execution Context (Implicit)

Every JavaScript function call has an execution context. In other words, the `this` keyword is available to every function in your JavaScript program. Every time you call that function, JavaScript binds some object to `this`.

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

That makes sense at some level. Since all function calls have an execution context, and since a regular function call does not provide an explicit context, JavaScript supplies an implicit context: the global object. We say that this execution context is **implicit** since the function invocation doesn't supply an explicit alternative.

#### 8.2.1 Strict Mode and Implicit Context

We're not yet ready to learn about JavaScript's "strict mode", but there is one aspect of strict mode that you should be aware of: when strict mode is enabled, the implicit `this` is assigned to `undefined` instead of the global object:

```js
"use strict"; // the quotes are required

function foo() {
  console.log("this refers to: " + this);
}

foo(); // this refers to: undefined
```

We'll learn more in the next course. For now, just be aware of this behavioral change. You may run into strict mode without realizing it. For instance, it shows up in JavaScript classes and in Coderpad, the environment we use for assessment interviews.

### 8.3 Method Execution Context (Implicit)

We learned earlier that when you call a method that belongs to an object, the execution context inside that method call is the object used to call the method. We call that **method execution context**. Is this an implicit or explicit execution context, however? At first glance, it's easy to look at that calling object as explicitly providing the context. You're not really wrong if that's how you see it. However, method execution syntax is usually said to provide an implicit context; we're using an explicit object to call the method, but JavaScript is interpreting that object as the implicit context. For this reason, we usually say that method calls provide an implicit execution context.

```js
let foo = {
  bar: function() {
    console.log(this);
  }
};

foo.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }
```

It's easy to see that the execution context inside a method call is the object used to call the method.

Be careful, however. The first-class nature of JavaScript functions has ramifications for the execution context. Remember that the context is determined solely by how you call the function or method. Here, `foo.bar()` is considered a method call since we *call it as a method*; that is, we use the method call syntax `object.method()`. Since JavaScript functions are first-class objects, `bar` can be called in other ways that change the context:

```js
let baz = foo.bar;
baz(); // Object [global] {...}
```

In this code, we assign the `foo.bar` method to the `baz` variable. The `foo.bar` property and the `baz` variable now refer to the same function object. What should `baz()` log then? Since `baz` references a method of the `foo` object, you may think that its execution context must be `foo`. That's wrong though: as we've repeated several times, the execution context is determined entirely by how a function or method is called. Since we're calling `baz` as a standalone function, its execution context is the global object, not the `foo` object.

### 8.4 Explicit Function and Method Execution Context

Using parenthesis after a function or method name is not the only way to invoke it. As we've seen, when you invoke a function with parentheses, JavaScript uses the global object as the implicit context; when you invoke a method, it uses the object that you used to call the method as the implicit context.

There are, however, several ways to subvert this behavior. You can provide an explicit context to any function or method, and it doesn't have to be the global object or the object that contains the method. Instead, you can use any object -- or even `null` -- as the execution context for any function or method. There are two main ways to do that in JavaScript: `call` and `apply`.

#### 8.4.1 Explicit Execution Context with `call`

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

#### 8.4.1 Explicit Execution Context with `apply`

The apply method works in much the same way as call. The only difference is that apply uses an array to pass any arguments to the function. Here's the general syntax:

```js
someObject.someMethod.apply(context, [arg1, arg2, arg3, ...])
```

`apply` is handy when you have the list of arguments in an array. With modern JavaScript (ES6 and higher), `apply` isn't needed since *you can use call in conjunction with the spread operator to accomplish the same thing*:

```js
let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);
```

### 8.5 Implicit and Explicit Execution Context Summary

All JavaScript functions and methods execute within an execution context, sometimes called its `this` binding. How `this` gets bound depends entirely on how the function is invoked. You can't tell a function's execution context by merely looking at how and where it's defined; y*ou must examine the invocation itself*.

Regular function calls use the global object as their execution context, while method calls use the calling object as their context. You can override this behavior by setting the execution context explicitly with either `call` or `apply`.

The mechanics of context binding is an essential but difficult concept. Most difficulties arise from forgetting that *JavaScript does not use lexical scoping rules to determine the binding*. For instance, if you use `this` inside a method of `obj`, you expect that `this` refers to `obj`. However, that's not always the case. It's important to remember that the rules for `this` are entirely different from the rules for variable scope. While a variable's scope is determined by where you write the code, `this` *depends on how you invoke it*.

The execution context is determined by *how you invoke a function or method*. We can't emphasize this enough.

## 9 Practice Problems: Implicit and Explicit Function Execution Contexts

### 9.1 What will the following code output? Try to determine the results without running the code.

```js
function func() {
  return this;
}

let context = func(); // line 5

console.log(context);
```

My Answer: The code will output `global`, the global object in Node, and `window` in a browser.

#### 9.1 Solution

The global object. In Node, that's `global`; in a browser, that's `window`.

Since line 5 calls `func` as a function, the implicit context for `func` is the global object, so it returns the global object.


==========================================================================

### 9.2 What will the following code output? Explain the difference, if any, between this output and that of problem 1.

```js
let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);
```

My Answer: I think `obj`. (I got it partially right but didn't explain why.)

#### 9.2 Solution

Unlike problem 1, this code outputs the object `obj` since it invokes `func` as a method. The output looks like this in Node:

```sh
{ func: [Function: func] }
```

As a method invocation, it receives an implicit execution context that refers to the object used to invoke it.

### 9.3 What will the following code output?

```js
message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // line 7

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage(); // line 15
```

My Answer: This confuses me. `message` isn't declared with a keyword, so does that mean it's execution context is the global object? I don't know?

#### 9.3 Solution

```sh
Hello from the global scope!
Hello from the function scope!
```

The first `log` operation is generated by the function call, `deliverMessage()` on line 7. Since this is a function invocation, the implicit function execution context is the global object; the global property `message`, which is often called a **global variable**, is referenced. The second `log` operation is generated by the method call `foo.deliverMessage()` on line 15. Since the implicit function execution context for a method invocation is the calling object, this resolves to `foo.message`.

### 9.4 What built-in methods have we learned about that we can use to specify a function's execution context explicitly?

My Answer: `Function.prototype.call()` and `Function.prototype.apply()` for arrays

#### 9.4 Solution

The Function methods `call` and `apply` let us explicitly set the function execution context.

### 9.5 Take a look at the following code snippet. Use `call` to invoke the `add` method but with `foo` as execution context. What will this return?

```js
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};
```

My Answer:

```js
add.call(foo); // => 3
```

Incorrect construction but right return value

#### 9.5 Solution

```js
bar.add.call(foo); // => 3
```

Since we invoke `call` on `bar.add` with `foo` as the explicit context, the `add` method uses `foo.a` and `foo.b` to determine the results, not `bar.a` and `bar.b`. Thus, the return value is `3`.

## 10. Hard Binding Functions with Contexts

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

### 10.1 Hard Binding Functions with Contexts Summary

In this assignment, we saw a third way to specify the execution context. Unlike `call` and `apply`, though, `bind` *returns a new function that is permanently bound to the context that's provided to bind as the first argument*. You cannot alter the execution context of the resulting function, even if you use `call`, `apply`, or try calling `bind` a second time.

## 11. Practice Problems: Hard Binding Functions with Contexts

### 11.1 What method can we use to bind a function permanently to a particular execution context?

My Answer: `Function.prototype.bind`

Solution: We can use the `bind` method on function objects to permanently bind a function to an execution context.

### 11.2 What will the following code log to the console?

```js
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
```

My Answer: 'JavaScript' => this is wrong

### 11.2 Solution

Nothing. Unlike `call` and `apply`, `bind` doesn't invoke the function used to call it. Instead, it returns a new function that is permanently bound to the context argument.

### 11.3 What will the following code output?

```js
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo());
console.log(bar());
```

My Answer:

// ?
// 5

### 11.3 Solution

```sh
NaN
5
```

The function `foo` looks for properties `a` and `b` on the global object since it is invoked as a function and `this` is bound to the global object. Both `this.a` and `this.b` evaluate to `undefined`, resulting in a `NaN` value. `bar`, however, is explicitly bound to obj on line 10, and, as a result, references that object's `a` and `b` properties when it is invoked.

If you use strict mode (discussed in more detail in JS130) to run the code, it will raise a `TypeError: Cannot read property 'a' of undefined` error when calling `foo()`.

### 11.4 What will the code below log to the console?

```js
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
negativity.logMessage();
```

My Answer:

// ?

### 11.4 Solution

```sh
JavaScript makes sense!
```

Since `bar` is bound to `positivity` as the return value of the `bind` invocation on line 13, `positivity`'s property `message` is logged by the function call on the last line, despite the fact that the function is invoked as a method on the `negativity` object.

### 11.5 What will the code below output?

```js
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
```

My Answer: // 'Amazebulous!`

### 11.5 Solution

Once a function's context gets bound using `bind`, its context can't be changed, even with `call` and `apply`. In keeping with this, the last line of our code outputs "Amazebulous!", because the function `bar`'s context has been permanently bound to `obj`.

## 12. Dealing with Context Loss I

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

#### 13.1.3 Solution 3: Use `bind`

#### 13.1.4 Solution 4: Using an Arrow Function

## 14. Dealing with Context Loss III

## 15. Practice Problems: Dealing with Context Loss

## 16. Summary

## 17. Lesson 2 Quiz 1

## 18. Lesson 2 Quiz 2

