function median(array) {
  let middle = Math.floor(array.length / 2);
  console.log(middle);
  let sortedNums = array.sort((a, b) => a - b);
  // console.log(sortedNums.slice(middle -1, middle + 1))
  // console.log(sortedNums)
  if (sortedNums.length % 2 === 1) {
    console.log(sortedNums[middle])
    return sortedNums[middle];
  } else {
    let medianNums = sortedNums.slice(middle - 1, middle + 1)
    // console.log(medianNums)
    return medianNums.reduce((sum, num) => sum + num, 0) / 2;
    console.log(medianNums); // 33 + 50 = 83 / 2 = 41.5
  }
}
// refactor
// function median(array) {
//   let middle = Math.floor(array.length / 2);
//   let sortedNums = array.sort((a, b) => a - b);

//   if (sortedNums.length % 2 === 1) return sortedNums[middle];
//     return sortedNums
//       .slice(middle - 1, middle + 1)
//       .reduce((sum, num) => sum + num, 0) / 2;
// }

function median(donations) {
  let sortedDonations = donations.sort((a, b) => a - b);
  let middle = sortedDonations.length / 2;

  if (Number.isInteger(middle)) {
    let middleNums = sortedDonations.splice(middle -1, 2);
    return middleNums.reduce((sum, num) => sum + num, 0) / 2;
  } else {
    return sortedDonations[Math.floor(middle)];
  }
}
console.log(median([3, 2, 1]) === 2);
console.log(median([33, 99, 100, 30, 29, 50]));
console.log(median([33, 99, 100, 30, 29, 50]) === 41.5);