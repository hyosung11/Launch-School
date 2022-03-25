# JS129 Written Examination Practice Problems

## Lesson 2 > Practice Problems: Objects and Factories

In these problems, we will develop a factory function for objects that represent books.

The following three books should give you an idea of what our first book object should look like:

```sh
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
```

### 1. Create three objects that represent the three books shown above. The method for the "Get Description" behavior should return a string like the following:

```js
"Me Talk Pretty one day was written by David Sedaris."
```

Solution

```js
let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',
  getDescription: function() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',
  getDescription: function() {
    return `${this.title} was written by ${this.author}.`;
  },
};

let book3 = {
  title: "Aunts aren't Gentleman",
  author: 'PG Wodehouse',
  getDescription: function() {
    return `${this.title} was written by ${this.author}.`
  }
}
```

### 2. Think about the code you wrote for problem #1. Is there any unnecessary code? Does it have duplication?

Solution

The method `getDescription` is duplicated in each object. However, each object must hold unique values for its `title` and `author` properties.

### 3. Given our observations about the code so far, implement a factory function for our book objects that we can use with the following code:

```js
let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"
```

Solution - correctly answered!

```js
function createBook(title, author) {
  return {
    title: title,
    author: author,

    getDescription: function() {
    return `${this.title} was written by ${this.author}.`;
    },
  };
}
```

You can use a shorthand notation *when a property and a variable have the same name*. For instance, in the above, `title` and `author` are both property names and variable names, so we can use the following simplified syntax:

```js
function createBook(title, author) {
  return {
    title, // same as `title: title,`
    author, // same as `author: author,`

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}
```

### 4. We now want to track which books we have and haven't read. Update the factory function so that it returns a book object that includes a property `read` that has an initial value of `false`.

Solution

```js
function createBook(title, author) {
  return {
    title,   // see solution for previous problem
    author,  // see solution for previous problem
    read: false,

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => false
```

### 5. Suppose that we want to add a book that we've already read. Modify the factory function to use an optional `read` parameter with a default value of `false`.

Solution:

```js
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => true
```

### 6. Let's add a method, `readBook`, that marks a book object as read by setting the `read` property to `true`:

Solution:

```js
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription: function() {
      return `${this.title} was written by ${this.author}.`;
    },
  };
}

console.log(book1.read); // => false
book1.readBook();
console.log(book1.read); // => true
```

### 7. Finally, let's update `getDescription` function to reflect the `read` state directly, For instance:

```js
book1.getDescription(); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
book1.getDescription(); // Mythos was written by David Fry. I have read it.
```

Solution:

```js
function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription: function() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    },
  };
}
```

Note that we used the ternary conditional operator to generate the appropriate message. It's likely that you haven't seen this operator used as it is here, so some explanation is in order. The template literal lets us interpolate any expression into the string using `${}`. Here, the contents of `${}` are `this.read ? 'have' : "haven't"`; it's an expression that evaluates to either 'have' or "haven't". If the value of `this.read` is `true`, the expression evaluates to `'have'`; otherwise, it evaluates to `"haven't"`. In either case, the result gets interpolated into the output string.

## 1. What does this code log and why?

```js
let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);
```

On line 1, a variable qux is defined with an object { foo: 1 }.
- On line 2, the Object.create method is invoked with the object referenced by qux.  The Object.create method returns a new object with its private [[Prototype]] property set to the prototype object passed as an argument.
- On line 3, when the expression baz.foo + qux.foo is evaluated, qux.foo returns 1, but since baz.foo does not have properties of its own, it has to delegate access to its prototype. So, when JavaScript searches for the value of foo it will climb up baz's prototype chain and find the foo property in qux. Finally, the expression baz.foo + qux.foo will be evaluated 1 + 1 and its result will be the number 2.

## Lesson 2 > 4. Practice Problems: Object Prototypes

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

### 4. As we saw in problem 2, the following code creates a new property in the `baz` object instead of assigning the property in the prototype object.

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

## 15. Practice Problems: Dealing with Context Loss

