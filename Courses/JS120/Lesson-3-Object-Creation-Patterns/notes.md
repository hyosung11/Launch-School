# Lesson 3: Object Creation Patterns

## 1. Introduction

In lesson 1, we saw the power of an object creation mechanism when we studied the **object factory pattern** for creating objects. In this lesson, we'll review that pattern, and talk about some other patterns.

Unlike other mainstream languages, JavaScript doesn't implement behavior sharing using class-based inheritance even though ES6 introduced the class keyword to the language. Instead, it *uses the object prototype to share properties*. This distinction is crucial to understanding how JavaScript generates individual objects; it forms the basis of all object-creation patterns in JavaScript that feature behavior sharing.

We'll begin by looking at different ways to generate individual objects and then explore object prototypes. Next, we'll highlight two ways to create objects in an object-oriented pattern - one which simulates a classical approach, and another that uses the `class` syntax.

The topics covered by this lesson are at the heart of OOP in JavaScript. Prototype-based object-orientation is not a straightforward concept to grasp, and it takes time to get used to this way of thinking. Take it slow, read the assignment multiple times, and be sure to work through all the practice problems to let the concepts sink in. Let's start!

## 2. Review - OOP Principles: Encapsulation

In the previous course, we dealt mostly with procedural programming where we have data stored in a bunch of variables, and functions that operate on this data. As the program grows, so does the complexity and, before you know it, you end up with functions all throughout the code split up from the data that they operate on.

Object-oriented programming solves this problem. Objects provide a means to group related data and functions into one unit. In the context of the object, the data and functions are commonly called state and methods respectively.

### 2.1 Encapsulation

This grouping together of related data and functions is what’s called **encapsulation** and is one of the fundamental principles of object-oriented programming.

To illustrate, let’s take the following code:

```js
let overtime = 10;
let baseSalary = 6000;
let rate = 50;

function computeWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate)
}
```

Up top are the data related to the employee’s wage and a function that operates on the data. The object-oriented way of solving this problem by using encapsulation is done by simply combining data and related functions into one unit like so:

```js
let employee = {
  baseSalary: 6000,
  overtime: 10,
  rate: 50,
  computeWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
  }
}
```

As you can see, everything that's related to the `employee` object is bundled. This is the beauty of object-oriented programming. It organizes code into logical units.

### 2.2 Review - OOP Principles: Encapsulation Summary

We've just reviewed the concept of encapsulation and how it's relevant to object-oriented programming. In the example given, we *instantiated an object using the object literal syntax*. There are other more sophisticated patterns of object creation that we'll cover over the remaining assignments. However keep in mind that, at the very core, we are essentially doing the same thing: *grouping data and related functions together*.

## 3. Review - Factory Functions

In lesson 1, we learned how to *create objects in bulk* by using the factory function pattern. We'll review that concept before we move forward and discuss some other object creation patterns.

### 3.1 Factory Functions

Object factories, or factory functions (also called the Factory Object Creation Pattern), provide a simple way to create related objects based on a predefined template:

```js
function createPerson(firstName, lastName = '') {
  let person = {};

  person.firstName = firstName;
  person.lastName = lastName;

  person.fullName = function() {
    return `${this.firstName} ${this.lastName}`.trim();
  };

  return person;
}

let john = createPerson('John', 'Doe');
let jane = createPerson('Jane');

john.fullName(); // => 'John Doe'
jane.fullName(); // => 'Jane'
```

We can simplify that somewhat by returning an object literal:

```js
function createPerson(firstName, lastName = '') {
  return {
    firstName: firstName,
    lastName: lastName,

    fullName: function() {
      return `${this.firstName} ${this.lastName}`.trim();
    }
  };
}
```

The factory function lets us create multiple objects of the same "type" with a pre-defined "template." However, it has some disadvantages:

- Every object created with a factory function has a full copy of all the methods. That's **redundant**, and it can place a heavy load on system memory.

