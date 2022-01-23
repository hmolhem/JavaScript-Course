// https://www.youtube.com/watch?v=fYbhD_KMCOg
const array = [1,2,3];

console.log(addElemnetToArray(array,4));
console.log(addElemnetToArray(array,4));
console.log(addElemnetToArray(array,4));
console.log(addElemnetToArray(array,4));
console.log(array);
console.log(addElemnetToArray1(4));
console.log(array);

function addElemnetToArray(a, element){
    return [...a, element];
}

function addElemnetToArray1(element){
    array.push(element);
}