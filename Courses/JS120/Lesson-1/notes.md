# 1. Introduction

Object-Oriented Programming (OOP) represents a significant departure from procedural programming, and requires not only an entirely new way of thinking but also requires learning a whole new set of vocabulary and concepts. If this is your first time delving into Object Oriented Programming, this is going to be a challenging course for you. The concepts themselves are relatively easy to pick up, but putting them together to construct an object-oriented program isn't easy.

As you move forward in your programming journey, a big chunk, perhaps even the majority of the code you'll encounter, is probably written using an OO style. The procedural programming style we met in the previous course is usually used when writing smaller programs. Most larger programs, including most popular libraries and frameworks, use OOP. Building an OOP program from scratch forces that knowledge upon you. You won't be an expert OO programmer after this course, but you'll have hands-on experience with OOP and how to code OO programs in JavaScript. OOP in JavaScript is a little different than in other "classical" OOP languages, but basic concepts like inheritance and polymorphism cut across languages. Learning these concepts will come in handy when you go on to learn other Object Oriented languages.

This lesson begins by guiding you through some basic OO concepts and vocabulary. You'll need this knowledge to build OO programs. Take your time here and work through the exercises.

## 2. What is OOP?

The phrase **Object-Oriented Programming (OOP*)** suggests a style of programming that involves JavaScript objects. However, since we've already used objects in JS101, you may wonder why the distinction. Object-Oriented Programming is more than merely using objects in your programs; it's a style of programming that*uses objects to organize a program.*

In JS101, we learned the basics of JavaScript programming. Throughout the course, we thought of a program in terms of variable declarations, conditionals, loops, and function calls. This approach is called **procedural programming**. Our programs also used some functional programming techniques, such as passing functions to array methods like `map` and `filter`. For the most part, though, our programs were a series of steps or procedures that we performed one after the other.

Object-Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. The way we think about a problem changes from a series of steps to a collection of objects that interact with each other. The idea is to model a program based on how objects in the real world interact. A real-world object like a car, for example, has **state** -- *properties* -- like color, number of doors and fuel-level amongst others. It also has **behavior**; it can be started, driven, steered, or parked. That's precisely how we think about problems in OOP: as a set of objects with state and behavior.

Why do we need this radically different approach of organizing code? One of the most challenging aspects of software engineering is organizing code so that it's easy for programmers to reason about and easy to maintain. Object-Oriented Programming helps with that.

Complex coding problems can be hard to break down and solve in a clear and systematic way. Using OOP to model objects and using real-world nouns to represent objects lets programmers think at a higher level of abstraction. That, in turn, helps them break down and solve problems.

Large, complex programs can be a challenge to maintain due to dependencies throughout the program. OOP lets programmers write programs in a manner that reduces those dependencies and makes maintenance easier. When done right, OOP makes our code flexible, easy to understand, and easy to change.

However, OOP doesn't necessarily let programmers write smaller programs than the equivalent non-OO program. Instead, OO programs are often much larger than the equivalent non-OO programs. However, the organization of a well-designed OOP program can make the program easier to reason about and maintain. In particular, it lets you focus your attention on specific parts of the code without worrying about dependencies in the rest of the program.

OOP also doesn't always lead to more efficient code. It can, in some cases, but it can also lead to less efficient code; OOP programs can require more memory, more disk space, and more computing power. However, the advantages of OOP usually outweigh these concerns.

Don't worry if this discussion doesn't make much sense right now; the merits of OOP will become apparent as you progress through the course and see some examples along the way.

In the next assignment, we'll discuss **encapsulation**, a fundamental concept in object-oriented programing.

## 3. Encapsulation

Encapsulation is one of the fundamental concepts of object-oriented programming. At its core, encapsulation describes the idea of bundling or combining the data and the operations that work on that data into a single entity, e.g., an object.

Let's examine a simple banking application. The code for the app, at a minimum, must contain data about the bank accounts (account number, balance, account type) and the users (name, address, phone number). The code must also contain behaviors or operations that use and manipulate that data. For instance, we should have operations that open an account, make withdrawals, and deposit new funds.

One thing is evident here: the data and operations that you perform on your data are related. That is, you don't want to apply an operation intended for a bank account on a user's data. For example, it doesn't make much sense to withdraw funds from a user. Instead, you want to withdraw funds from the account, so you want to operate on an account.

