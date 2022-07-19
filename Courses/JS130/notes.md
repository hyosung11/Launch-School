# JS130 Notes

## Closure

[JavaScript the Hard Parts: Closure, Scope & Execution Context](https://www.youtube.com/watch?v=XTAzsODSCsM&t=6s)

When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's execution context.

When the function finishes executing, its local memory is deleted (except the returned value).

But what if our functions could hold on to live data/state between executions?

This would let our function definitions have an associated cache/persistent memory.

But it starts with returning a function from another function.

**Functions can be returned from other functions** (Higher-order Function)

```js
function instructionGenerator() {
  function multiplyBy2(num) {
    return num * 2;
  }

  return multiplyBy2;
}

const generatedFunc = instructorGenerator();
```

How can we run/call `multiplyBy2` now?

```js
const result = generatedFunc(3); // 6
```

**Calling a function in the same scope as it was defined**.

```js
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter ++;
  }

  incrementCounter();
}

outer();
```

Where you define your function determines what variables your function has access to when you call the function.

