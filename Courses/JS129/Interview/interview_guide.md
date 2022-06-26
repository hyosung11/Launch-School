# Assessment JS129: Object Oriented Programming > Part 2: Study Guide for Interview (Version 20220623 11:31)

## Format

We'll conduct the interview like a real job interview, except that we'll limit the discussion to the topics covered in course JS120. Make sure that you are clear on the core concepts from this course. You must be able to explain the concepts with precision and clarity while you write out code examples.

We'll conduct the interview using Slack Calls or Google Meet, together with a collaborative online editor like CoderPad. You should practice using the CoderPad environment before the interview via our demo pad. This pad is for demonstration purposes only; we won't use it during the interview. When you've finished exploring the demo pad, please clear any changes you made so that it's ready for the next person to use.

### Note for CoderPad

CoderPad runs JavaScript code in *strict mode*, which we discuss in depth in the next course. While you don't need to be familiar with all facets of strict mode, there is one aspect that may arise during this assessment: the implicit execution context is `undefined`, not the global object. That means that the value of `this` may be `undefined` at times. For instance:

```js
function foo() {
  console.log(this);
}

foo(); // undefined
```

Be prepared for this change before the interview. If you wish to practice on your own system instead of on CoderPad, add `"use strict"`; to the top of your JavaScript code:

```js
"use strict"; // the quotes are required

function foo() {
  console.log(this);
}

foo(); // undefined
```

## Interview Presentation

The interviewer will ask you to present or teach OOP topics. You should have a strong conceptual understanding of the core concepts in JS120. You should be able to talk about why they exist and how to use them in code and write example code to illustrate the concepts. You'll also need to use that conceptual understanding to reason with and solve various code examples and problems that the interviewer will present.

We'll ask you to speak and drive the conversation, so practice speaking and teaching others on technical topics. Make sure you study the following resources, perhaps going through them more than once.