If our program keeps track of data about entities and performs operations on that data, it makes sense to combine the data and the functionality into a single entity. That's what object-oriented programming is all about. We call this principle of combining data and the operations relevant to that data **encapsulation**. Encapsulation is about bundling state (data) and behavior (operations) to form an object.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects expose a **public interface** for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. Unfortunately, JavaScript doesn't support access restrictions. There are ways to achieve a degree of access restriction, but they're not perfect. We'll return to this topic later.

In upcoming assignments, we'll see examples of objects with *state* and *behavior*.

## 4. Practice Problems: OOP and Encapsulation

### Q1. In your own words, what is Object Oriented Programming?

A1. Using objects to organize a program.

Solution: Object Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. In particular, it uses objects to organize our program.

### Q2. Describe some advantages and disadvantages of OOP.

A2. Advantages include easier readability and comprehension. Disadvantages include longer programs that take up more memory and can be slower.

Solution:

- Advantages
  - It lets programmers think about a problem at a higher-level of abstraction, which helps them break down and solve the problem.
  - OOP helps programmers write programs that reduce the *dependencies* in a program, which makes maintenance easier.
  - Done right, OOP makes code flexible, easy to understand, and easy to change.

- Disadvantages
  - OOP programs are often much larger than the equivalent procedural program.
  - OOP may lead to less efficient code; OO programs may require more memory, disk space, and computing power.

### Q3. In your own words, what does encapsulation refer to in JavaScript?

A3. Encapsulation refers to combining the data and operations that work on that data into one entity, an object.

Solution: In JavaScript, encapsulation is the idea of bundling data and operations associated with that data in a single entity; that is, it's the grouping of related properties and methods in a single object.

### Q4. In JavaScript, how does encapsulation differ from encapsulation in most other OO languages?

A4. Encapsulation in JavaScript cannot completely cut off the public interface.

Solution: In other languages, encapsulation concerns hiding the details of an object from code that uses the object. An object should only expose the methods and properties that other objects need to use the encapsulated object. However, JavaScript does not directly provide the means to limit exposure of properties and methods. There are ways to achieve a degree of access restriction, but they're not perfect.

## 5. Creating Objects

At this point in the curriculum, you already know how to create an object:

```js
let person = {
  name: 'John',
  age: 33,
};
```

Simple, isn't it? However, the code does little more than create a data-structure. The object merely stores some data about a person. OOP is about *combining data and behavior* into an object.

Imagine that you're building a car racing game. Such a game, of course, must have cars. That is, it must have some data about cars and some operations associated that use and manipulate that data. We might list the data and operations something like this:

```sh
Car Attributes
  Make: BMW
  Fuel level: 50%
  Engine status: Turned Off

Car Functionality/Behavior
  Start engine
  Stop engine
  Refuel
  Drive
```

What do we have here? -- Some data about a car and the functionality that applies to that data. The "start engine" feature, for example, should change the engine status from "off" to "on" and nothing more. It makes sense for this data and functionality to live together. Let's *encapsulate* it as an object:

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine: function() {
    raceCar.engineOn = true;
  },

  drive: function() {
    raceCar.fuelLevel -= 0.1;
  },

  stopEngine: function() {
    raceCar.engineOn = false;
  },

  refuel: function(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },
};
```

This code bundles the data and operations related to a car into an object. The structure of the object is essentially the same as the objects we've encountered so far. The chief difference is that *some of the property values are functions*. That shouldn't be surprising; we've seen before that JavaScript functions are first-class values, which means that we can treat them as we would any JavaScript value. That includes using them as object property values. When object properties have function values, we call them **methods**. The methods here are responsible for changing the state of the `raceCar` object.

One advantage of this approach is clear to see: if we want to operate on a car, we don't have to search for both the function and the data that we need. We can see at a glance what you can do with a car merely by looking at the object.

We can use dot-notation to call a method. For instance:

```js
raceCar.refuel(30);
```
Note that JavaScript won't stop you from changing the fuelLevel property directly instead of calling the refuel method. That's a limitation of JavaScript. The OO style strongly discourages changing property values directly. Instead, it encourages using methods to interface with the object. We can see why that is by looking at the implementation for refuel. The fuelLevel property should be a number that's a fraction of 1. The refuel method ensures that it never exceeds that value. If you only use refuel to increase the fuelLevel of the car, it'll never exceed 1. If you directly access and change fuelLevel, though, you may end up violating that restriction.

### Compact Method Syntax

Using functions as object values (i.e., methods) is so common that there's a shorthand syntax called the compact syntax for it:

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    raceCar.engineOn = true;
  },

  drive() {
    raceCar.fuelLevel -= 0.1;
  },

  stopEngine() {
    raceCar.engineOn = false;
  },

  refuel(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },
};
```

