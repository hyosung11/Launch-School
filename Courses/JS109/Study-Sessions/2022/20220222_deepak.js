/* Routine before the exam
- do a warmup
  - e.g., find all substrings in a string
  - e.g., print all the numbers from 0 to num

- how sharp are you?
- how well-rested are you?

have same routine leading into the exam
- go for a walk
- do some hard problems
- intermittent fasting

- `Object.entries()`
- `test()`
- `match()`

*/

/*

Given a string, return an array of all of the strings substrings except for the last character. Work with the whole string.


Algorithm
- declare `findSubstrings` function with `string` parameter
- init `result` array

- iterate over the string from idx to string's length outer loop
  - iterate over the string from idx + 1 to string's length inner loop
    - slice the string from idx, jdx
    - push slices to `result` array
- return `result`
*/

function findSubstrings (string) {

  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      result.push(string.slice(idx, jdx))
    }
  }

  return result;
}

// Test cases:
console.log(findSubstrings('hi')); // ['h']
console.log(findSubstrings('abc')); // ['a', 'ab', 'b']

/*

Given an array of subarrays:
  For every even indexed subarray
    print every even indexed element

Algorithm
- declare `printer()` with `array` parameter
- iterate over array
  - if subarray at idx divided by 2 equals 0
    - log the even indexed elements in the subarray

Algorithm:
  define `printer()` with the parameter `nestedArray`
    iterate trhough `nestedArray`
      if isEvenIndex(index)
        iterate through element
          if index of the inner element is even
            console log element

  define `isEvenIndex()` with the parameter `numer`


*/

function printer(nestedArray) {

  for (let i = 0; i < nestedArray.length; i += 1) {
    if (i % 2 === 0) {
      for (let j = 0; j < nestedArray[i].length; j += 1) {
        if (j % 2 === 0) {
          console.log(nestedArray[i][j]);
        }
      }
    }
  }
}

// function printer (array) {

//   for (let idx = 0; idx < array.length; idx += 1) {

//     if (array[idx] % 2 === 0) { // [1, 2, 3]
//       console.log(array[idx][idx] % 2 === 0)
//     }

//     // console.log(array[idx]);
//   }
// }


console.log(printer([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
]));


// 1
// 3
// 7
// 9

/*

Given an array of subarrays:
  For every even indexed subarray
    print every even indexed element

Algorithm
- declare `printer()` with `nestedSubarrays` parameter
- iterate over the `nestedSubarray` outer loop
  - if idx of subarray is even
    - iterate over the `nestedSubarrays` inner loop
      - if index is even print the element
*/

function printer (nestedSubarrays) {

  for (let idx = 0; idx < nestedSubarrays.length; idx += 1) {
    if (idx % 2 === 0) {

      for (let jdx = 0; jdx < nestedSubarrays[idx].length; jdx += 1) {
        if (jdx % 2 === 0) {
          console.log(idx, jdx);
          // console.log(nestedSubarrays[idx][jdx]);
        }
      }
    }
  }
}


function printer2(subarrays) {
  let filteredSubarrays = subarrays.filter((element, index) => index % 2 === 0);

  let resultArray = [];

  filteredSubarrays.forEach(subarray => {
    subarray.forEach((element, index) =>{
      if (index % 2 === 0) resultArray.push(element)
    })
  })

  resultArray.forEach(element => console.log(element));
}

let a = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];

// console.log(a[0][0]);
// console.log(a[0][2]);
// console.log(a[2][0]);
// console.log(a[2][2]);

printer2(a);

// 1
// 3
// 7
// 9

function printer2(subarrays) {
  subarrays.forEach((subarray, index) => {
    if (index % 2 === 0) {
      subarray.forEach((element, index) => {
        if (index % 2 === 0) console.log(element);
      });
    }
  });
}

/*

Given an array of subarrays:
  For every even indexed subarray
    print every even indexed element

Algorithm
- declare `printer()` with `nestedSubarrays` parameter
- iterate over the `nestedSubarray` outer loop
  - if idx of subarray is even
    - iterate over the `nestedSubarrays` inner loop
      - if index is even print the element
*/

function printer (nestedSubarrays) {

  for (let idx = 0; idx < nestedSubarrays.length; idx += 1) {   
    if (idx % 2 === 0) {
      
      for (let jdx = 0; jdx < nestedSubarrays[idx].length; jdx += 1) {
        if (jdx % 2 === 0) {
          // console.log(idx, jdx);
          console.log(nestedSubarrays[idx][jdx]);
        }
      }
    }
  }
} 


// nestedSubarrays[i][j]
// element

function printer2(subarrays) {
  
  subarrays.forEach((subarray, index) => {
    if (index % 2 === 0) {
      subarray.forEach((element, index) => {
        if (index % 2 === 0) {
          console.log(element);
        }
      })
    }
  })
}

let a = [
        [1, 2, 3],
        [4, 5, 6, 8, 10, 23, 14, 15],
        [7, 8, 9],
        [8, 9, 10, 11, 12, 15],
        ];


// only print even sub arrays
// only print elements at indexes 3 and 5

// console.log(a[0][0]);
// console.log(a[0][2]);
// console.log(a[2][0]);
// console.log(a[2][2]);

printer2(a);

// 1
// 3
// 7
// 9

function printer(nestedSubarrays) {
  for (let idx = 0; idx < nestedSubarrays.length; idx += 1) {
    if (idx % 2 === 1) {
      for (let jdx = 0; jdx < nestedSubarrays[idx].length; jdx += 1) {
        if (jdx % 2 === 1) {
          // console.log(idx, jdx);
          console.log(nestedSubarrays[idx][jdx]);
        }
      }
    }
  }
} 