// Sort an Array Alphabetically using the sort Method
function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
      return b - a;
    });
  }
  
console.log(ascendingOrder([1, 5, 2, 3, 4]));

function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));