- [JS120](https://launchschool.com/courses/f8a4a136)
- the written part of the assessment

## Communication Style

We will also assess your ability to communicate with clarity. You should speak in a clear tone and explain concepts with precision and correct vocabulary. **If you've never done this before, you should practice before the interview**. There's a reason the previous sentence is in bold.

Mistakes are normal. If you make one in the interview, we want to see how you recover, or whether you can recover at all.

## Areas of Focus

- [ ] General knowledge of OOP concepts as they pertain to JavaScript.
- [ ] Conventional techniques for constructing objects, including the use of prototypal inheritance.
- [ ] The ability to come up with code examples to illustrate concepts. Be prepared! Know what examples you want to use.
- [ ] The ability to integrate what you've learned and put it to work to understand unusual situations.
- [ ] An ability to speak clearly and with precision.

## Study Groups

Peer-led study groups for this assessment are listed in the Community Forum. We strongly encourage you to attend one of these study groups if you can. Speaking and articulating concepts in front of people is a unique experience, so you should practice before the interview. Most people don't find talking like this natural, but all can improve with practice. We're sure you wouldn't welcome surprises during a real job interview; you also don't want them during the assessment interview. No matter how well you think that you know the material, talking about it in an interview is different.

You can also check on the chat room channels to find one-on-one study partners or to find out if there's any interest in forming a study group.

## Final Tips

It's probably a good idea to over-prepare so that you come to the interview ready to impress. It's unlikely that you'll perform at your peak during the interview, so make sure to practice and get to a place where you are confident in your ability. Expect to be nervous and expect to be operating at a sub-optimal level. Aim to impress, nevertheless.

Speak with precision and confidence and clarity. To get the most out of this experience, treat this as a job interview.

We don't allow the use of JavaScript documentation on the interview assessment, so don't rely on it.

For some additional insights and tips, check out some of the articles students wrote.

- Joe's [article](https://medium.com/launch-school/dealing-with-nerves-and-assessments-at-launch-school-7b919c3ee08b) talks about how to approach problem solving as well as how to deal with nerves during the interview.

- This [blog post](https://medium.com/launch-school/my-study-tips-for-the-js129-assessment-646b7f652c9f) from William offers some tips and tricks on how to master the concepts in JS120.

## Interview Tips

- You are expected to drive the conversation in a favorable direction.
- You can write down in CoderPad what you think you were asked and ask the interviewer to confirm that you understand their question correctly.
- Stay engaged with the interviewer
  - While going through your explanation, you can pause and ask something like "Is this making sense so far?"
- When you finish a demonstration (code example), you can look back at the question you were asked (since you *wrote it down*) to quickly see if there's anything you forgot to mention.
- Test your code often! Use the Node console to test things before you put them in your code!

================================================

TBD where to place the following topics:

### 2.3 Object Instance Methods

#### 2.3.1 `Object.setPrototypeOf(obj, prototype)`

- sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`
- parameters
  - `obj` - The object which is to have its prototype set.
  - `prototype` - The object's new prototype (an object or `null`).

#### 2.3.2 `Object.prototype.hasOwnProperty(prop)`

- returns a boolean indicating whether the instance object has the specified property as its own property (as opposed to inheriting it). Returns `true` if the object has the specified property as own property; `false` otherwise.
- parameters
  - `prop`: the String name or Symbol of the **property** to test

```js
let example = {};
example.hasOwnProperty('prop') // false

example.prop = 'exists';
example.hasOwnProperty('prop'); // true - 'prop' has been defined

example.prop = null;
example.hasOwnProperty('prop'); // true - own property exists with value of null

example.prop = undefined;
example.hasOwnProperty('prop'); // true - own property exists with value of undefined
```

### 2.6 Object Static Methods

#### 2.6.1 `Object.create(proto, [propertiesObject])` - Inheritance

- returns a **new object**, using an *existing object* as the **prototype** of the newly created object.
- parameters
  - `proto` - the object which is the **prototype** of the newly-created object (i.e. the newly created object will inherit from this)
  - `[propertiesObject]` - If specified and not `undefined`, an object whose enumerable **own** properties (that is, those properties defined upon itself and *not* enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of `Object.defineProperties()`
- exceptions
  - `proto` - must be either an Object (excluding primitive wrapper objects), or `null` - otherwise a `TypeError` is thrown

```js
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // `name` is a property set on `me`, but not on `person`
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction(); // => 'My name is Matthew. Am I human? true'
```

#### 2.6.2 `Object.assign(target, ...sources)` - Mixins

- method **copies** all enumerable own properties from one or more `source` objects to a `target` object. It returns the modified target object. Properties in the target object are *overwritten* by properties in the sources if they have the same key. Later sources' properties overwrite earlier ones.
- The `Object.assign()` method only copies ***enumerable* and *own*** properties from a source object to a target object. It uses `[[Get]]` on the source and `[[Set]]` on the target, so it will invoke getters/setters, and therefore it ***assigns*** properties.
- **Parameters**
  - `target` the target object — what to apply the sources’ properties to, which is returned after it is modified.
  - `sources` the source object(s) — objects containing the properties you want to apply.

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target); // Object { a: 1, b: 4, c: 5}

console.log(returnedTarget); // Object { a: 1, b: 4, c: 5}
```

#### 2.6.3 `Object.getPrototypeOf(obj)`

- returns the object prototype (i.e., the value of the internal `[[Prototype]]` property) of the specified object.
- If there are no inherited properties, `null` is returned.

```js
const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1) // true
```

#### 2.6.4 `Object.getOwnPropertyNames(obj)`

- method returns an **array** of all properties (**including non-enumerable properties**) found **directly in a given object.**

```js
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1)) // [ 'a', 'b', 'c' ]
```

- Code Example - Useful if you want to show all the methods available to a certain Data Type

```js
// Display All of the Properties (including non-enumerable properties) in an Object
console.log(Object.getOwnPropertyNames(Array.prototype));
/* returns
[
  'length',      'constructor',    'concat',
  'copyWithin',  'fill',           'find',
  'findIndex',   'lastIndexOf',    'pop',
  'push',        'reverse',        'shift',
  'unshift',     'slice',          'sort',
  'splice',      'includes',       'indexOf',
  'join',        'keys',           'entries',
  'values',      'forEach',        'filter',
  'flat',        'flatMap',        'map',
  'every',       'some',           'reduce',
  'reduceRight', 'toLocaleString', 'toString',
  'at'
]
*/
```

### 2.7.`instanceof` Operator

- tests to see if the `prototype` property of a **constructor** appears anywhere in the prototype chain of an object. The return value is a boolean value. The left-hand side should be an `object`, and the right-hand side should be `constructor function`
- **Syntax -** `object instanceof constructor`
- **Parameters**
  - **`object` -** The object to test.
  - **`constructor` -** Function to test against

The `instanceof` operator requires the object to the right to have a `prototype` property, such as a function object. In most cases, that means the object on the right is a constructor function or class.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car('Honda', 'Accord', 2012);

console.log(auto instanceof Car) // true
console.log(auto instanceof Object); // true
```

