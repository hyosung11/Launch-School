// Regex boolean match

// function has_a_or_e(string) {
//   let results = string.match(/[ae]/g)
//   if (results) {
//     // a non-null return value from match is truthy
//     console.log(`WE have a match! ${results}`);
//   } else {
//     // a null return value from match is falsy
//     console.log(`No match here.`);
//   }
// }

// has_a_or_e("basketball"); // => We have a match! a,e,a
// has_a_or_e("football");   // => We have a match! a
// has_a_or_e("hockey");     // => We have a match! e
// has_a_or_e("golf");       // => No match here.
// has_a_or_e("SungOh")

// using /g with `test`
let regex = /b/g;
let str = "ababa";

console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => false

// next three invocations of `test` repeat the cycle
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => true
console.log(regex.test(str)); // => false