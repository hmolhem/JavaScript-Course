var myModule = {
    name: 'Hossein',
    age: 34,
    sayName: function(){
        alert(this.name);
    },
    setName: function(newName){
        this.name = newName;
    }
};

myModule.sayName(); // dispaly current name

myModule.setName('Shahriar'); //change name by method
myModule.sayName(); // display new name

myModule.name = 'Maryam'; // change name
myModule.sayName(); // display new name

// in fact we access to name and don't expose
// this is bad operation
// how to keep access name? by modular pattern