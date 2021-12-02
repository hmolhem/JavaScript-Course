// Method #1

var pull = function(myArray){
    // input : my Array is a array
    // output:  return array that it has been last element    
    return myArray.slice(0,myArray.length-1);
};
var push = function(myArray,a){
    // input : my Array is a array
    // input : Fin is element that we wanna add as first element
    // output:  return array that it has added as first element
    return [a].concat(myArray);
};
var app = {
    pull: pull,
    push: push
};

a = [1,2,3,4];
console.log(a);

a = app.pull(a);
console.log(a);
a = app.push(a,'a');
console.log(a);