- There is no way to inspect an object and learn whether we created it with a factory function. That effectively *makes it impossible to identify the specific "type" of the object*; at best, you can only determine that an object has some specific characteristics.

## 4. Practice Problems - Factory Functions

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

Wow, this is confusing. It looks familiar from GA but not clear at all.

## 5. Constructors

**Object constructors**, or **constructors** for short, are another way to create objects in JavaScript. You can think of a constructor as a little factory that can create an endless number of objects of the same type. If that sounds a bit like a factory function, that's okay -- there are some differences, but the basic idea is the same.

Superficially, a constructor looks and acts a lot like a factory function: you define a constructor once then invoke it each time you want to create an object of that type. As we'll see soon, though, there's a little extra that goes into a constructor.

The best way to learn how constructors work is to create one. Let's look at the following `car` object:

```js
let car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2016,
  started: false,

  start() {
    this.started = true;
  },

  stop() {
    this.started = false;
  },
};
```

We don't just want *a* car, however. We want a mechanism that creates any car that has those properties and methods. To do that, we can use a factory function to create individual cars:

```js
function createCar(make, model, year) {
  return {
    make, // shorthand for `make: make`
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },

    stop() {
      this.started = false;
    },
  };
}

let corolla = createCar('Toyota', 'Corolla', 2016);
let leaf = createCar('Nissan', 'LEAF', 2018);
let nova = createCar('Chevrolet', 'Nova', 1974);
```

This factory function creates new cars of any make, model, or year, and ensures that the engines are initially off.

Another way to accomplish the same thing is to use a constructor function and the `new` keyword:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.started = false;

  this.start = function() {
    this.started = true;
  };

  this.stop = function() {
    this.started = false;
  };
}

let corolla = new Car('Toyota', 'Corolla', 2016);
let leaf = new Car('Nissan', 'LEAF', 2018);
let nova = new Car('Chevrolet', 'Nova', 1974);
```

Defining a constructor is nearly identical to defining an ordinary function, but there are differences. For starters, notice that *we gave the constructor a name that begins with a capital letter*: `Car`. Capitalizing the name isn't a language requirement, but it is a convention employed by most JavaScript developers.

The function parameters, in general, match the properties associated with each `Car` object. In this case, we supply parameters for all of the properties except `started`, which receives an initial value instead. *The initial value for such properties can come from anywhere.* For instance, we can compute the value from other properties or retrieve a value from a database.

### 5.1 Calling a Constructor Function

The most striking features that distinguish constructors from ordinary functions are that:

- we call it with the `new` keyword,
- we use `this` to set the object's properties and methods, and
- we *don't supply an explicit return value* (we can, but usually don't).

By now, we know that `this` always refers to an object. Which object does it refer to in this function? Of course, we already know the answer to that question: its value depends on how we call the function. Calling constructors is where you see the most significant difference between them and other functions.

Let's create a `Car` object:

```js
let corolla = new Car('Toyota', 'Corolla', 2016);

corolla.make;    // => 'Toyota'
corolla.model;   // => 'Corolla'
corolla.year;    // => 2016
corolla.started; // => false

corolla.start();
corolla.started; // => true
```

Notice that the `new` keyword precedes the function invocation. This combination of using `new` with a function call treats the function as a constructor.

How does that code work, then? What's so different about using the `new` keyword to invoke the function? JavaScript takes the following steps when you invoke a function with `new`:

1. It creates an entirely new object.
2. It sets the prototype of the new object to the object that is referenced by the constructor's `prototype` property. We'll discuss this in a later assignment. We mention it now for completeness.
3. It sets the value of `this` for use inside the function to point to the new object.
4. It invokes the function. Since `this` refers to the new object, we use it within the function to set the object's properties and methods.
5. Finally, once the function finishes running, `new` returns the new object even though we don't explicitly return anything.

We can now use the new object in any manner appropriate for a Car object.

**JavaScript won't complain about a missing `new` keyword.**

```js
Car(); // => undefined
```

If you don't use the `new` keyword, the constructor function won't work as intended. Instead, it acts like an ordinary function. In particular, no new objects are created, so `this` won't point to a new object.

Furthermore, since functions that don't return an explicit value return `undefined`, calling a constructor without `new` also returns `undefined`. When you use `new`, however, the function doesn't have to return anything explicitly: it returns the newly created object automatically.

### 5.2 Who Can be a Constructor

You can use `new` to call almost any JavaScript function that you create. However, *you cannot call arrow functions with `new`* since they use their surrounding context as the value of `this`:

```js
let Car = (make, model, year) => {
  this.make = make;
  this.model = model;
  this.year = year;
}

