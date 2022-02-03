// class Shape {
//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape {
//     draw(){
//         console.log('draw');
//     }
// }

// const c = new Circle();
// console.log(c);

class Shape {
    constructor(color){
        this.color = color;
    }
    move(){
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color, radius);
        this.radius = radius;
    }
    draw(){
        console.log('draw');
    }
}

const c = new Circle("red", 10);
console.log(c);
console.log(c.move());
console.log(c.draw());
