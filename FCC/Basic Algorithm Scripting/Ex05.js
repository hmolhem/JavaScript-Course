// Return Largest Numbers in Arrays
let A = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
console.log(A.map( item => Math.max(...item)))
console.log(Math.max(...[4, 5, 1, 3]));

function largestOfFour(arr) {
    return arr.map(el => Math.max(...el));
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  // Method 1
  // function largestOfFour(arr) {
  //   const results = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let largestNumber = arr[i][0];
  //     for (let j = 1; j < arr[i].length; j++) {
  //       if (arr[i][j] > largestNumber) {
  //         largestNumber = arr[i][j];
  //       }
  //     }
  //     results[i] = largestNumber;
  //   }
  
  //   return results;
  // }

  // Method 2
  // function largestOfFour(arr) {
  //   return arr.map(function(group) {
  //     return group.reduce(function(prev, current) {
  //       return current > prev ? current : prev;
  //     });
  //   });
  // }

  // Method 3
  // function largestOfFour(arr) {
  //   return arr.map(Function.apply.bind(Math.max, null));
  // }

  // Method 4
  // function largestOfFour(arr, finalArr = []) {
  //   return !arr.length
  //     ? finalArr
  //     : largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
  // }