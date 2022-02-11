/* 9:00 Study Session */

/* 9:09 start

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

"abc#d##c"      ==>  "ac"

'abc#d##c' --> ac

"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

problem
- input string
- output new string

algorithm
- input string
- init `result` to empty array
- let array = string.split('')
- iterate through array by char
  - if char is not a '#'
    - push char to `result`
  - else pop char from `result`
- join the array
- return array

cleanString('abc#d##c'); //"ac"
cleanString('abc####d##c#'); //''
*/

// Michael's Version
function cleanString(string) {
  let result = [];
  let array = string.split('');

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] !== '#') { // 'abc#'
      result.push(array[idx]);
      // console.log(result)
    } else result.pop();
  }

  return result.join('')
}

console.log(cleanString('abc#d##c')); //"ac"
console.log(cleanString('abc####d##c#')); //''

/*Michael's Problem */

/* 9:43 EST Start

Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered. 
    
 PROBLEM: 
  input: string
  ouput: string; last numbers are numbers + 1;   
    
   EXAMPLE / TEST: 
     incrementString('') === '1' -- empty is 1
     incrementString('foo') -- '1' -- append 1;
     incrementString('foobar001') --- 'foobar002'
     incrementString('foobar99') --- 'foobar100'
     incrementString('foobar099') === 'foobar100'

  DATA STRUCTURE:
    result array
    number array
    input: string
    output: string; string plus incremented last number;

  ALGO: 
    define function increment string with para string
      define a result array
      define a number array
      define a numerical array = []
        iterate through the string
          if the characters are not in the number array
            push into result
         into my numerical array
          .join Number(ele + 1)
    */

/* 9:43 EST Start

Write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.
    If the number has leading zeros the amount of digits should be considered. 
    
 PROBLEM: 
  input: string
  ouput: string; last numbers are numbers + 1;   
    
   EXAMPLE / TEST: 
     incrementString('') === '1' -- empty is 1
     incrementString('foo') -- '1' -- append 1;
     incrementString('foobar001') --- 'foobar002'
     incrementString('foobar99') --- 'foobar100'
     incrementString('foobar099') === 'foobar100'

  DATA STRUCTURE:
    result array
    number array
    input: string
    output: string; string plus incremented last number;

  ALGO: 
    define function increment string with para string
      define a result array
      define a number array
      define a numerical array = []
        iterate through the string
          if the characters are not in the number array
            push into result
         else into my numerical array
          let numbers = numberical array.join Number(ele + 1);
          slice the diferences and conatenate element
        iterate throufh the result
          push numbered elements in result
          return result;
    */

function incrementString(string){
  let numbers = '1234567890'.split('');
  let numberFromString = [];
  let result = [];

  for(let i = 0; i < string.length; i++){
  if(numbers.includes(string[i])){
    numberFromString.push(string[i])
  } else {
    result.push(string[i])
  }
}

let realNumbers = String(Number(numberFromString.join('')) + Number(1)).split('');

  if(numberFromString.length > realNumbers.length){
    realNumbers = (numberFromString
    .slice(0, numberFromString.length - realNumbers.length)
    .concat(realNumbers))
  } 

  for(let i = 0; i < realNumbers.length; i++){
    result.push(realNumbers[i])
  }

  return result.join('');
}

console.log(incrementString('') === '1');
console.log(incrementString('foo')); // === "foo1");
console.log(incrementString('foobar000')); // === "foobar001");
console.log(incrementString('foobar99'))
console.log(incrementString('foobar001') === 'foobar002');
console.log(incrementString('foobar99') === 'foobar100');
console.log(incrementString('foobar099') === 'foobar100');

console.log(incrementString('') === '1');
console.log(incrementString('foo')); // === "foo1");
console.log(incrementString('foobar000')); // === "foobar001");
console.log(incrementString('foobar001') === 'foobar002');
console.log(incrementString('foobar99') === 'foobar100');
console.log(incrementString('foobar099') === 'foobar100');
