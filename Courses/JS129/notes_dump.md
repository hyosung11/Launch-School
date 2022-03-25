# Lesson 3: Object Creation Patterns


## 9. Built-in Constructors

JavaScript comes with a variety of built-in constructors and prototypes that let you instantiate useful objects. These constructors work like constructors for other objects; they're used with the `new` keyword to create objects. In this assignment, we will discuss some of JavaScript's built-in constructors, their prototypes, and how you can extend them.

### 9.1 The `Array` constructor

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

#### 9.1.1 `Array.prototype`

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

#### 9.1.2 Static Array Methods

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

### 9.2 The `Object` constructor

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

#### 9.2.1 `Object.prototype`

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

#### 9.2.2 Static `Object` Methods

The list below shows some commonly used static `Object` methods. You've already seen and used several. Feel free to follow the links and read more about these methods, but you don't have to memorize them. Instead, learn what's available. You can look them up later when you need to use them:

- `Object.assign()`
- `Object.create()`
- `Object.entries()`
- `Object.freeze()`
- `Object.isFrozen()`
- `Object.keys()`
- `Object.values()`

### 9.3 The Date Constructor

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

#### 9.3.1 Date.prototype

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

### 9.4 The `String` Constructor

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

#### 9.4.1 `String` Without `new`

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

### 9.5 The `Number` and `Boolean` Constructors

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

### 9.6 Extending Built-in Prototypes

Since all JavaScript objects derive their behavior from the prototype objects associated with their constructors, we can add new capabilities to our built-in objects by changing those prototypes. For example, we can add a `first` method to all arrays by adding it to `Array.prototype`:

```js
Array.prototype.first = function() {
  return this[0];
}

[1, 2, 3].first(); // => 1
```

Since we use the array `[1, 2, 3]` to call `first`, `this` inside the function refers to `[1, 2, 3]`. Thus, the `first` method returns the first element of the array used to call it, or `undefined` if the array is empty.

Extending built-in objects is interesting to study, but it's *best to avoid doing so*. Adding a method like `first` to an array object *can confuse other developers* working on your project. It can lead to errors when other developers forget or don't realize that your array has an unexpected bonus.

### 9.7 Borrowing Array Methods for Strings

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

End Assignment 9. Built-in Constructors @ 20220309 11:03. I still need to make the Anki cards!

## Assignment 10. ES6 Classes

