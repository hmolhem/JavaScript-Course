// classical protoypal
var human = {
    species: "human",
    create: function(name){
        var instance = Object.create(this);
        instance.name = name;
        return instance;
    },
    saySpecies: function(){
        console.log(this.species);
    },
    sayName: function(){
        console.log(this.name);
    }
};

var musician =Object.create(human);
musician.playInstrumant = function (){
    console.log("plays..." + this.instrumnet);
};

var hossein = human.create("Hossein");
var shahriar = human.create("Shahriar");


