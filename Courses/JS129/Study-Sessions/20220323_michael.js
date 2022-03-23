1. **What is** **Object Oriented Programming in the context of JavaScript?**
  
  Object-Oriented Programming is a programming paradigm in which we think about a problem in terms of objects. In particular, it uses those objects to organize your program.
  
2. **Is JavaScript object oriented? Why or why not?**
  
  
3. What are the advantages of OOP?
  
- helps to organize code into a higher level of abstraction
- reduces dependencies, easier to maintain
- more flexible, easier to understand, easy to change

4. What are the disadvantages of OOP?
  
- larger than equivalent procedural programs
- less efficient, may require more memory, disk space, and computing power
  
5. What is encapsulation in context of OOP? Present an example that illustrates this concept.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors; an object only exposes the data and behaviors that other parts of the application need to work. In other words, objects expose a **public interface** for interacting with other objects and keep their implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. Unfortunately, JavaScript doesn't support access restrictions. There are ways to achieve a degree of access restriction, but they're not perfect. We'll return to this topic later.

6. In JavaScript, how does encapsulation differ from encapsulation in most other OO languages?

  - JavaScript does not support access restriction.
  
7. What is inheritance in the context of JS?
  
  
8. What makes JavaScript different from other OOP languages


9. What is **prototypal inheritance**? Present an example that illustrates this concept.

let obj = {a: 1, b: 2};
let otherObj = Object.create(obj);
otherObj.a;


10. What is the role of `[[Prototype]]` property?
  
 JavaScript objects use an internal `[[Prototype]]` property to keep track of their prototype. When you create an object with `Object.create()`, the new object's `[[Prototype]]` property gets assigned to the prototype object.

Note that `[[Prototype]]` is an **internal** property: you cannot access it directly in your code. However, you can access and replace its value with `Object` functions. For instance, `Object.getPrototypeOf()` takes an object as an argument and returns its prototype object: 
  
11. Let say we want to have a `dog` object. We want `dog` to be able to have access to method `makeSound()` (`makeSound(){console.log('sound')}`), but we don't want to declare it on `dog`. How many ways do you know that can make it possible?
    
    Use this to test your code:
    
    ```
    dog.makeSound(); // sound
    dog.hasOwnProperty('makeSound'); //false
    
    ```
  _example
  
  _example = _example;

  methode get(example) {
    return this._example
  }

Anthony's Tips
- bind
- built-in constructors

call

extend classes logically
