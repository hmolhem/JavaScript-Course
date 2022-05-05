// Factorialize a Number

function factorialize(num) {

    if(num === 0 || num === 1){
        return 1
    }else{
        return num*factorialize(num-1);
    }
  }
  
  console.log(factorialize(6));

  // Method 1
//   function factorialize(num) {
//     let product = 1;
//     for (let i = 2; i <= num; i++) {
//       product *= i;
//     }
//     return product;
//   }
  
//   factorialize(5);

// Method 2 : recoursion
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);

  // Method 3
//   function factorialize(num, factorial = 1) {
//     if (num === 0) {
//       return factorial;
//     } else {
//       return factorialize(num - 1, factorial * num);
//     }
//   }
  
//   factorialize(5);

// Method 4
// function factorialize(num) {
//     return num < 0 ? 1 :
//       new Array(num)
//         .fill(undefined)
//         .reduce((product, _, index) => product * (index + 1), 1);
//   }
//   factorialize(5);