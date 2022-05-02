const s = [5, 6, 7];
// s = [1, 2, 3];
s[2] = 45;
console.log(s);


const p = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
   p[0] = 2;
   p[1] = 5;
   p[2] = 7;
   console.log(p);
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
