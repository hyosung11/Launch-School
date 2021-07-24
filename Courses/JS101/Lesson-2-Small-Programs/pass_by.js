// function changeName(name) {
//   name = 'bob'; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = 'jim';
//   changeName(name);
//   console.log(name); // => logs 'jim'
// }

// anotherFunction();

function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names); // => ['Chris', 'Kevin', 'Naveed']