new Car(); // TypeError: Car is not a constructor
```

You can also use `new` on methods that you define in objects. Consider:

```js
let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let car1 = new foo.Car('Toyota', 'Camry', 2019);
car1.make; //=> 'Toyota'
```

However, calling a method defined with concise syntax (also called a concise method) *won't work*:

```js
let foo = {
  Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

new foo.Car(); //=> Uncaught TypeError: foo.Car is not a constructor
```

In addition, many -- but not all -- built-in objects and methods are *incompatible* with `new`:

```js

new console.log(); //=> Uncaught TypeError: console.log is not a constructor
new Math();        //=> Uncaught TypeError: Math is not a constructor
new parseInt("3"); //=> Uncaught TypeError: parseInt is not a constructor

new Date();        //=> 2019-06-26T02:50:20.191Z
```

`new` is also incompatible with special functions known as **generators** (a topic that we don't currently cover at Launch School).

### 5.3 Constructors with Explicit Return Values

What happens when you use `new` to call a function that returns an explicit value?

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return 'a cat';
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // 15
```

That's curious. Even though we explicitly returned the string `'a cat'`, our constructor returned the cat object with `name`, `breed` and `weight` as its properties.

Note that `'a cat'` is a **primitive value**. Suppose we returned an object instead. What would happen, then?

```js
function Cat(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  return { foo: 1 };
}

let fluffy = new Cat('fluffy', 'Persian', 15);
fluffy.weight; // undefined
fluffy.foo; // 1
```

This time the constructor returned the object { foo: 1 }, not a cat object.

The rule here is that a constructor that explicitly tries to return an object returns that object instead of a new object of the desired type. In all other situations, it returns the newly created object, provided no errors occur. In particular, the constructor ignores primitive return values and returns the new object instead.

### 5.4 Supplying Constructor Arguments with Plain Objects

Constructor functions sometimes have to grow with the needs of a program. That often means adding more arguments to the constructor. For instance, our `Car` constructor may one day end up looking like this:

```js
function Car(make, model, year, color, passengers, convertible, mileage) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.passengers = passengers;
  this.convertible = convertible;
  this.mileage = mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}
```

That's quite a few parameters, with plenty of opportunities for mistakes. For instance, we may pass the arguments in the wrong order, and JavaScript won't complain. That might seem like a minor inconvenience, but it causes more bugs than you might think. Not only that, those bugs are often quite nasty and hard to diagnose. The more parameters a function needs, the harder it is to read the code and the more likely that problems will arise.

One common technique that we can use to manage our parameters better involves *passing them to our constructor with an object argument*:

```js
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
}

let civic = new Car(civicArgs);
```

Of course, that means that we now have to rework our `Car` constructor to accept an object as an argument:

```js
function Car(args) {
  this.make = args.make;
  this.model = args.model;
  this.year = args.year;
  this.color = args.color;
  this.passengers = args.passengers;
  this.convertible = args.convertible;
  this.mileage = args.mileage;
  this.started = false;

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

With `Object.assign`, we can simplify this constructor considerably:

```js
function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of methods
}
```

However, one drawback of the `Object.assign` approach is that the `args` object may contain properties that the `Car` object doesn't need. Those additional properties will, nevertheless, get added to the `Car` object. Those properties may just be excess baggage for the objects to carry around, but they *may also cause trouble*.

### 5.5 Determining an Object's Type

Many object-oriented languages, like Java or C++, have a strong notion of object types. In most such languages, it's easy to determine the object's type, such as a dog or car. JavaScript, however, treats objects and their types in a looser, more dynamic way. You can't determine the specific type of arbitrary JavaScript objects; they are dynamic structures with a type of `object`, no matter what properties and methods they have. However, *we can get some useful information about an object if we know which constructor created it*.

Remember that the `new` operator creates a new object. Suppose that you call the Car constructor with `new`. Informally, we can say that the resulting object is a car. More formally, we can say that the object is an **instance** of a `Car`.

The `instanceof` operator lets us determine whether a given constructor created an object:

```js
let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

