# INTRODUCTION TO PROGRAMMING: Objects

Object Oriented Programming is a programming paradigm that centers around modeling problems as **objects** that have **behavior** (they perform actions) and **state** (they have characteristics that distinguish between different objects). JavaScript objects support this paradigm, but we won't need it in this book. For now, we'll discuss objects as complex data structures, similar to arrays.

## What are Objects?

* Objects store a collection of **key-value pairs**: each item in the collection has a name that we call the **key** and an associated **value**
* Arrays (by contrast) associate values with ordered indexes.
* In other languages Objects are called dictionaries, associate arrays, maps, and hashes.

An object's keys are strings, but the values can be any type, including other objects. We can create an object using **object literal** syntax:

```js
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

// Written as a single line (handy in node):
> let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'] }
```

This code shows an object named `person` that has 3 key-value pairs:

* The name of the person, a string, defined by the `name` key.
* The age of the person, a number, defined by the `age` key.
* A list of the person's hobbies, an array of strings, defined by the `hobbies` key.

* Braces (`{}`) delimit the list of key-value pairs contained by the object. 
* Each key-value pair ends with a comma (`,`), and each pair has a key, a colon `(:),` and a value. 
* The comma that follows the last pair is optional. 
* Though the keys are strings, we typically omit the quotes when the key consists entirely of alphanumeric characters and underscores.
* The values of each pair can be any type.

We can access a specific value in an object in two ways: 
1. dot notation and 
2. bracket notation.

```js
> person.name                 // dot notation
= 'Jane'

> person['age']               // bracket notation
= 37
```

With dot notation, we place a dot (.) and a key name after the variable that references the object. With bracket notation, we write the key as a quoted string and put it inside square brackets. Most developers prefer dot notation when they can use it. However, if you have a variable that contains a key's name, you must use bracket notation:

```js
> let key = 'name'
> person[key]
```

```js
// Use both dot notation and bracket notation to add two new key-value pairs to the `person` object.
> person.height = '5 ft'
= '5 ft'

> person['gender'] = 'female'
= 'female'

> person
= { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }
```

```js
// Use the `delete` keyword to remove something from an existing object:
> delete person.age
= true

> delete person['gender']
= true

> delete person['hobbies']
= true

> person
= { name: 'Jane', height: '5 ft' }

// `delete` removes the key-value pair from the object and returns `true` unless it cannot delete the property (for instance, if the property is non-configurable).
```

Key-value pairs are also called object **properties** in JavaScript. We can also use "property" to refer to the key name; the meaning is typically clear from context. For instance, we can talk about the `name` property for the `person` object without mentioning the value.

If a variable declared with `const` is initialized with an object, you can't change what object that variable refers to. You can, however, modify that object's properties and property values:

```js
> const MyObj = { foo: "bar", qux: "xyz" }
> MyObj.qux = "hey there"
> MyObj.pi = 3.1415
> MyObj
= { foo: 'bar', qux: 'hey there', pi: 3.1415 }

> MyObj = {} // Uncaught TypeError: Assignment to constant variable.
```

As with arrays, this behavior can be confusing, and it occurs because of the same "variables are pointers" concept that we'll discuss in the next chapter. Essentially, a `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change a property in a `const` object, but we can't change which object the `const` points to.

* Use `Object.freeze` with objects to freeze the property values of an object (just like you can with arrays):

```js
> const MyObj = Object.freeze({ foo: "bar", qux: "xyz" })
> MyObj.qux = "hey there"
> MyObj
= { foo: 'bar', qux: 'xyz' }
```

As with arrays, `Object.freeze` only works one level deep in the object. If your object contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen.

## Objects vs. Primitives

You may remember that JavaScript has two categories of data types: primitives and objects. The primitive types are strings, numbers, booleans, `null`, and `undefined`, bigints, and symbols. Primitive types are the simplest, most basic types in JavaScript.

Objects include, but aren't limited to, the following types:
* Simple Objects
* Arrays
* Dates
* Functions

We learned about simple objects in the previous section; they're structures that contain multiple named values. Arrays are also objects, but they use integer indexes instead of keys. We learn about Date and Function objects in the Core Curriculum.

Objects are complex values composed of primitive values or other objects. For example, an array object (remember: arrays **are** objects) has a `length` property that contains a number: a primitive value. Objects are usually (but not always) _mutable_: you can add, remove, and change their various component values.

Primitive values are always _immutable_; they don't have parts that one can change. Such values are said to be `atomic`; they're indivisible. If a variable contains a primitive value, all you can do to that variable is use it in an expression or _reassign_ it: give it an entirely new value. All operations on primitive values evaluate as new values. Even something like` 0 + 0` evaluates to a new value of `0`.

```js
> let number = 20
> let newNumber = number + 1
> newNumber
= 21

> number
= 20

> let object = { a: 1, b: 2, c: 3 }
> object.c = object.c + 1
= 4

> object
= { a: 1, b: 2, c: 4 }
```

