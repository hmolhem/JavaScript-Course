// Iterate Through All an Array's Items Using For Loops
function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

  
  function filteredArray(arr, elem) {
    console.log(arr)
    let newArr = [];
    // Only change code below this line
      for (let i = 0; i < arr.length; i++){
        if (arr[i].indexOf(elem) === -1)
        newArr.push(arr[i]);
      }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3));
  // filteredArray([[3, 2, 3], [1, 6, 2], [3, 13, 26], [19, 3, 9]], 3);