if (civic instanceof Car) {
  console.log("It's a car!");
} else {
  console.log("It's not a car.");
}
```

One effect that we didn't mention when talking about the `new` operator is that t*he object it returns contains some information that ties it back to the constructor that created the object*. The `instanceof` operator uses that information to determine what constructor created the object. We'll talk more about how this mechanism works in the next assignment.

### 5.6 `new` and Implicit Execution Context

In an earlier lesson, we discussed how a function could receive an implicit execution context. In particular, function and method calls provide an implicit context. For a function call, the implicit context is the global object; for a method call, it's the object used to call the method.

Now that we know about constructors, we can add a constructor call with `new` as a third way to provide an implicit execution context. When you call a function with `new`, its implicit context is the new object.

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

## 6. Constructors with Prototypes

### 6.1 Introduction

In the previous assignment, we learned how to use constructor functions as factories that create objects. One question we didn't answer, however, was why we need to have constructor functions along with their somewhat strange use of `this` and `new`. We can accomplish practically the same thing with object factories. We'll answer that question in this assignment.

Let's take a closer look at what happens when we create some objects with a constructor:

```js
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

Each of these dog objects, when created, receive the `name`, `breed`, and `weight` properties as well as the `bark` method. The properties have values that differ between objects, but the `bark` method remains the same in all. However, every time we create a new dog object, we must create a new `bark` method so we can add it to the object. We can verify that each object has its own `bark` method with `hasOwnProperty`:

```js
maxi.hasOwnProperty('bark');   // true
dexter.hasOwnProperty('bark'); // true
biggie.hasOwnProperty('bark'); // true
maxi.bark === dexter.bark;     // false
maxi.bark === biggie.bark;     // false
dexter.bark === biggie.bark;   // false
```

If that seems inefficient and wasteful to you, you're right! We're not repeating any code, but the runtime must create a new copy of the method every time we create an object. For small programs with few objects like this one, that may not be a problem. However, when you start getting into hundreds or thousands or even millions of objects, the multiple function objects can be hard on resources, especially on devices with little memory. Wouldn't it be nice if we could create the `bark` method just once rather than using a different copy of that method in every dog object?

### 6.2 Method Delegation to Prototypes

Earlier, we learned that we could use prototypes to share code between objects of the same type. Prototypes are especially useful for sharing methods as all objects of a particular type share the same prototype object. Furthermore, delegation means that we can share methods by putting them in the prototype object; if an object doesn't contain a requested method, JavaScript searches the prototype chain to find the method.

Thus, we can define a method once in the prototype object, and let the inheriting objects delegate the method calls to the prototype. We can use prototypes in conjunction with constructors to achieve the same result:

```js
let DogPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, DogPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  // this.bark method removed.
}
```

In this code, we've changed our `Dog` constructor and created a `DogPrototype` object. The first thing we do inside the constructor is set `DogPrototype` as the prototype of the newly created dog object. We then assign the arguments to the properties.

Note that we can continue to use our constructor without change:

```js
let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'
```

This time, however, the `bark` method isn't defined on the individual objects, but is, instead, defined on the `[[Prototype]]` property:

```js
maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
Object.getPrototypeOf(maxi).bark === DogPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === DogPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === DogPrototype.bark; // true
```

