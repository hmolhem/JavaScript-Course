const names = ['ehsan', 'alex', 'jack', 'robert'];

console.log('Method #1','map function');
names.map((item) => console.log(item));

console.log('Method #2','forEach');
names.forEach((item) => console.log(item));

console.log('Method #3','for');
for( let i = 0; i < names.length; i++){
    console.log(names[i]);
}

console.log('Method #4','for in');
for (index in names){
    console.log(index, names[index]);
}

console.log('Method #4','for of'); // for of only use array
for (item of names){
    console.log(item);
}

const player = {
    name: 'Ehsan',
    age: 30,
    location: 'Melborn',
    country: 'Australia'
};

console.log('display key object'); // for in use array and json
for (key in player){
    console.log(key, player[key]);
}
