/* Break CamelCase - 6 kyu

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

// complete the function
function solution(string) {
  return string
    .split('')
    .map(char => {
    if (char === char.toUpperCase()) {
      return ` ${char}`;
    } else {
      return char;
    }
  })
  .join('');
}

// function expression
const solution = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join('');
};

// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}