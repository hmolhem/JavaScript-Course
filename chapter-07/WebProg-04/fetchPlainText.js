const btn = document.getElementById('button');
btn.addEventListener('click', loadData);

// function loadData(){

//     fetch('data1.txt')
//     .then( response => console.log(response)) //you can see response
//     // response status is 200
//     // if you change data.txt response status will be changed to 400
//     // notice to prototype that is returned
//     .then(data => console.log(data))
//     .catch(error => console.log(EvalError))
// }   

// function loadData(){

//     fetch('data.txt')
//     .then( response => {
//         if (response.ok) {
//             return response.text();
//         } else {
//             throw Error(response.status)
//         }
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err) )

// }   

function loadData(){

    fetch('data.txt')
    .then( response => {
        if (response.ok) {
            return response.text();
        } else {
            throw Error(response.status)
        }
    })
    .then(data => {
        document.getElementById('output').innerHTML = data
    })
    .catch(err => console.log(err) )

}   