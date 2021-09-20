// function appendTo(str, otherStr) {
//   for (let index = 0; index < otherStr.length; ++index) {
//     str += otherStr[index];
//   }

//   return str;
// }

// console.log(appendTo('Omi ', 'SungOh'));

function appendTo(str, otherStr) {
  return str + otherStr;
}

console.log(appendTo('Omi & ', 'SungOh'));