function max(array) {
  if (array.length === 0) {
    return undefined;
  } 
  let maxNumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

console.log(max([1, 3, 2]));
console.log(max([10, 9, 8, 7, 6, 5, 4])); 
console.log(max([]));
