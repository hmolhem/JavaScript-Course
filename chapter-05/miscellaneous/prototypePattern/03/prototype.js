// classical protoypal
var human = {
    species: "human",
    create: function(values){
        var instance = Object.create(this);
        Object.keys(values).forEach(function (key){
            instance[key] = values[key];
        });
        return instance;
    },
    saySpecies: function(){
        console.log(this.species);
    },
    sayName: function(){
        console.log(this.name);
    }
};

var musician = human.create({
    species: "musician",
    playInstrument: function(){
        console.log('plays '+ this.instrument);
    }
});

console.log(musician);
var will = musician.create({name:"will", instrument:"Drumms"});
console.log(will);
console.log(will.playInstrument());


