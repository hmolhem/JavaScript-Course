// Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort((a,b)=> a === b ? 0 : a < b ? -1 : 1);
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["x", "h", "a", "m", "n", "m"]));