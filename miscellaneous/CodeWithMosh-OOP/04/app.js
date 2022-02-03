// constructor function
const Circle = function(){
    this.draw = function(){
        console.log(this);
    };
};

const c = new Circle(); // create instance Circle object
//Method call
c.draw(); // this is Circle object

const draw = c.draw;
console.log(draw); // return function

// Funcion call
draw(); // return window object
// this is a stand-alone function
// when you call this will point global function which is window in the broswer


/* 

this references the object that is executing the current function
If that function is part of an object we call the function and method right so if
if that function is a method in an object this references that object itself otherwise if
that function is a regular function which means it's not part of an object this reference is 
the global object which is the window object in browsers and global in node

Line 8: new is operator that create new empty object and set this is constructor function.
If you forget to use new operator this by default is global object which is window in the broswer

Line 10: when you call function as a method function this is point as an object

Line 16: If the call method as a stand-alone function this is point as a global object



*/