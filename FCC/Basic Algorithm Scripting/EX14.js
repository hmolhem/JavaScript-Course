// Where do I Belong
// Where do I Belong
function getIndexToIns(arr, num) {
    let x = arr.indexOf((arr.sort((a,b)=>a-b).filter(item=>item>=num)[0]));
    return (x===-1)? arr.length:x;
  }
  
  console.log(getIndexToIns([2, 5, 10], 15));


// method 2
// function getIndexToIns(arr, num) {
//     return arr
//       .concat(num)
//       .sort((a, b) => a - b)
//       .indexOf(num);
//   }
  
//   getIndexToIns([1, 3, 4], 2);

// method 3
// function getIndexToIns(arr, num) {
//     // sort and find right index
//     let index = arr
//       .sort((curr, next) => curr - next)
//       .findIndex(currNum => num <= currNum);
//     // Returns index or total length of arr
//     return index === -1 ? arr.length : index;
//   }
  
//   getIndexToIns([40, 60], 500);

// method 4
// function getIndexToIns(arr, num) {
//     return arr.filter(val => num > val).length;
//   }

// method 5
// function getIndexToIns(arr, num) {
//     arr.sort((a, b) => a - b);
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= num)
//         return i;
//     }
  
//     return arr.length;
//   }