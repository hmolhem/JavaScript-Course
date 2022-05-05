// Finders Keepers
function findElement(arr, func) {
    let num = arr.filter(func);
    return num.length ? num[0]:undefined;
  }
  
  console.log(findElement([1, 3, 5, 9, 10], num => num % 2 === 0));

//   Method 01
//   function findElement(arr, func) {
//     let num = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       num = arr[i];
//       if (func(num)) {
//         return num;
//       }
//     }
  
//     return undefined;
//   }

// Method 02
// function findElement(arr, func) {
//     return arr.find(func);
//   }

// Method 03
// function findElement(arr, func) {
//     return arr[arr.map(func).indexOf(true)];
//   }

// Method 04
// function findElement(arr, func) {
//     return arr.length && !func(arr[0]) 
//       ? findElement(arr.slice(1), func)
//       : arr[0];
//   }