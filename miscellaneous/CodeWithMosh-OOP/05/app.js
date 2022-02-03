const _radius = Symbol();
const _draw = Symbol();

class Circle {
    constructor(radius){
        // private property
        this[_radius] = radius;
    }

    // private method
    [_draw](){

    }
}

const c = new Circle(10);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);