### 15.1 The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference.

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) { // turk.getDescription
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);
```

~~My Answer: `getDescription()` is tied to the global object, so it will output: undefined~~

### 15.1.1 Solution

```sh
undefined undefined is a undefined.
```

When we pass `turk.getDescription` as an argument to `logReturnVal`, we *remove the method from its context*. As a result, when we execute it as `func`, this points to the global object rather than `turk`. Since `global` doesn't have properties defined for `firstName`, `lastName`, or `occupation`, the output isn't what we expect.

### 15.2 Modify the program from the previous problem so that `logReturnVal` accepts an additional `context` argument. If you then run the program with `turk` as the context argument, it should produce the desired output.

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) { // <-- `context` argument here
  let returnVal = func.call(context); // <-- `call`
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk); // line 16 <-- added context argument
```

By using `call` to invoke `func` and passing it the `context` argument, we can provide the desired context for the function. On line 16, we invoke `logReturnVal` with `turk` as the context argument, then pass that value to `call`; the result is our desired output.

Note that we can use `apply` instead of `call`:

```js
let returnVal = func.apply(context);
```

It's also possible to use `bind`, but given the condition that `logReturnVal` must accept a `context` argument, that solution leads to this slightly odd code:

```js
let returnVal = func.bind(context)();
```

This code is slightly unclear since it implies that we want the binding to be permanent. *Use `call` or `apply` instead*.

### 15.3 Suppose that we want to extract `getDescription` from `turk`, but we always want it to execute with `turk` as its execution context. How would you modify your code to do that?

My Answer: Use `bind`, but I don't know how exactly yet.

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let getTurkDescription = turk.getDescription.bind(turk);
logReturnVal(getTurkDescription);
```

### 15.4 Consider the following code:

```js
const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title); // line 6
    });
  }
};

TESgames.listGames();
```

Will this code produce the following output? Why or why not?

```sh
The Elder Scrolls: Arena
The Elder Scrolls: Daggerfall
The Elder Scrolls: Morrowind
The Elder Scrolls: Oblivion
The Elder Scrolls: Skyrim
```

My Answer: No because the call to `TESgames.listGames()` invokes the `listGames` method which invokes a function expression that is stripped of the TESgames context. So it references the global object which does not have the properties `titles` or `seriesTitle` and the output is  undefined repeatedly.

### 15.4 Solution

```sh
undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim
```

Since functions lose their surrounding context when used as arguments to another function, the context of line 6 is not the `TESgames` object. Instead, it is the global object. Thus, `this.seriesTitle` resolves to `undefined` rather than `"The Elder Scrolls"`.

### 15.5 Use `let self = this`; to ensure that `TESgames.listGames` uses `TESGames` as its context and logs the proper output.

```js
const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
```

### 15.6 The `forEach` method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output:

```js
const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this); // <-- `thisArg` placement
  }
};

