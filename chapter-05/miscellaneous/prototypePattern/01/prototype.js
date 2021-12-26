// classical protoypal
var human = {
    species: "human",
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

var hossein = Object.create(musician);
hossein.name = "Hossein";
hossein.instrumnet = "Drums";
