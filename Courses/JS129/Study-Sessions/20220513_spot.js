/* SPOT Study Session with Allison */

// Implicit execution occurs when a function is invoked either as a standalone function or as a method of an object

// explicit execution context is

// Execution context 

// Execution context refers to the value of `this`. Implicit execution context 
// - It binds the execution context when the function is executed using **function call syntax**, eg., `bar()`.
//   - A function that is invoked using function call syntax receives the global object as its execution context.

// - It binds the execution context when the function is executed using **method call syntax**, e.g., `foo.bar()`.
//   - A function that is invoked using method call syntax receives the calling object as its execution context.


// - It binds the execution context when the function is executed by either `call` or `apply`.
//   - Both `call` and `apply` set the execution context for a function invocation.

// The execution context is a concept that refers to the environment in which a function executes. In JavaScript, it most commonly refers to the current value of the `this` keyword. When we talk about the execution context of a function or method call, we're talking about the value of `this` when that code executes. The context depends on *how the function or method was invoked*, not on where the function was defined. Explicit execution context that you set explicitly. The implicit execution context that JavaScript sets implicitly when your code doesn't provide an explicit context.

/* Encapsulation is the idea of bundling data and operations related to that data into a cohesive unit called an object.

In most OOP languages, encapsulation has a broader purpose. It also refers to restricting access to the state and certain behaviors. An object only exposes a public interface of the data and behaviors that other parts of the application need to work and keep its implementation details hidden. Thus, other objects can't change the data of an object without going through the proper interface. However, JavaScript does not directly provide the means to limit exposure of properties and methods. */


/*
JavaScript doesn't support multiple inheritance, but the mixin pattern helps developers overcome this limitation and get some of the benefits of multiple inheritance in an environment that only supports single inheritance.

A mixin is an object that defines one or more methods that can be "mixed-in" to a class. This grants that class access to all of the methods in the object. It's the only real workaround for the lack of multiple inheritance short of duplication.
*/


/*
A `mix-in` is an object whose properties are meant to be 'mixed in' to a type. The properties of the mix-in object, `otherType` are copied to the `prototype` property of the original `type` through `Object.assign(type.prototype, otherType)`. When new instances are created from the type, the instance also inherits from the mix-in object due to their presence in the type's prototype when the instance is created.
*/