The `DogPrototype` object has the only copy of the method; all dog objects delegate `bark` to the `DogPrototype` object. If you have dozens of dog objects in your program, it's easy to see that adding prototypes into the mix can make better use of memory.

Okay, we now have a constructor and a related prototype object. Together, they construct objects of some type. In our code here, we can guess that the constructor and prototype are related by looking at their names. However, it would be better if we could establish that relationship more concretely. Let's assign the prototype object to a property of the `Dog` function.

```js
// Delete DogPrototype

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};
```

Since JavaScript functions are objects, we can add properties to them. Here, we assign the prototype object to a `myPrototype` property on the `Dog` function object. Thus, we clearly show our intent that all dogs inherit from the `Dog.myPrototype` object. Once we've done that, we can change our constructor function to use `Dog.myPrototype` as the prototype object.

Take some time to understand why this code works. It can be confusing when you first encounter it. It's a little like working with **recursive functions** as we did in the [Introduction to Programming With JavaScript book](https://launchschool.com/books/javascript/read/loops_iterating#recursion), which is to say, it's a bit hard to wrap your head around this code. To help, here's the complete code as it now stands:

```js
function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false

Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true
```

### 6.3 The Constructor `prototype` Property

So far, so good. We have a constructor function and a prototype object that work together. Between them, they create dog objects for us that don't waste memory with multiple copies of methods. However, we still haven't explained why we should bother with constructors. We can pair a prototype with a factory function and get the same effect.

What makes constructors special is a characteristic of all function objects in JavaScript: they all have a prototype property that we call the **function prototype** to distinguish them from the prototypes used when creating ordinary objects. The code we showed in the previous section emulates something that JavaScript bundles with constructors. Let's take a look at that property:

```sh
Dog.prototype; // => Dog {}
```

When you call a function `Foo` with the `new` keyword, JavaScript sets the new object's prototype to the current value of `Foo`'s `prototype` property. That is, the constructor creates an object that inherits from the constructor function's prototype (`Foo.prototype`). Since inheritance in JavaScript uses prototypes, we can also say that the constructor creates an object whose prototype references `Foo.prototype`.

The terminology of constructor prototypes and object prototypes is extremely confusing. Note in particular that we use the term "prototype" to refer to 2 distinct but related concepts:

1. If `bar` is an object, then the object from which `bar` inherits is the **object prototype**. By default, constructor functions set the object prototype for the objects they create to the constructor's prototype object.

2. The **constructor's prototype object**, also called the **function prototype**, is an object that the constructor uses as the object prototype for the objects it creates. In other words, each object that the constructor creates inherits from the constructor's prototype object. The constructor stores its prototype object in its `prototype` property; that is, if the constructor's name is `Foo`, then `Foo.prototype` references the constructor's prototype object.

It's easy to get confused about the differences between these two kinds of prototypes. Be sure you understand the differences before moving on. In most cases, when we talk about a **prototype** without being more explicit, we mean an **object prototype**. We'll talk about the constructor's prototype, the function prototype, or the `prototype` property when talking about a constructor's prototype object.

Note that *constructors don't inherit from the constructor's prototype object*. Instead, *the objects that the constructor creates inherit from it*.

At this point, you may want to rewatch the first 12 minutes of the [JavaScript OOP video](https://www.youtube.com/watch?v=-N9tBvlO9Bo) that you watched earlier. The discussion of the differences between the object prototype (what the speaker calls *dunder proto* or `__proto__`) and the constructor's prototype object should help clarify these differences.

As we've said before, every JavaScript function has a `prototype` property. However, JavaScript only uses it when you call that function as a constructor, that is, by using the `new` keyword. With this information, we can abandon our home-grown constructor-prototype pairing and use the one that JavaScript provides instead:

```js
function Dog (name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'
```

Here's a diagram illustrating the `prototype` and `constructor` links we've discussed.

![constructor-prototype-map](Courses/JS120/Lesson-3-Object-Creation-Patterns/constructor-prototype-map.png)

### 6.4 Overriding the Prototype

