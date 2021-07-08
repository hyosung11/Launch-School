function foo() {
  console.log(bar);
}

foo();

$ node error.js 
/Users/hyosungbidol-lee/Launch-School/Courses/JS100/Book/More-Stuff/error.js:2
  console.log(bar);
              ^

ReferenceError: bar is not defined
    at foo (/Users/hyosungbidol-lee/Launch-School/Courses/JS100/Book/More-Stuff/error.js:2:15)
    at Object.<anonymous> (/Users/hyosungbidol-lee/Launch-School/Courses/JS100/Book/More-Stuff/error.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1095:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:816:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)
    at node:internal/main/run_main_module:17:47