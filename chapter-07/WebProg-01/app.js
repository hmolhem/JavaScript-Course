log = console.log
// function a(){
//     log("a");
// }
// function b(){
//     log("b");
// }
// function c(){
//     log("c");
// }

// a() // a
// b() // b
// c() // c


function a(){
    log("a");
}
function b(){
    setTimeout( function(){
        log("b");
    },1000)
}
function c(){
    log("c");
}

a()
b()
c()

// a
// c
// b


// Event Loop
// Call  Stack
// Callback  Queue
// collection and processing events

// The Event Loop has one simple job — to monitor the Call Stack 
// and the Callback Queue. If the Call Stack is empty, it will 
// take the first event from the queue and will push it to the 
// Call Stack, which effectively runs it. Such an iteration is 
// called a tick in the Event Loop. Each event is just a function 
// callback.

// How to wrork with Async
// there are three way for working Async
// 1- Callbacks
// 2- Promise
// 3- Async/Await

