// Slice and Splice
function frankenSplice(arr1, arr2, n) {
    let x = arr2.slice();
    x.splice(n,0,...arr1)
    return x;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  // Method 1
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }

  // Method 2
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }