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