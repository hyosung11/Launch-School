# JS129 Written Assessment Questions and Answers

## Question 1 (4 points)

Examine the code below:

```js
let andy = {
  name: 'Andy Davis',
  toys: [],
};

let woody = {
  name: 'Sheriff Woody',
  play() {
    console.log('Reach for the sky!');
  },
};

let buzz = {
  name: 'Buzz Lightyear',
  play() {
    console.log('To Infinity, And Beyond!');
  },
};

andy.toys.push(woody);
andy.toys.push(buzz);
```

1. Describe the relationship between the `andy` object and the `buzz` and `woody` objects.
2. Implement a method, `playWithToys`, in the `andy` object. The method should invoke the `play` method of all the toys for that object.

### Q1 Answer

1. The `andy` object and the `buzz` and `woody` objects are all created using object literal syntax.

```js
let andy = {
  name: 'Andy Davis',
  toys: [],

  playWithToys() {
    return this.toys.play;
  }
};
```

## Question 2 (5 points)

Examine the two code examples below:

Example 1

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce();
```

Example 2

```js
let sarah = {
  name: 'Sarah',
  introduce() {
    console.log(`Hi, my name's ${this.name}`);
  },
};

let paul = {
  name: 'Paul',
};

sarah.introduce.call(paul);
```

For each example, identify the execution context of `introduce`. Explain how you determined the execution context, and outline the difference between the execution context in the two examples.

### Q2 Answer

For Example 1, the execution context of `introduce` is the `sarah` object. This is because `sarah.introduce()` uses method call syntax whose implicit execution context is the calling object.

For example 2, the execution context of `introduce` is the `paul` object. Here, the `call` method is used to explicitly bind the `paul` object to the invocation on line 12.

## Question 3 (5 points)

The code below defines a constructor function, `Book`, and adds a method, `read`, to the prototype of that constructor:

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.read = function() {
  console.log(`Reading ${this.title}`);
};
```

Objects created by this constructor have `title` and `author` properties, as well as a `read` method. However, we now need to add an `allTitles` method that returns an array of the titles of all the books created by the constructor. Think about where the array and the method should live and then update the code to create the array and implement the method.

### Q3 Answer

```js
function Book(title, author) {
  this.title = title;
  this.author = author;
  Book.allTitles.push(this);
}

Book.prototype.read = function() {
  console.log(`Reading ${this.title}`);
};

Book.allTitles = [];
```

## Question 4 (3 points)

Rewrite your answer from the previous question using classes.

### Q4 Answer

```js
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  read () {
    console.log(`Reading ${this.title}`);
  };

  static allTitles() {
    Book.allTitles.push(this);
  }
}

Book.allTitles = [];
```

## Question 5 (6 points)

Examine the following code snippets:

```js
let obj = {
  foo() {
    return this;
  }
};

console.log(obj.foo());
```
