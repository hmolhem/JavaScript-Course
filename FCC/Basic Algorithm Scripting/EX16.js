// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let r = arr.length % size;
  let n = (arr.length-r) / size;
  let newArr = [];
  if (r===0){
      for(let i=0; i<n; i++){
          newArr.push(arr.slice(i*size,(i+1)*size))
      };
  }else{
      for(let i=0; i<=n; i++){
          newArr.push(arr.slice(i*size,(i+1)*size))
      };

  }
  return newArr;
}


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));

//   Method 2
// function chunkArrayInGroups(arr, size) {
//     let temp = [];
//     let result = [];

//     for (let a = 0; a < arr.length; a++) {
//       if (a % size !== size - 1) temp.push(arr[a]);
//       else {
//         temp.push(arr[a]);
//         result.push(temp);
//         temp = [];
//       }
//     }

//     if (temp.length !== 0) result.push(temp);
//     return result;
//   }

// Method 3
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//       newArr.push(arr.slice(i, i + size));
//     }
//     return newArr;
//   }

// Method 4
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     let newArr = [];
//     let i = 0;

//     while (i < arr.length) {
//       newArr.push(arr.slice(i, i + size));
//       i += size;
//     }
//     return newArr;
//   }
//   chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Method 5
// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     while (arr.length > 0) {
//       newArr.push(arr.splice(0, size));
//     }
//     return newArr;
//   }

// Method 6
// function chunkArrayInGroups(arr, size) {
//     if (arr.length <= size) {
//       return [arr];
//     } else {
//       return [arr.slice(0, size)].concat(
//         chunkArrayInGroups(arr.slice(size), size)
//       );
//     }
//   }