# JS129 - Assessment: Object Oriented Programming with JavaScript Retake - 20220622

## Q1 answered

## Q2

## Q9 answered


1. Creates a new object.
2. Sets `[[Prototype]]` of the new object to the same object as the constructor's `prototype` property.
3. Sets the `constructor` property of the new object to point to the constructor function (the function that created the new object).
4. Sets `this` inside the function to refer to the new object.
5. Invokes the function.
6. Returns the new object implicitly (no `return` expression necessary; explicit return values only override the new object if the return value itself is an object).

## Q6

JavaScript objects can *inherit properties from other objects*. The object that another object inherits properties from is its **prototype**. The prototype chain, or prototypal inheritance, is how JavaScript inherits properties from other objects.

Looking up a property in the prototype chain is the basis for prototypal inheritance, or property sharing through the prototype chain. Objects lower down in the chain inherit properties and behaviors from objects in the chain above. That is, downstream objects can delegate properties or behaviors to upstream objects. When you access a property on an object, JavaScript looks for the property first in the object, then its prototype chain, all the way up to `Object.prototype`. A downstream object *overrides* an inherited property if it has a property with the same name.

Every object has an internal `[[Prototype]]` property that points to a special object, the object's prototype. It is used to look up properties that don't exist on the object itself.

## Q7

The simpler form of inheritance* is **prototypal inheritance** or **prototypal delegation**. We sometimes call this form of inheritance object inheritance since it works with one object at a time. An object's internal `[[Prototype]]` property points to another object, and the object can delegate method calls to that other object.

The object creation pattern called **pseudo-classical** is also known as the **constructor/prototype pattern**. The term "pseudo-classical" refers to the fact that the pattern mimics classes from other OO languages but doesn't actually use classes. In this pattern, we use a **constructor function** and a **prototype object** to create objects and provide common methods for those objects. In pseudo-classical inheritance, a constructor's prototype object (the object referenced by its `prototype` property) inherits from another constructor's prototype. That is, *a subtype inherits from a supertype*. All objects of a given type can share behaviors from the same source.

Both pseudo-classical and prototypal inheritance *use prototypal delegation under the hood*. If the requested property isn't found, the object delegates the request to the object's prototype object. If the requested property isn't there either, the prototype object delegates the request to its own prototype object. This process follows the prototype chain until the property or method is found or the end of the prototype chain is found.

## Q8 



## Q10 

JavaScript comes with a variety of built-in constructors and prototypes that let you *instantiate useful objects*. These constructors work like constructors for other objects; they're used with the `new` keyword to create objects. The `String` and `Number` constructors are two examples.

JavaScript silently wraps string primitives in a `String` class when it needs to use a method or property, like with `String.prototype.split`. As with strings, number primitives are also invisibly wrapped in objects to access methods like `Number.prototype.toFixed`.

~~
JavaScript silently wraps string primitives and number primitives in a String class when it needs to use a method or property.* In addition, `typeof str1` returns `object`, while `typeof str2` returns `string`.


As with strings, numbers and booleans both have primitive and object forms, and JavaScript invisibly wraps primitives in objects to access methods and properties. You should also *avoid creating `Number` and `Boolean` objects explicitly*.~~

## Q12

Polymorphism refers to the ability of objects with different types to respond in different ways to the same message (or method invocation); that is, data of different types can respond to a common interface.

**Inheritance** and **duck-typing** are the two main ways to achieve polymorphism. When a method has the same name, but a different implementation in different classes it is called polymorphism. When a method in a subclass replaces the implementation of the version in the superclass, we say that the subclass *overrides* the version in the superclass. Subclasses that override methods inherited from a superclass is one way in which we can implement polymorphism in our applications.

```js
// Inheritance-based Polymorphism = Objects are related through inheritance
class Animal {
  speak() {}
}

class Dog extends Animal {
  speak() { console.log("Woof!"); }
}

class Cat extends Animal {
  speak() { console.log("Meow!"); }
}

class Fish extends Animal {
}

let dog = new Dog();
let cat = new Cat();
let fish = new Fish();

dog.speak(); // Woof!
cat.speak(); // Meow!
fish.speak(); // (nothing happens)
```

```js
// Duck-typing based Polymorphism
let str = "abcde";
let arr = ["a", "b", "c", "d", "e"];

console.log(str.indexOf("c")); // 2
console.log(arr.indexOf("c")); // 2
```