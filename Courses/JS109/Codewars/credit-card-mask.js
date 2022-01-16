/* Credit Card Mask - 7 kyu

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples:
maskify("4556364607935616") === "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""

// "What was the name of your first pet?"
maskify("Skippy")                                   == "##ippy"
maskify("Nananananananananananananananana Batman!") == "####################################man!"

Algo
- input string
- if string's length less than or equal to 4 return the string
- initialize `result` to empty string
- iterate through string to string's
  - at index add #
  - concatenate to slice of string at the end
- return new string */

// function maskify(cc) {
//   if (cc.length <= 4) return cc;
//   let result = '';

//   for (let idx = 0; idx < cc.length - 4; idx++) {
//     result += '#';
//   }
//   return result + cc.slice(cc.length - 4);
// }

// fill(value)
// fill(value, start)
// fill(value, start, end)

// function maskify(cc) {
//   return cc.split('').fill('#', 0, -4).join('');
// }

// map
function maskify(cc) {
  let chars = cc.split('');

  return chars
    .map((char, idx) => {
      if (idx < chars.length - 4) return '#'
      else return char;
    })
    .join('')
}

console.log(maskify('1')) // === '1');
console.log(maskify('11111')) // === '#1111');
console.log(maskify('4556364607935616')) // === '############5616');

console.log(maskify('1') === '1');
console.log(maskify('11111') === '#1111');
console.log(maskify('4556364607935616') === '############5616');