The above example illustrates the difference between an immutable primitive value and a mutable object. The `+` operation on line 2 returns a new value (`21`), and assigns it to `newNumber`; the original value of `number` (`20`), remains unchanged. In contrast, writing a new value to the `object`'s `c` property on line 10 changes the object's value. Note, however, that the `c` property has an entirely new number in it, precisely like what happened on line 2.

### What Things Aren't Objects or Primitives?

Objects and primitive values are the data and functions that you use in your program. Anything that isn't data or a function is neither a primitive value nor an object. That includes:

* variables and other identifiers such as function names
* statements such as `if`, `return`, `try`, `while`, and `break`
* keywords such as `new`, `function`, `let`, `const`, and `class`
* comments
* anything else that is neither data nor a function

Note that variables and other identifiers have or reference objects or primitive values, but the names, by themselves, are not.

## Prototypes

* JS objects can **inherit** from other objects.
* When an object `a` inherits from object `b`, we say that `b` is the **prototype** of `a`. 
* The practical implication is that `a` now has access to properties defined on `b` even though it doesn't define those properties itself.

Object prototypes and inheritance have a great deal of relevance in Object Oriented Programming (OOP). We discuss these concepts here since it is relevant to our discussion of iterating over object properties in the next section. All you need to know right now is that inheritance lets one object use the properties defined by another object and that prototypes implement inheritance in JavaScript.

The static method` Object.create` provides a simple way to create a new object that inherits from an existing object:

```js
let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'
```

`Object.create` creates a new object and sets the prototype for that object to the object passed in as an argument. Our example creates a new object named `studentBob` that uses `bob` as its prototype. That is, it creates an inheritance relationship from `studentBob`, the **child** object, to `bob`, the **parent** object.

Since `studentBob` inherits from `bob`, we can use the `name` property even though `studentBob` doesn't explicitly define it. `Object.create` is one way to use inheritance in JavaScript.

## Iteration

Since most objects have multiple properties, you may want to iterate over an object's keys, values, or both. There are several ways to perform these operations in JavaScript.

### The for/in loop

* The `for/in` loop behaves similarly to an ordinary `for` loop.
* The syntax and semantics are easier to understand since you don't need an initializer, ending condition, or increment clause.
* Instead, the loop iterates over all the keys in the object. 
* In each iteration, it assigns the key to a variable which you then use to access the object's values.

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // => Bob
                              //    30
                              //    6 ft
```

In the above example, we iterate over the `person` object using the `for/in` loop. Line 7 declares a variable `prop` which, in each iteration, receives a key from the object until the object runs out of key-value pairs. We use `prop` inside the loop body to access and log the corresponding value.

Note that we use bracket notation within the loop. We can't use dot notation here since `prop` is a variable that contains a property name. The name `prop` is not the actual property name. That distinction is subtle, so stop a moment to think about it.

For instance, in the second iteration of the loop, `prop` will be set to `age`. If we try to use `person.prop`, though, it will evaluate to undefined since prop is not one of the property names in the `person` object. We actually want `person.age`, but we can't use that since we'll want a different property name during each iteration. When we write `person[prop]`, `prop` gets evaluated as a variable. Thus, `person[prop]` gets evaluated as `person['age']`, and that returns the value of the desired property.

One feature—or downside, depending on how you look at it—of `for/in` is that it iterates over the properties of an object's prototypes as well:

```js
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3
          //    4
          //    1
          //    2
```

The first two items output by the above code are the "own properties" of `obj2`, and those are followed by the properties of the prototype object (`obj1`).

This behavior is undesirable when you want to limit iteration to an object's **own properties**, i.e., properties it defined for itself, not properties it inherited. We can use the `hasOwnProperty` method to get around that problem. It takes the name of a property and returns `true` if it is the name of one of the calling object's own properties, `false` if it is not.

```js
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} // => 3
  //    4
```

### Object.keys

The `Object.keys` static method returns an object's keys as an array. You can iterate over that array using any technique that works for arrays. For instance:

```js
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

let personKeys = Object.keys(person);
console.log(personKeys);          // => ['name', 'age', 'height']
personKeys.forEach(key => {
  console.log(person[key])
});                               // => Bob
                                  //    30
                                  //    6 ft

// Note that `Object.keys` returns the object's own keys: it does not include any keys from the prototype objects.
```

### Order of Object Properties

Older versions of the ECMAScript standard (prior to ES6) don't guarantee the iteration order for an object's property keys. Many JavaScript engines took advantage of this non-guarantee. In older versions of JavaScript, you can't rely on any particular iteration order. Even in the same engine, you might get different results in separate runs of a program.

Modern versions of the standard (ES6+) do guarantee the iteration order for an object's property keys. However, this order is somewhat complex. The order is based on:

* the types of the property keys (strings come before symbols)
* the values of the keys (non-negative integers come first), and
* the order in which the keys were added to the object.

It's tempting to rely on this predictable order, but the order isn't straightforward except in the simplest cases.

In the end, it's not wise to make any assumptions about the iteration order for object property keys. You can't depend on it.


## Common Operations

## Objects vs. Arrays

## Summary

## Exercises