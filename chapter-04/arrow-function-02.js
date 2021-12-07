// console.log(this); // display window in console
 var name = 'Hossein';

const me = {
    name: 'Shahriar',
    getNameWithFuction: function (){
        console.log('return name in object : ', this.name);
        // this point to local variable name
    },
    getNameWidthArrowFunction: ()=>{
        console.log('return name in object : ', this.name);
        //  this point to parent variable name
        // arrow function delete .bind(this)
    }
};


// if you use this in object, It is better than that use normal function
// when we name variable is defined const, then you can't access arrow function 
// how to access name in ot of object by normal functio?
// you should binding normal function with this keyword.


// default valeue in function

const sum = (a,b=0) =>{
    return a + b;
};

console.log(sum(2,3));
console.log(sum(2));