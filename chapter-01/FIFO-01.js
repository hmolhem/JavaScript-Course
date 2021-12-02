// Method #1
var pull = function(myArray){
    // input : my Array is a array
    // output:  return array that it has been last element
    var outArray = [];
    for (let index = 0; index < myArray.length-1; index++) {
        outArray[index] = myArray[index];
    }
    return outArray;
};
var push = function(myArray,Fin){
    // input : my Array is a array
    // input : Fin is element that we wanna add as first element
    // output:  return array that it has added as first element
    var outArray = [];
    outArray[0] = Fin;
    for (let index = 0; index < myArray.length; index++) {
            outArray[index+1] = myArray[index];
    }
    return outArray;
};
var app = {
    pull: pull,
    push: push
};

a = [1,2,3,4]; // sample array
console.log(a); // display array

c = app.pull(a); // First Out
console.log(c); // Display new array
c = app.push(a,'a'); // First In
console.log(c); // display new array