TESgames.listGames();
```

### 15.7 Use an arrow function to achieve the same result:

```js
const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();
```

**Note** that this solution *does not pass* `this` to `forEach`.

### 15.8 Consider the following code:

```js
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
```

What will the value of `foo.a` be after this code runs?

My Answer: `increment()`'s context is `global` which has no `incrementA` property, so the value of `foo.a` will be '0'.

### 15.8 Solution

The value of `foo.a` will be `0`. Since `increment` gets invoked as a function, `this.a` references a property of the global object rather than a property of `foo`. Thus, the property `foo.a` isn't modified by the `increment`; its value remains 0.

### 15.9 Use one of the methods we learned in this lesson to invoke `increment` with an explicit context such that `foo.a` gets incremented with each invocation of `incrementA`.

```js
let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    increment.apply(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
```

We can use `apply` or `call` to invoke `increment` on line 8 with explicit context. We pass `this` as the context argument since inside `incrementA` but outside of `increment`, `this` references the containing object, namely `foo`.

## 17. Lesson 2 Quiz 1

### 17.1 Question 1

Examine the following code:

```js
let foo = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo);
baz.qux()
```

Which of the following statements about the invocation on line 9 are true? Choose all that apply:

[] A The `baz` object calls a copy of `qux` that the `baz` object owns.

[] B The `foo` object delegates the invocation of `qux` to the `baz` object.

[x] C The `baz` object delegates the invocation of `qux` to the `foo` object.

[] D JavaScript raises a `TypeError` exception.

#### Question 1 Discussion

Incorrect:

A: `Object.create` doesn't create a copy of the object it gets passed as an argument. Instead it creates a new object whose `[[Prototype]]` property references the argument.

B: Delegation occurs in the opposite direction: `baz` delegates to `foo` as described in C.

D. Prototypal inheritance means that `baz` doesn't need a separate copy of the method. Instead, it can use the prototype chain to find the method and delegate the call.

## 18. Lesson 2 Quiz 2

Completed on 20220305 at 16:19.

I decided not to transcribe all the quiz questions into my notes right now. Instead, I'm going to make Anki cards.

End Lesson 2

## Assignment 4. Practice Problems - Factory Functions

### 4.1 What are two disadvantages of working with factory functions?

1. Every object created with a factory function has a full copy of all the methods. That's redundant, and it can place a heavy load on system memory.

2. There is no way to inspect an object and learn whether we created it with a factory function. That effectively makes it impossible to identify the specific "type" of the object; at best, you can only determine that an object has some specific characteristics.

**Solution**

1. Each object created by a factory function has a copy of all methods, which can be redundant and memory intensive.

2. There is no way to tell which factory function created an object, so there's no way to be sure that you're working with the right kind of object.

### 4.2 Rewrite the following code to use the object literal syntax to generate the returned object:

```js
function makeObj() {
  let obj = {};
  obj.propA = 10;
  obj.propB = 20;
  return obj;
}
```

**Solution**

```js
function makeObj() {
  return {
    propA = 10,
    propB = 20,
  }
}
```

### 4.3 In this problem and the remaining problems, we'll build a simple invoice processing program. To get you started, here's the code to process a single invoice:

```js
let invoice = {
  phone: 3000,
  internet: 6500
};

let payment = {
  phone: 1300,
  internet: 5500
};

let invoiceTotal = invoice.phone + invoice.internet;
let paymentTotal = payment.phone + payment.internet;
let remainingDue = invoiceTotal - paymentTotal;

console.log(paymentTotal); // => 6800
console.log(remainingDue); // => 2700
```

To process multiple invoices, we need a factory method that we can use to create invoices. The requirements for the factory function are as follows:

1. It returns an invoice object, with `phone` and `internet` properties, and a `total` method.
2. The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
3. The function takes an object argument whose attributes override the default values.

Your function should work with the following code:

```js
function createInvoices(services = {}) {
  // implemented the factory function here
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total: function() {
      return this.phone + this.internet;
    }
  };
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices =[];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice( {
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000
```

### 4.4 Now we can build a factory function to create payments. The function can take an object argument in one of 3 forms:

1. Payment for one service, e.g., `{ internet: 1000 }` or `{ phone: 1000 }`.
2. Payment for both services, e.g., `{ internet: 2000, phone: 1000 }`.
3. Payment with just an amount property, e.g., `{ amount: 2000 }`.

The function should return an object that has the amount paid for each service and a `total` method that returns the payment total. If the `amount` property is not present in the argument, it should return the sum of the phone and internet service charges; if the `amount` property is present, return the value of that property.

Your function should work with the following code:

```js
function createPayment(services = {}) {
  // implemented the factory function here
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments)); // => 24000
```

### 4.5 Update the `createInvoice` function so that it can add payment(s) to invoices. Use the following code as a guideline:

```js
let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
invoice.amountDue(); // this should return 0

function createInvoice(services = {}) {
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,
    payments: [];

    total: function() {
      return this.phone + this.internet;
    },

    addPayment: function(payment) {
      this.payments.push(payment);
    },

    addPayments: function(payments) {
      payments.forEach(this.addPayment, this);
    },

    paymentTotal: function() {
      return this.payments.reduce((sum, payment) => sum + payment.total(), 0);
    },

    amountDue: function() {
      return this.total() - this.paymentTotal();
    },
  }'
}
```

### 5.7 Problems

#### 5.7.1 What naming convention separates constructor functions from other functions?

Constructor function names are capitalized.

#### 5.7.2 What happens if you run the following code? Why?

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
```

Solution:

