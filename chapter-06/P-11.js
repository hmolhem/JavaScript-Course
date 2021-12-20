const names = ['hossein', 'shahriar', 'maryam', 'parviz', 'akram'];
// indexOf has only string
console.log(names.indexOf('shahriar')); // 2 

console.log(names.find(item => item === 'maryam'));

let f = names.find(item => {
    return item[0] === 's';
});

console.log(f); // shahriar


movies = [
    {
        id: 1,
        name: 'star wars'
    },
    {
        id: 2,
        name: 'iron man'
    },

];

const f1 = movies.find(item => item.id === 2);
console.log(f1);

const f2 = movies.findIndex(item => item.id === 2);
console.log(movies[f2]);

const f3 = movies.filter(item => item.id === 2);
console.log(f3);

const numbers = [1,2,3,4,5,6,7,8,9];
const f4 = numbers.filter(item => item > 4);
console.log(f4);

