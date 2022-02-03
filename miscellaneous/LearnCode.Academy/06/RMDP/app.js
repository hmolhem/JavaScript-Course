// var people = (function () {
//     var name = "hossein";  // name is untouchable
//     function sayName(){
//         alert(name);
//     }

//     return {
//         sayName: sayName,
//     };
    
// })();

// people.name = 'molhem';
// people.sayName();

var people = (function () {
    var name = "hossein";  // name is untouchable
    function sayName(){
        alert(name);
    }
    
    return {
        sayName: sayName,
        name: 'molhem'
    };
})();

people.name = 'molhem';
people.sayName();
