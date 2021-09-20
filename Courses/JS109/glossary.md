# Glossary

## Array Methods

`Array.prototype.forEach()`

## Scope

The function outputs `Hello, world!`, which it obtains from the global variable `hello`, then returns `undefined`. The function can use `hello` since functions have access to variables defined in the outer scope.

Output and Return Value

Object Mutation

Non-local Variable Use

```js
array.forEach(element => {
  console.log(element.foo);
});
```

This paragraph talks about the `forEach` method being
called by the object referenced by `array` in the above
code. It invokes the callback function for each element,
passing that element to the callback as an argument.
Within the callback, the element is known by the
parameter name `element`, and the callback uses the
`console.log` method to log the value of `element.foo`.
