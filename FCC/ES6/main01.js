var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 1) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log('----');
console.log(printNumTwo());


function checkScope() {
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}