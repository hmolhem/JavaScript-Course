class Car{
    constructor({
        speed = 100,
        model = 2010,
        engine = false,
    }){
        this.speed = speed;
        this.model = model;
        this.engine = engine;
    }

    startEngine(){
        this.engine = true;
    }
}

class BMW extends Car{
    constructor({
        luxary = true,
        speed = 200,
        model = 2015,
    }){
        super({
           speed: speed,
           model: model, 
        });
        this.luxary = luxary;
    }
}

const myBMW = new BMW({
    luxary: false,
    speed: 250,
});

const youtBMW = new BMW({
    luxary: true,
    speed: 190,
    model: 2010
});