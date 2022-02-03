class Circle {
    constructor(raduis){
        this.raduis = raduis;
        this.move = function() {};
    }

    draw(){
        console.log('draw');
    }
}

const c = new Circle(10);
console.log(c); 
// c is Circle object with raduis property & prototype draw method
// if don't wanna prototype method you can define method in constructor
// move method is object instance
// draw methos is prototype 

c.draw();

// look at type of Circle
console.log(typeof Circle); // this function!
// you go babelis.io
// this site is javascript compiler
// you can conver Js code ES6 to later version.

