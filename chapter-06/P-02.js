class Roboat{
    constructor({x,y}){
        this._x = x;  // _x is means that _x is private variable
        this._y = y;
    }

    get x () {
        return this._x;
    }
    get y () {
        return this._y;
    }

    set x (x){
        this._x = x;
    }
    set y (y){
        this._y = y;
    }

    get distance () {
        return this._x + this._y;
    }
}

const robot1 = new Roboat({x: 10,y:20});
console.log(robot1.x, robot1.y);
robot1.x = 12;
robot1.y = 50;
console.log(robot1.x, robot1.y);
console.log('distance is ',robot1.distance);