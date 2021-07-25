let name = 'johnson';

['kim', 'joe', 'sam'].forEach((name) => {
  // uh-oh, we cannot access the outer scoped "name"!
  console.log(`${name} ${name}`);
});

// kim kim
// joe joe
// sam sam

// let name = 'johnson';

// ['kim', 'joe', 'sam'].forEach(fname => {
//   name = fname;
// });

// console.log(name); // sam