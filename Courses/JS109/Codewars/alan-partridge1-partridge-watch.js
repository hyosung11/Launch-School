function part(array) {
  let terms = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ];

  let count = 0

  for (let idx = 0; idx < array.length; idx++) {
    if (terms.includes(array[idx])) count += 1;
  }

  return count
    ? `Mine's a Pint${'!'.repeat(count)}`
    : "Lynn, I've pierced my foot on a spike!!";
}


// Test Cases
console.log(part(['Grouse', 'Partridge', 'Pheasant'])); // 'Mine\'s a Pint!');

console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin'])); // 'Lynn, I\'ve pierced my foot on a spike!!');

console.log(
  part([
    'Grouse',
    'Partridge',
    'Pheasant',
    'Goose',
    'Starling',
    'Robin',
    'Thrush',
    'Emu',
    'PearTree',
    'Chat',
    'Dan',
    'Square',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'BMW',
    'Graham',
    'Tool',
    'Nomad',
    'Finger',
    'Hamster',
  ])
); // 'Mine\'s a Pint!!!!!!!!');
