// Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    // Only change code below this line
    return arr.some( val => val > 0);
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));