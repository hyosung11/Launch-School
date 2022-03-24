# JS129 Written Examination Code Snippets

## 8. Practice Problems: Objects and Factories

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