ES6 introduced a new `class` keyword to JavaScript. We take a brief look at the `class` keyword in this [Gist](https://launchschool.com/gists/6ba85481).

Once you've finished with the Gist, you can finish watching the [JavaScript OOP video](https://launchschool.com/gists/6ba85481) that you began watching earlier. The portion of the video that pertains to this assignment starts at about the 01:25:10 mark and continues through the end of the video (about 14 minutes remaining).

### 10.1 [Classes Introduction](https://launchschool.com/gists/6ba85481)

The ECMAScript 6 (ES6) standard added the `class` keyword to JavaScript. In effect, classes act like **syntactic sugar** -- syntax designed to be easier to read or use -- that makes it easier for programmers to migrate to JavaScript from other OOP languages. In essence, they provide little more than a more natural and possibly familiar way to create constructors and prototypes.

That's not the entire story, of course. In JavaScript, there always seems to be some unusual or unexpected behavior behind every feature, no matter how ordinary it looks. It should come as no surprise that classes are no different. We'll barely touch on that in this assignment. For now, think of classes as syntactic sugar, and you'll be okay.

The syntax for defining classes is similar to that of defining functions. In particular, both functions and classes have two significant definition styles: declarations and expressions. We'll examine how classes do that in this assignment.

### A Simple Type

Before we get into the `class` syntax, let's first define a simple `Rectangle` type using the familiar constructor and prototype pattern:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);         // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor);          // [Function: Rectangle]
console.log(rec.getArea());            // 50
```

This code is straightforward and easy to follow, and the outputs should be exactly what you expect. In particular, the object created by the `Rectangle` constructor, `rec`, is an instance of the `Rectangle` type, and we can call the `getArea` method from its prototype to calculate the area.

It's interesting to note that you can call the `Rectangle` constructor without the `new` keyword. However, if you do, the constructor won't work properly. It's possible to write constructors that work with or without the `new` keyword, but most JavaScript developers won't bother.

Now, let's see what this code looks like using the `class` keyword.

### Class Declarations

The simplest way to create classes in JavaScript is with the **class declaration**, which looks similar to classes in other languages.

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

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

Class declarations begin with the `class` keyword, followed by the name of the class. The rest of the syntax looks similar to the simplified (concise) method definition that you can use in object literals. However, there are *no commas between the properties of the class*.

One significant difference is that the `constructor` is now a method named constructor inside our class instead of being a standalone function. Other methods have no special meaning; you can define as many as you need. In this case, we define `getArea`, and it gets placed in `Rectangle.prototype`.

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

There is one significant difference, however: you ***must*** use the `new` keyword to call the constructor when using a `class`. JavaScript raises a `TypeError` if you try to call the constructor without the `new` keyword.

Using classes, it's possible to do everything you can with the constructor and prototype pattern. However, the class syntax is easier to read and write, and the enforced `new` keyword helps prevent bugs.

### Class Expressions

Functions have an expression form that does not require a name after the function keyword. Classes have a similar expression form. Consider the following code:

```js
let Rectangle = class {
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

### Classes as First-Class Citizens

In programming, a **first-class citizen** is a value that can be passed into a function, returned from a function, and assigned to a variable. Like JavaScript functions, JavaScript classes are also first-class values. For example, you can pass classes into functions as arguments:

```js
function createObject(classDef) {
  return new classDef();
}

class Foo {
  sayHi() {
    console.log('Hi');
  }
}

let obj = createObject(Foo);
obj.sayHi(); // => logs 'Hi!'
```

If that doesn't surprise you, that's good! Earlier, we mentioned that classes are just functions, and demonstrated that with `typeof`:

```js
typeof Foo; // => "function"
```

Since functions are first-class objects, classes must also be first-class objects!

### Static Methods and Properties

You may remember seeing some methods like Array.isArray and Object.keys that are invoked with Array or Object as the caller instead of an actual array or object. For instance:

```js
Array.isArray([1, 2, 3]); // => true
[1, 2, 3].isArray();      // raises a TypeError
```

Methods like these are defined on the constructor for the type, e.g., `Array` or `Object`. You may sometimes hear such methods described as class methods. However, in JavaScript, that's a bit of a misnomer. Instead, you should call such methods **static methods**.

Ordinary methods -- those defined on a prototype object -- are sometimes called **instance methods** or **object methods** since you need an instance of (an object) the type. More commonly, they are simply called methods.

You can define static methods on your custom constructor methods. For instance, let's add one to the `Rectangle` type we defined earlier:

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.getDescription = function() {
  return 'A rectangle is a shape with 4 sides';
}

console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides
```

This code defines a static method named `getDescription` on the `Rectangle` constructor. To use this method, you invoke it with the `Rectangle` function object.

It should come as no surprise that you can define static methods with the `class` keyword as well: just use the static keyword:

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  static getDescription() {
    return 'A rectangle is a shape with 4 sides';
  }

  getArea() {
    return this.length * this.width;
  }
}

console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides
```

As before, we call the method with the name of the constructor function -- in the case of a class, the constructor function's name is the name of the class.

You can also define static properties. Static properties are properties that are defined on the constructor function instead of the individual objects. One well-known example of a static property is the `length` property used by the `String` type. To define a static property with the constructor and prototype pattern, just add it to the constructor function object:

```js
Rectangle.description = 'A rectangle is a shape with 4 sides';
```

To do the same thing with a `class`, just use the `static` keyword inside the `class`:

```js
class Rectangle {
  static description = 'A rectangle is a shape with 4 sides';
}
```

As of this writing in late 2020, static properties are a recent addition to JavaScript. They aren't completely supported, yet. Fortunately, recent versions of Node support them, which means we can use them in our code in this course. If you want to use static properties in a browser or an older version of Node that doesn't support them, you can accomplish the same effect by adding a property directly to the class:

```js
Rectangle.description = 'A rectangle is a shape with 4 sides';
```

Yes, that code is identical to what we would write if we were using the constructor/prototype pattern.

### ES6 Classes Summary

ES6 classes provide a cleaner, more compact alternative to constructors and prototypes. As with functions, they are first-class citizens and come in the form of declarations and expressions. Functionally, classes behave almost identically to the constructors and prototypes they aim to replace. Classes allow for static methods by using the `static` modifier.

End ES6 Classes on 20220309 # 19:42, but I still need to make Anki cards.

## Assignment 11. Practice Problems - Classes

### 11.1 What do we mean when we say that classes are first-class values?

**Solution**

We can treat JavaScript classes like any other JavaScript value. They can be passed around to functions, returned from functions, assigned to variables, and used anywhere a value is expected.

### 11.2 Consider the following class declaration:

```js
class Television {
  static manufacturer() {
    // omitted code
  }

  model() {
    // method logic
  }
}
```

What does the `static` modifier do? How would we call the method `manufacturer`?

**Solution**

The `static` modifier, when used with a method declaration, marks the method as static. That is, the method is defined directly on the class, not on the objects the class creates. We use it like this:

```js
Television.manufacturer();
```

The `model` method, on the other hand, is an instance method and must be called by an instance object:

```js
let tv = new Television();
tv.model();
```

## Assignment 12. Summary

1. Factory functions instantiate and return a new object in the function body. They let us create new objects based on a predefined template. However, they have two significant downsides:

  1.1 There is no way to tell whether a factory function created a given object.
  1.2 All objects created by a factory function have separate copies of the methods, which can be redundant and wasteful.

2. Constructor functions are meant to be invoked with the `new` operator. They instantiate a new object behind the scenes and let the developer manipulate it through the `this` keyword. A typical constructor uses the following pattern:

  2.1 The constructor is invoked with `new`.
  2.2 The JS runtime creates a new object that inherits from the constructor's prototype object.
  2.3 The new object is assigned to `this` within the function body.
  2.4 The code in the function body is executed.
  2.5 The function returns the object referenced by `this` unless the function returns an explicit object.

3. Every function has a `prototype` property that points to an object that contains a `constructor` property. The `constructor` property points back to the function itself. Thus, if `Kumquat` is a construction function, then `Kumquat.prototype.constructor === Kumquat`.

  If the function is used as a constructor, the returned object's `[[Prototype]]` will reference the constructor's `prototype` property. That lets us set properties on the constructor's prototype object so that all objects created by the constructor will share them. We call this the **pseudo-classical** pattern of object creation.

4. The pseudo-classical object creation pattern generates objects using a constructor function that defines state and a prototype object that defines shared behaviors.

5. The pseudo-classical inheritance pattern has types (e.g., classes) that inherit from other types. This way, all objects of a given type can share behaviors from the same source.

6. The class syntax, a relatively new addition to JavaScript, is **syntactic sugar** (cleaner syntax) for creating objects that use constructors and prototypes. JavaScript classes make it look more like a classical OO language to make the transition smoother for developers who have experience working with other OO languages.

## Assignment 13 Quiz 1

Assignment:Lesson 3 Quiz 1
Student Name: HyoSung Bidol-Lee
Submitted at: 2 minutes ago
Time taken: 0.26 hour(s)
Score: 6/13 (46.15%)

