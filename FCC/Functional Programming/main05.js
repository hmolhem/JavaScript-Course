// Pass Arguments to Avoid External Dependence in a Function

// There are several good consequences from this principle. 
// The function is easier to test, you know exactly what 
// input it takes, and it won't depend on anything else in your 
// program.

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(a) {
  return a + 1;

  // Only change code above this line
}