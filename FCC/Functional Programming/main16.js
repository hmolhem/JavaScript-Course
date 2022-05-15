// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
    // Only change code below this line
    let newArr =  arr.filter(item => Number.isInteger(item) && item > 0).map(item => item*item);
    return newArr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
  console.log(squaredIntegers);


  // Metod 2
//   const squareList = arr => {
//     return arr.reduce((sqrIntegers, num) => {
//       return Number.isInteger(num) && num > 0
//         ? sqrIntegers.concat(num * num)
//         : sqrIntegers;
//     }, []);
//   };


// Metod 3
// const squareList = (arr) => {
//     // Only change code below this line
//     return arr
//             .filter(num => num > 0 && num % parseInt(num) === 0)
//             .map(num => Math.pow(num, 2));
//     // Only change code above this line
//   };
  
//   const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
//   console.log(squaredIntegers);