You can omit the `:` and the `function` keyword and use parenthesis to denote a method. There is a subtle difference between these two syntaxes, however. We'll cover that later when we talk about **prototypes**.

### The `this` Keyword

Thus far in our example, we refer to the object from inside the methods by directly using the variable name, `raceCar`. Suppose we change the variable name or pass the object to a function that refers to its arguments by a different name. In that case, calling a method with the original variable name will *throw a reference error*. We need some way to refer to the object that contains a method from other methods in that object. The keyword `this` provides the desired functionality:

```js
let raceCar = {

  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};
```

The workings of `this` is one of the most difficult JavaScript concepts to grasp; it's the source of a great deal of confusion. We'll talk about it extensively in the next lesson. For now, you can assume that when you use `this` inside a method, it *refers to the object that contains the method.*

### Creating Objects Summary

In this assignment, we've seen an example of encapsulation in practice. In JavaScript, we achieve encapsulation by making use of an object. The properties of the object hold the state (data), and methods represent behavior. Inside the methods, the `this` keyword lets us refer to the properties and other methods of the object.

## 6. Collaborator Objects

You now know that we can group related state and behavior with objects. An object's state is stored in properties that refer to other values or objects. As we saw in the previous assignment, the state is often a collection of strings, numbers, and booleans. For example, a `person` object can use a `name` property to store the person's name attribute as a string. Here's an example:

```js
let pete = {
  name: 'Pete',

  printName() {
    console.log(`My name is ${this.name}!`);
  },
};
```

Notice that `pete.name` holds a string value. An object's properties *can hold any value or object*: strings, numbers, arrays, and even other objects. For instance:

```js
let pete = {
  heroes: ['Superman', 'Spiderman', 'Batman'],
  cash: { ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0 },

  cashOnHand() {
    // This method uses `this.cash` to calculate the total cash value. We'll skip the implementation here.
  },

  allHeroes() {
    return.this.heroes.join('');
  },
};
```

From this example, you see that we can use any value or object to *represent an object's state*. Properties can store any object or value. Suppose we need an object that represents a person and his pet. We could have an object like this:

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pet: cat,

  printName() {
    console.log(`My name is ${this.name}!`);
    console.log(`My pet's name is ${this.pet.name}`);
  },
};
```

We can now access Pete's pet by referencing the `.pet` property with the `pete` object, e.g., `pete.pet`. Since `pet` is the `cat` object, we can use `pete.pet` to call the `cat`'s methods: `pete.pet.makeNoise()`.

Objects that *help provide state within another object* are called **collaborator objects**, or more simply, **collaborators**. Collaboration is all about objects working together in some manner. A collaborator works in conjunction -- in collaboration -- with another object.

The `pete` object has a collaborator object stored in its `pet` property. The `pete` object and the object referenced by its `pet` property work together. When we need to access the `pet` object or have it perform a behavior, we can use `pete.pet` to access and use the object's properties. For instance, on line 19, the `pete` object collaborates with the `cat` object (via `this.pet`) to access the `cat`'s name.

Collaborator objects play an important role in object-oriented design; they r*epresent the connections between the different classes* in your program. When working on an object-oriented program, be sure to consider what collaborators your objects need and whether those associations make sense, both from a technical standpoint and in terms of modeling the problem your program aims to solve.

Let's now develop our program further and change the implementation to let Pete have many pets. How should we implement this? How about an array of `pet` objects?

```js
let cat = {
  name: 'Fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  },

  eat() {
    // implementation
  },
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('Woof! Woof!');
  },

  eat() {
    // implementation
  },
};

let pete = {
  name: 'Pete',
  pets: [],
};