This code throws a `TypeError` since `scamper` is an undefined property on `lizzy`. Since `Lizard` was invoked without the `new` operator and it doesn't have an explicit return value, the return value is `undefined`. Thus, `lizzy` gets assigned to `undefined` which causes the call to `scamper` to throw an error: you can't call a method on `undefined`.

#### 5.7.3 Alter the code in problem 2 so that it produces the desired output: I'm scampering!.

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper();
```

## 7. Practice Problems - Constructors and Prototypes

### 7.1 What does the following code log to the console? Try to answer without running the code. Can you explain why the code produces the output it does?

```js
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },

  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle (width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // => ?
console.log(rect1.perimeter); // =?
```

**Solution:**

```sh
NaN
NaN
```

The value of `this` within the `RECTANGLE.area` and `RECTANGLE.perimeter` methods gets set to the `RECTANGLE` object when they are called. Since `RECTANGLE` doesn't define `width` and `height` properties, the property accesses both return `undefined`. Since mathematical operations on `undefined` produce a value of `NaN`, the return value of the methods is `NaN`.

### 7.2 How would you fix the problem in the code from problem 1?

```js
let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this); // <--
  this.perimeter = RECTANGLE.perimeter.call(this); // <--
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);      // => 6
console.log(rect1.perimeter); // => 10
```

### 7.3 Write a constructor function called `Circle` that takes a radius as an argument. You should be able to call an `area` method on any objects created by the constructor to get the circle's area. Test your implementation with the following code:

```js
// constructor function
const Circle = function(radius) {
  this.radius = radius;
};

// prototype
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
};

// given code
let a = new Circle(3);
let b = new Circle(4);

a.area().toFixed(2); // => 28.27
b.area().toFixed(2); // => 50.27
a.hasOwnProperty('area'); // => false
```

### 7.4 What will the following code log to the console and why?

```js
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
```

**Solution**

```sh
true
```

Even though we define the `swingSword` method on the prototype after we create the `ninja`, all objects created by the `Ninja` constructor *share the same prototype object*. Thus, when we define `swingSword`, it immediately becomes available to the `ninja` object.

### 7.5 What will the following code output and why? Try to answer without running the code.

```js
function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
```

**Solution**

```sh
Uncaught TypeError: ninja.swingSword is not a function
```

Despite the similarities to the code in the previous question, this code doesn't work the same way. That's because we're reassigning `Ninja.prototype` to an entirely new object instead of mutating the original prototype object. The prototype for the `ninja` object doesn't change; it's still the original prototype defined during the constructor's invocation. Thus, JavaScript can't find the `swingSword` method in the prototype chain of `ninja`.

### 7.6 Implement the method described in the comments below:

```js
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

let ninjaA = new Ninja();
let ninjaB = new Ninja();

console.log(ninjaA.swing().swung);      // logs `true`
console.log(ninjaB.swing().swung);      // logs `true`
```

This pattern of "chainable" methods invocations and property accesses on an object requires that methods defined on the prototype always return the context object (in this case, ninjaA and ninjaB).

### 7.7 In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

```js
let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor(); // <-- solution


ninjaA.constructor === ninjaB.constructor // => true
```

Hint:

The value assigned to `ninjaA` is an object created by a constructor function. As such, this object has a `constructor` property that points back to its constructor. Think of a way to use this property; that should help lead you to a solution.

**Solution**

```js
let ninjaB = new ninjaA.constructor();
```

Does your answer use `Object.create()` instead?

```js
let ninjaB = Object.create(ninjaA);
```

This code works as well, but there is a flaw: it puts the `swung` property in the prototype object instead of in the `ninjaB` object where it belongs. Thus, `ninjaA` and `ninjaB` are somewhat different objects:

```sh
ninjaA:
  swung: false
  constructor: Ninja
  prototye: {}

ninjaB:
  constructor: Ninja
  prototye: {
    swung: false
  }
