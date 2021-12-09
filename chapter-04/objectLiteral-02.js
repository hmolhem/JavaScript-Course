var people = {
    name: 'will', // name is not accessible
    sayName: function(){
        alert('will');
    },
    setName: function(newName){
        this.name = newName;
    }
};

var a = 1;
a.toString();
1.toString(); // error
(1).toString(); //sign into variable

// self excute function
function() {alert();}() // Function statements require a function name

// self excute function or anonymous function
(function() { 
    alert();
})();


// revealing module pattern
var people = (function() { 
    var name = 'will'; // name is not accessible or name is untouchbale
    function sayName(){
        alert('will');
    }
    function setName(newName){
        this.name = newName;
    }

    return{
        sayName: sayName, 
    };
})();