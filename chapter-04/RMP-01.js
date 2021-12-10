// #1
var people = {
    name: "Hossein",
    sayName: function(){
        alert('Hossein');
    },
    setName: function(newName){
        this.name = newName;
        render();
    }
};
people.name = 'hassan';

// this is so bad because everybody can chnage name.

// #2
var a = 1;
console.log(a.toString());
console.log((1).toLocaleString());

function() {alert();}() //error

(function() {alert();})(); // it works
(function(name) {alert(name);})('Hossein'); // it works

var name = 'Hassan';
var people = (function() {
    var name = 'Hossein';
})();
alert(name);

var name = 'Hassan';
var people = (function() {
    var name = 'Hossein';
    sayName = function(){
        alert(name);
    };
    return{
        sayname: sayName,
    };
})();