```

### 7.8 Since a constructor is just a function, you can call it without the `new` operator. However, that can lead to unexpected results and errors, especially for inexperienced programmers. Write a constructor function that you can use with or without the `new` operator. The function should return the same result with either form. Use the code below to check your solution:

```js
function User(first, last) {
  // ...
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
```

Hint:

In the constructor function, check the value of `this` to see whether it is an instance created by the constructor function. If it is, then the function was called with the `new` operator; otherwise, the function was called without `new`. You can use this in your code; if you determine that `new` wasn't used, then you can have the constructor call itself with the `new` keyword and use its return value.

**Solution**

```js
function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
```

Constructor functions built this way are called **scope-safe constructors**. Most, but not all, of JavaScript's built-in constructors, such as `Object`, `RegExp`, and `Array`, are scope-safe. `String` is not:

```js
new Object();          // Object {}
Object();              // Object {}

new Array(1, 2, 3);    // [1, 2, 3]
Array(1, 2, 3);        // [1, 2, 3]

new String("abc");     // [String: 'abc']
String("abc");         // 'abc'
```

End 7. Practice Problems - Constructors and Prototypes 20220308 17:16

I definitely need to review these practice problems again.

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



## Assignment 13 Quiz 1

Assignment:Lesson 3 Quiz 1
Student Name: HyoSung Bidol-Lee
Submitted at: 2 minutes ago
Time taken: 0.26 hour(s)
Score: 6/13 (46.15%)

## Lesson 4 > Assignment 3. Practice Problems: Object Creation with Prototypes

### 3.1 Use a factory function to create pet objects. The factory should let us create and use pets like this:

```js
function createPet(animal, name) {
  return {
    animal: animal, // animal,
    name: name, // name,

    sleep: function() { // sleep()
      console.log("I am sleeping");
    },

    wake: function() { // wake()
      console.log("I am awake");
    },
  };
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}`);
neptune.sleep(); // I am sleeping
neptune.wake(); // I am awake
```

### 3.2 Use the OLOO pattern to create an object prototype that we can use to create pet objects. The prototype should let us create and use pets like this:

```js
const PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep: function() {
    console.log("I am sleeping");
  },

  wake: function() {
    console.log("I am awake");
  },
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}`);
pudding.sleep(); // I am sleeping
pudding.wake(); // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake
```

### 3.3 Consider the objects created by the programs in problems 1 and 2. How do objects for the same animal differ from each other?

Objects created with the OLOO have a prototype object that contains the methods associated with the created objects. Since all pets created from the prototype share a single prototype object, they all share the same methods. With the factory function, each object has a copy of all the methods. Thus, objects created by OLOO are more efficient in terms of memory use.

Objects created with the factory function can have private state. Any state stored in the body of the factory function instead of in the returned object is private to the returned object. They can't be accessed or modified unless one of the object methods exposes the state. With OLOO, there is no way to define private state. All object state can be accessed and modified by outside code.

### Lesson 4: Subclassing and Code Reuse Patterns > Practice Problems

Consider the following code:

```js
function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet('Goodbye');
};
```

What happens in each of the following cases? Try to answer without running the code.

**Case 1**

```js
let hello = new Hello();
hello.hi(); // Hello!
```

**Case 2**

```js
let hello = new Hello();
hello.bye(); // TypeError: hello.bye is not a function
```

**Case 3**

```js
let hello = new Hello();
hello.greet(); // undefined
```

**Case 4**

```js
let hello = new Hello();
hello.greet('Goodbye'); // Goodbye
```

**Case 5**

```js
Hello.hi(); // TypeError: Hello.hi is not a function
```

**Solution**

**Case 1** This code logs `Hello!` to the console.

**Case 2** This code raises a `TypeError`. Neither `Hello.prototype` nor its prototype, `Greeting.prototype`, have a `bye` method defined.

**Case 3** This code logs `undefined` to the console. Since `Hello` inherits from `Greeting`, the `hello` object has access to `greet`. However, `greet` takes an argument, which isn't supplied by this code.

**Case 4** This code logs `Goodbye` to the console.

**Case 5** This code also raises a `TypeError`. The `hi` method is defined on `Hello.prototype`, not on the `Hello` constructor itself. Thus, only instances of `Hello` have access to `hi`.

## Lesson 4 > Assignment 6. Practice Problems: Subtyping with Classes

### 6.1 Suppose we have the following classes:

```js
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}
```

What would happen if we added a `play` method to the `Bingo` class, keeping in mind that there is already a method of this name in the `Game` class from which the `Bingo` class inherits? Explain your answer. What do we call it when we define a method like this?

**Solution**

If we add a new `play` method to the `Bingo` class, objects created by `Bingo` will use that method instead of looking up the prototype chain and finding it in the `Game` class. As soon as JavaScript finds a method, it calls it. When a class redefines a method that a superclass defines, we call this "method overriding".

### 6.2 Let's practice creating a class hierarchy.

Create a class named `Greeting` that has a single method named `greet`. The method should take a string argument, and it should print that argument to the console.

Now, create two more classes that inherit from `Greeting`: one named `Hello`, and the other `Goodbye`. The `Hello` class should have a `hi` method that takes no arguments and logs `"Hello"`. The `Goodbye` class should have a `bye` method that logs `"Goodbye"`. Use the `greet` method from the `Greeting` class when implementing `Hello` and `Goodbye`; don't call `console.log` from either `Hello` or `Goodbye`.

```js
class Greeting {
  greet(message) {
    console.log(message);
  }
}

