// function shortLongShort(string1, string2) {
//   if (string1.length > string2.length) {
//     return string2 + string1 + string2;
//   } else {
//     return string1 + string2 + string1;
//   }
// }

function shortLongShort(string1, string2) {
  return string1.length > string2.length ? string2 + string1 + string2 : string1 + string2 + string1;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"