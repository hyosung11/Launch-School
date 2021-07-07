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

## Prototypes

## Iteration

## Common Operations

## Objects vs. Arrays

## Summary

## Exercises