sayHello(); // excute without error since this function is hoisted

// Function Declaration
    function sayHello(){
        console.log('Hello');
    }
// function declarion is hoisted    

sayGoodBye(); // get error since function is not hoisted
// Function Expression
const sayGoodBye = function(){
    console.log('Good Bye');
};
// function expression is not hoisted


// class Declaration
class Circle{

}

// class Expression
const Square = class {

};





