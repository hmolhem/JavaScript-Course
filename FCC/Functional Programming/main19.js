// Return a Sorted Array Without Changing the Original Array
const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  // Only change code below this line
    return [].concat(arr).sort((a,b) => a===b ? 0 : a<b ? -1 : 1);
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));