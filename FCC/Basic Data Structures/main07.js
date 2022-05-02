// Copy an Array with the Spread Operator
let thisArray = [true, true, undefined, false, null];
// let thatArray = [...thisArray];

// Copy an Array three times with Spread Operator
let thatArray = []
for (let i = 0; i<3; i++){
    thatArray.push([...thisArray]);
}
console.log(thatArray);

// Copy an Array arbitary times with Spread Operator
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));


