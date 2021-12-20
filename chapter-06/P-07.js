
// #1
// let loop = {
//     [Symbol.iterator]: function* () {
//         for (let i = 0; i <= 10; i++) {
//             yield i;
//         }
//     }
// };

// let myLoop = loop[Symbol.iterator]();
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());
// console.log(myLoop.next());


let loop = {
    [Symbol.iterator]: function () {
        let i = 0;
        return{
            next: function() {
                return {
                    value: i++,
                    done: i > 10
                };
            }
        };
    }
};

let myLoop = loop[Symbol.iterator]();
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
console.log(myLoop.next());
