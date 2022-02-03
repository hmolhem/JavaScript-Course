class Circle{
    constructor(radius){
        this.radius = radius;
    }

    //Instance method
    draw(){
        console.log('draw');
    }

    //Static method
    static parse(str){
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

const circle = new Circle(10);
circle.draw();
console.log(circle); // you can see darw method in prototype Circle class

const circle1 = Circle.parse('{"radius": 5}');
console.log(circle1);