pete.pets.push(cat);
pete.pets.push(dog);
```

We often talk of collaborators in the context of custom objects like `pet`, but collaborators don't have to be custom objects. They can be built-in objects like arrays and dates, as well.

### Collaborator Objects Summary

Collaborator objects let you chop up and modularize the problem domain into cohesive pieces. They play an important role in modeling complicated problem domains in OO programming.

## 7. Functions as Object Factories

So far, we've learned how to create objects and add properties and methods to them. In this assignment, we'll learn how to automate the process of creating objects.

Let's revisit the car racing game from an earlier assignment where we created the following object:

```js
let raceCar = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};
```

This code creates a single car. However, you need at least two cars if you want to race. Depending on the type of race, you may need dozens or hundreds of cars. How can you create more car objects as needed? All cars should have the same basic behaviors (i.e., methods), but they must have different state: `make`, `fuelLevel`, and `engineOn`.

One straightforward approach is to duplicate the original code and tweak the state as needed:

```js
let raceCar1 = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};

let raceCar2 = {
  make: 'Ferrari',
  fuelLevel: 0.7,
  engineOn: true,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  },
};
```

You can now interact with both cars independently:

```js
raceCar1.drive();
raceCar2.drive();
```

However, there are several problems with this approach:

1. There's a lot of code duplication between the cars.
2. The game may *need a dynamic number of cars* with attributes that we can't determine before the game begins running.
3. Creating additional cars is tedious and error-prone.

The more significant issue is that it's hard to see what attributes characterize and differentiate `raceCar1` from `raceCar2`: what makes them similar and what makes them different and unique?

It's easy to see that we're creating objects of a particular **type** (i.e., a race car). This notion of types will come up repeatedly in this course. We'll often need objects of the same type in our applications. Since we don't want to use the copy and paste approach we used above, we need some other way to create objects. One way to automate object creation is to use **object factorie**s: functions that create and return objects of a particular type.

Our car objects are mostly similar, but they have three important distinctions: the values they hold for the `make`, `fuelLevel`, and `engineOn` properties. One way to clarify this in our code is to move the similarities to one location and provide the differences when we create new objects.

Consider the following interface:

```js
function createCar(make, fuelLevel, engineOn) {
  // To be implemented by you.
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();
```

You can see that we've moved the creation of each object into a new function, `createCar`, and that we pass the `make`, `fuelLevel`, and `engineOn` values to that function. In this case, `createCar` handles the similarities, while each invocation specifies the differences with arguments.

In the above code, we show the skeleton of the `createCar` function. Try to implement `createCar` on your own, then use it to create a new race car with the following details:

```js
function createCar(make, fuelLevel, engineOn) {
  return {
    make: make,
    fuelLevel: fuelLevel,
    engineOn: engineOn,

    startEngine() {
      this.engineOn = true;
    },

    drive() {
      this.fuelLevel -= 0.1;
    },

    stopEngine() {
      this.engineOn = false;
    },

    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let jaguar = createCar('Jaguar', 0.4, false);
```

### Functions as Object Factories Summary

Automated object creation is an important process. While it's easy to create a single object, copying and pasting the code to create a related object that is independent of the first is both tedious and error-prone. If you need to create hundreds or thousands of similar objects, you'll soon realize why automating object creation is a vital aspect of programming.

In Object Oriented Programming, we often need to create multiple objects of the same type. Object factory functions provide a straightforward abstraction for object creation. We'll see some more involved techniques later.

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

## 9. Assignment: OO Rock Paper Scissors

In this assignment, we'll build a new version of the Rock, Paper, Scissors game -- RPS for short -- that we wrote in a previous course. The game flow should go like this:

- The user makes a choice.
- The computer makes a choice.
- The winner is displayed.

This time, we'll use objects and factory functions to code it in an object-oriented style.

The classical approach to planning an object-oriented application includes several steps:

1. Write a textual description of the problem or exercise.
2. Extract the significant nouns and verbs from the description.
3. Organize and associate the verbs with the nouns.

Note that the nouns are the objects or *types* of objects and the verbs are the behaviors or methods. In OO design, you shouldn't think about the game flow logic during this early design phase. OOP is all about *organizing and modularizing the code* into a cohesive structure - objects. Only after you know what objects you need can you look at orchestrating the program's flow. For now, we won't worry about this step.

Initially, we'll use factory functions to create objects. That's not the only way to create objects in JavaScript, nor is it necessarily even the best way. When we learn about other object creation techniques later on, we'll revisit this application to see how those techniques apply to this problem.

### Step 1: Write a textual description of the problem or exercise.

Our first step is to write a textual description of the RPS game:

RPS is a two-player game where each player chooses one of three possible moves: rock, paper, or scissors. The winner is chosen by comparing their moves with the following rules:

- Rock crushes scissors, i.e., rock wins against scissors.
- Scissors cuts paper, i.e., scissors beats paper.
- Paper wraps rock, i.e., paper beats rock.
- If the players chose the same move, the game is a tie.

### Step 2: Extract the significant nouns and verbs from the description.

Using the description in step 1, let's try to extract the significant nouns and verbs. RPS is a bit challenging in this regard: there aren't many nouns apparent. OO programming problems are usually easier to model when there are real-world nouns that match the problem domain. However, in RPS, the nouns are more subtle. Nevertheless, let's give it a shot.

```sh
Nouns: player, move, rule
Verbs: choose, compare
```

### Step 3: Organize and associate the verbs with the nouns.

Once we have the nouns and verbs, we must organize them by associating each verb with the noun that performs the action represented by the verb. Since we have so few nouns and verbs, you might think that organizing them should be simple. However, it's not always easy to determine which verb goes with which noun. In our RPS game, for instance, a "Player" can "choose," but "Move" and "Rule" don't currently have any associated verbs. Furthermore, it's not clear which noun should respond to the "compare" verb.

```sh
Player
 - choose
Move
Rule

???
- compare
```

For now, let's ignore the question about where "compare" belongs and see what we can do with the information available. Let's start by outlining our object factories and the `compare` method. Since we're not yet ready to implement any details, we'll write some skeleton code and leave the details until later. However, we can begin to think about the states that each object could have.

```js
function createPlayer() {
  return {
    // possible state: player name?
    // possible state: player's current move?

    choose() {
      // not yet implemented
    },
  };
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.
let compare = function(move1, move2) {
  // not yet implemented
};
```

Our design is a bit crude at this point, but these preliminary skeleton objects and methods should help us move ahead. Think of this code as the "back of the envelope" or "napkin" model of the problem. We still have unanswered questions, but it's a good start.

### Orchestration Engine

Once we've organized our nouns and verbs into objects, we need an engine to orchestrate the objects. The engine is where the procedural program flow should be. Let's call the engine object `RPSGame`. We want an easy interface to kick things off, so let's start gameplay by calling a method named `play`:

```js
RPSGame.play();
```

Given that interface, here's our initial attempt at writing the `RPSGame` object:

```js
const RPSGame = {
  play() {
    displayWelcomeMessage();
    humanChooseMove(); // similar to next line
    computerChooseMove();
    displayWinner();
    displayGoodbyeMessage();
  },
};
```

Lines 4 and 5 are similar and repetitive since both handle the move-choosing part of the problem. This ties into our player object, which has a `choose` method. Can the human and computer both be objects of the player type? If we can do that, then both humans and computers can use the `choose` method. With that insight, let's update the `RPSGame` object:

```js
const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};
```

Our objects are starting to take shape. However, we still don't know how to use the move and rule types in our game. Perhaps we don't need them at all. We'll stop here for now and continue brainstorming in the next assignment.

### Assignment: OO Rock Paper Scissors Summary

Object-oriented design and architecture is a broad topic; it takes years to master. This assignment outlines an approach to problem-solving with an object-oriented mindset. One of the hardest things to understand about OOP is that there is no absolute *right* solution. OOP always comes down to making tradeoffs. There are wrong approaches, of course, but many other approaches are acceptable. For now, you should strive to understand the core concepts of OOP; don't worry so much about whether you're using the right or wrong approach, and don't worry about finding the optimal architecture or design.

In the next assignment, we'll continue where we left off here and go on an exploratory coding spree to better understand the problem.

## 10. Walk-through: OO Rock Paper Scissors

Continuing with the design and code from the previous assignment, we'll walk through our initial implementation of Rock, Paper, Scissors. You should type along with us.

### Step 1: Implement the `choose` Method

We'll start with the `RPSGame` object from the previous assignment and then develop it and the rest of the object types as we gain more understanding of our design:

```js
const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  play() {
    displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};

RPSGame.play();
```

The game starts when we call the `play` method on the `RPSGame` object; that method contains our procedural code. Let's implement the methods that we call from `RPSGame.play`.

`displayWelcomeMessage` seems easy to implement, so we'll tackle it first. First, though, where do we put it? Our original code calls it as a function, not a method attached to some object. Since we're using OO programming, it should be a **method**. Since `displayWelcomeMessage` is an overall concern of the game, the `RPSGame` object seems like a reasonable choice to place the method.

```js
const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    displayGoodbyeMessage();
  },
};
```

Since `displayWelcomeMessage` is a method in the same object as `play`, we must use `this` to call it.

While we're at it, let's implement `displayGoodbyeMessage` as well -- it's nearly identical except for the message it displays:

```js
const RPSGame = {
  human: createPlayer(),
  computer: createPlayer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};
```

The next two method calls assume that we have a factory function that creates player objects. Both `this.human` and `this.computer` are created from a `createPlayer` factory function. Let's update the skeleton `createPlayer` function that we wrote earlier:

```js
function createPlayer() {
  return {
    // possible state: player name?
    // possible state: player's current move?

    choose() {
      // not yet implemented
    },
  };
}
```

We'll use `createPlayer` to create both the computer and human players. We probably need some state in the player object to identify the type of player (human or computer). We can do that with a property named `playerType` that stores either `'human'` or `'computer'` as a string:

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,

    choose() {
      // not yet implemented
    },
  };
}
```

We can provide the player type as an argument to `createPlayer` when we call it:

```js
const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  // code omitted for brevity
};
```

Now that we have a property that identifies the player type, we can use it in our implementation of the `choose` method:

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,

    choose() {
      if (this.isHuman()) {

      } else {

      }
    },
  };
}
```

Our `choose` method chooses a move for the player depending on the type of player represented by `playerType`. We can use an `isHuman` method to determine whether the `playerType` is `'human'`. The method would return `true` if `playerType` is `'human'`, and `false` if it is not.

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,

    choose() {
      if (this.isHuman()) {

      } else {

      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
}
```