class Hello {
  hi() {
    this.greet('Hello');
  }
}


class Goodbye {
  bye() {
    this.greet('Goodbye')
  }
}
```

### Lesson 4 > Code Reuse with Mixins > Practice Problems

### 8.4.1 If we have a `Car` class and a `Truck` class, how can you use the `Speed` object as a mix-in to make them `goFast`? How can you check whether your `Car` or `Truck` can now go fast?

```js
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype.Speed);
```

**Solution**

```js
const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed); // <--

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed); // <--
```

Testing that we can make our cars and trucks go fast is simple; all we must do is call `goFast` on a car or truck object:

```js
let blueTruck = new Truck();
blueTruck.goFast(); // => logs "I'm a Truck and going super fast!"

let smallCar = new Car();
smallCar.goFast(); // => logs "I'm a Car and going super fast!"
```

If you need to check whether an object responds to a specific method, you can use the `in` operator:

```js
'goFast' in smallCar; // => true
'goFast' in blueTruck; // => true
```

### 8.4.2

In the last question, we used a mix-in named `Speed` that contained a `goFast` method. We included the mix-in in the `Car` class and then called the `goFast` method from an instance of the `Car` class. You may have noticed that the string printed when we call `goFast` includes the name of the type of vehicle we are using. How is that done?

**Hint**

Since the `constructor` property references a function object, `constructor.name` references the `name` property on that object. Use MDN to lookup the definition of `Function.name`.

`Function.name`

A `Function` object's read-only `name` property indicates the function's name as specified when it was created, or it may be either `anonymous` or `''` (an empty string) for functions created anonymously.

**Solution**

We used `this.constructor.name` to determine the name. It works like this:

1. Within `goFast`, `this` refers to the object that invoked the method. In this case, we used `Car` and `Truck` objects.
2. The `constructor` property of an object references the class that the object belongs to, i.e., `Car` or `Truck`.
3. Constructors have a `name` property that merely contains the name of the class as a string, and that's what we output in `goFast`.

### 8.4.3 Ben and Alyssa are working on a vehicle management system. Thus far, they have created classes named `Auto` and `Motorcycle` to represent automobiles and motorcycles. After they noticed that the information and calculations performed was common to both vehicle types, they decided to break out the commonality into a separate class named `WheeledVehicle`. Their code, thus far, looks like this:

```js
class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }

  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}
```

Their boss now wants them to incorporate a new type of vehicle: a `Catamaran`.

```js
class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}
```

This new class doesn't fit well with our existing class hierarchy: Catamarans don't have tires, and aren't wheeled vehicles. However, we still want to share the code for tracking fuel efficiency and range. Modify the class definitions and move code into a mix-in, as needed, to share code between the `Catamaran` and the wheeled vehicle classes.

**Solution**

```js
const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);
```

We've moved the code shared by `Catamaran` and `WheeledVehicles` to the `Moveable` mix-in. The definitions of `Auto` and `Motorcycle` remain unchanged since they both inherit from `WheeledVehicle`.