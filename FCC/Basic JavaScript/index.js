class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }
    getName = () =>{
        return this.name;
    }
    getAge = () =>{
        return this.age;
    }
}

class Home {
    constructor(address, price, residents){
        this.address = address;
        this.price = price;
        this.residents = residents;
    }
    getAddress = () =>{
        return this.address;
    }
    getPrice = () =>{
        return this.price;
    }
    getResidents = () =>{
        return this.residents;
    }
    addResident = (resident) =>{
        this.residents.push(resident);
    }

}

let hossein = new Person('Hossein', 52);
let shahriar = new Person('Shahriar', 19);
// console.log(hossein);
// console.log(hossein.getName());
// console.log(hossein._age);

console.log(hossein.age)

// let home =  new Home("Karaj Iran", 2000, [hossein, shahriar]);
// maryam = new Person('Maryam', 51);
// home.addResident(maryam);
// console.log(home);