Let's write the code for the computer's choice first: it's simpler since the computer merely picks a move at random:

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    // possible state: player's current move?
    playerType: playerType,

    choose() {
      if (this.isHuman()) {
        // TODO
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    },
  };
}
```

Let's think about this implementation a bit. The `choose` method returns a string that represents the player's move (the computer in this case). However, if we look at the way we call `choose` in `RPSGame.play()`, we can see that we ignore that value:

```js
const RPSGame = {
  // code omitted

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};
```

That suggests that `choose` should *change the state* in one of the application's objects. Since the player makes the move, let's add `move` as a property of the player object, and adjust the `choose` method accordingly:

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {

      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    // omitted
  }
}
```

In the next step, we'll handle the situation where the human player chooses a move. That means we need to obtain some input from the human player, and that we need to import the `readline-sync` package into our program. You've done this often, so we'll leave you to write the code yourself. In the rest of this assignment, we will assume that you have imported `readline-sync` into your program and assigned it to a `readline` constant.

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    // omitted
  }
}
```

### Step 2: Implement the `displayWinner`

Thus far, we've used our implementation of `RPSGame.play` to drive the implementation of some other methods. Right now, play looks like this:

```js
const RPSGame = {
  // code omitted
  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
}
```

We've implemented all the methods that this method uses except for `displayWinner`. We can implement it now since we know that `choose` stores the player's move as a piece of state in the `move` property.

The player objects, `human` and `computer`, are properties of the `RPSGame` object, we say that they collaborate with the `RPSGame` object. We can also say that they are **collaborators** of `RPSGame`. That also means that we can refer to them with the `this` keyword in methods that execute in the `RPSGame` context.

To determine who won, the `displayWinner` method must do something with the `human` and `computer` properties. Thus, it makes sense to make `displayWinner` a method on the object that contains those properties, namely, `RPSGame`. To get started, let's write some code so we can test our assumptions:

```js
const RPSGame = {
  // omitted

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.displayGoodbyeMessage();
  }
}
```

Thus far in this assignment, we've written a fair amount of code. We really should see whether it works, so let's take it for a spin. When you run the program, you should see something like this on the console.

```sh
$ node oo_rps.js # replace oo_rps.js with your file name!
Welcome to Rock, Paper, Scissors!
Please choose rock, paper, or scissors:
rock
You chose: rock
The computer chose: paper
Thanks for playing Rock, Paper, Scissors. Goodbye!
```

The output you see may show different choices for you and the computer, but the rest of the output should be identical.

Great! Lets' go ahead and complete the logic for `RPSGame.displayWinner`:

```js
displayWinner() {
  let humanMove = this.human.move;
  let computerMove = this.computer.move;

  console.log(`You chose: ${this.human.move}`);
  console.log(`The computer chose: ${this.computer.move}`);

  if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
    console.log('You win!');
  } else if ((humanMove === 'rock' && computerMove === 'paper') ||
             (humanMove === 'paper' && computerMove === 'scissors') ||
             (humanMove === 'scissors' && computerMove === 'rock')) {
    console.log('Computer wins!');
  } else {
    console.log("It's a tie");
  }
},
```

The essential features of our game are now complete. Run the program and play a few games of RPS to verify that it works. You should see something like the following play out on the console:

```sh
$ node oo_rps.js
Welcome to Rock, Paper, Scissors!
Please choose rock, paper, or scissors:
rock
You chose: rock
The computer chose: paper
Computer wins!
Thanks for playing Rock, Paper, Scissors. Goodbye!
```

### Step 3: Play Again

Let's make our game a little friendlier and add a "play again" feature where we'll ask the user whether they want to play again and proceed based on their answer. Let's make some changes to our `RPSGame.play` method:

```js
const RPSGame = {
  // code omitted

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }

    this.displayGoodbyeMessage();
  },
}
```

We've added a loop around the three main game steps, and we break out of the loop when the `playAgain` method returns a falsey value. We'll implement it on the `RPSGame` object since it makes sense as part of the game controller.

```js
const RPSGame = {
  // code omitted

  playAgain() {
    console.log('Would you like to play again? (y/n)');
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y' ? true : false;
  },
  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  }
}
```

The `playAgain` method asks the user if they want to play again and if the user input starts with `'y'`, it returns `true`, otherwise it returns `false`. We use that boolean value to control the loop in our `play` method.

There's a more idiomatic way to write that `return` statement: we don't need the explicit `true` and `false` values. Instead, we can write:

```js
playAgain() {
  console.log('Would you like to play again? (y/n)');
  let answer = readline.question();
  return answer.toLowerCase()[0] === 'y';
},
```

Since `===` returns `true` or `false`, we don't need the ternary operator and we don't need the specific boolean values. This idiom may be a bit challenging to get used to, at first. However, it's so commonplace that most developers prefer it and most style guides recommend it: you may as well get used to it.

### Step 4: Cleanup

After all that, our `createPlayer` function looks like this:

```js
function createPlayer(playerType) {
  return {
    // possible state: player name?
    playerType: playerType,
    move: null,

    // code omitted
  }
}
```

It looks like we don't need to track the player's name so we can remove the comment from our code:

```js
function createPlayer(playerType) {
  return {
    playerType: playerType,
    move: null,

    // code omitted
  }
}
```

Don't be afraid to remove something from the original design if you genuinely don't need it. Some developers throw the whole kitchen sink into an object's initial design, only later realizing that they have more state than they need. Worse yet, many are reluctant to get rid of the unneeded state -- after all, they might need it one day. In truth, it's just code clutter that makes it harder to understand the code.

End

## 11. Walk-through: OO RPS Design Choice

Our game's functionality is complete, but there are still some improvements we can make to the code. For instance, the conditional logic in the player object is not ideal and not object-oriented. Let's examine the current implementation of our `choose` method:

```js
function createPlayer(playerType) {
  return {
    // omitted for brevity

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    // omitted
  }
}
```

You'll notice that we have an `if/else` conditional in our `choose` method that does different things based on whether the player is a computer or a human. It's easy to see that we'll always have to deal with these two choices, even if we later extend the application in some manner.

The more significant problem, in this case, is that our factory function creates an object whose behavior depends on a property of that object. That doesn't seem troublesome when we create just two objects, but suppose we have tens, hundreds, or even thousands of objects. This approach rapidly becomes unfeasible and unmanageable.

For instance, let's say we have a `createAnimal` factory function that creates animal objects of different kinds. Suppose further that, within those objects, we have a `makeSound` method that prints the name of the animal sound to the console. Obviously, animals make different sounds: lions roar, cats meow, and dogs bark. Are we supposed to handle all these sounds with `if/else` conditionals for each? That would make our code extremely ugly and difficult to read:

```js
function createAnimal(animalType) {
  return {
    // omitted for brevity

    makeSound() {
      if (this.animalType === "lion") {
        console.log("roar!");
      } else if (this.animalType === "cat") {
        console.log("meow!");
      } else if (this.animalType === "dog") {
        console.log("bark!");
      } // additional tests omitted for brevity
    },

    // omitted
  }
}
```

We can think of each animal type (dog, cat, lion) as a *sub-type* of the underlying animal object. Most object-oriented programming languages handle this scenario with a pattern called **class inheritance**: child types inherit common properties and methods from a parent type. JavaScript also supports inheritance; we'll discuss that in another lesson. For now, we'll use separate factory functions for each sub-type.

Returning to our game, the sub-types of the player object are humans and computers. Instead of a single factory function for all players, we can use two separate factory functions, one for humans and one for computers. Let's create the `createComputer` factory function first.

```js
function createComputer() {
  return {
    move: null,

    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
}
```

In the above example, we initialize the `move` property to `null`. Strictly speaking, that's unnecessary since `choose` will set the property to one of the three choices. However, it's a good practice to initialize object properties explicitly. That makes it easy to see what the initial state of the object looks like at a glance. It also shows the state of all properties in one place.

That's much better: it's cleaner, simpler, easier to understand, and easier to use since we don't need to provide arguments. It also reduces the likelihood of errors since we don't need to worry about invalid arguments. The `choose` method doesn't have to check whether the object it belongs to is a human or a computer: it is always a computer object, so it only has to handle the logic for computer moves. That also means that both `playerType` and `isHuman` are no longer needed.

Next, lets implement the createHuman factory function:

```js
function createHuman() {
  return {
    move: null,

    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };
}
```

Again, this is a significant improvement over the original code; it has all the same benefits we mentioned in connection with the `createComputer()` factory function.

The only difference between the objects created by our factory functions is the code used to implement the `choose` methods. Thus, code that uses these objects can treat them both as "players" and call their `choose` method. The objects themselves handle choosing which implementation they should run. We can say that the human and computer object types are sub-types of the player type.

We can now get rid of `createPlayer` and use these two functions to create our player objects in `RPSGame`:

```js
const RPSGame = {
  human: createHuman(),
  computer: createComputer(),
  // code omitted for brevity
};
```

Great! We've split the `createPlayer` factory function into two functions. Though we now have an additional factory function, the logic of each function is more straightforward and more specific to its type.

However, there is some duplication between the two factory functions since both objects have a `move` property. Duplicating a single property in two objects isn't too concerning, but, suppose other properties require duplication. In OOP, sub-types often share multiple properties and methods. JavaScript provides some constructs that help extract such duplications to one place; we'll discuss them later when we talk about constructors, prototypes, and classes.

For now, let's see whether we can extract this common `move` property to a single place using the factory function pattern. One way we might try to do that is to move the property to a separate factory function:

```js
function createPlayer() {
  return {
    move: null,
  };
}
```

What's next? How do we make use of this factory function together with the `createComputer` and `createHuman` factory functions? It's not as straightforward as you might like, but here's how to do it with the `createHuman` factory:

```js
function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}
```

In this modified factory function, we first create a player object using the `createPlayer` function, then create the human object. Finally, we merge the two objects using `Object.assign`, then return the result.

See if you can do the same thing with the `createComputer` factory function.

Solution

```js
function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
}
```

We've extracted the common property, `move`, to a separate object factory, `createPlayer`. Since it's only one property, it's hard to see the benefits here. However, the general principle of *extracting duplicated code to a single place is always worth considering*. It makes changes to the code less error-prone and tedious. In the long run, it often leads to less work.

### One Last Step

At this point, it seems that we don't need the `createMove`, `createRule`, or `compare` functions. However, it's possible you will need them in the bonus features. Feel free to go ahead and delete them if you don't need them.
