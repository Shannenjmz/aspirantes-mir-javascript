function maxIndex(array) {
    if (array.length === 0) {
      return -1;
    }
  
    let maxNumber = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i];
        maxIndex = i;
      }
    }
  
    return maxIndex;
  }
  
  console.log(maxIndex([1, 3, 2])); // 1
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
  console.log(maxIndex([])); // -1
  