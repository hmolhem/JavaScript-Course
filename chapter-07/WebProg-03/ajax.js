const btn = document.getElementById('button');
btn.addEventListener('click', loadData);

function loadData(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object
    xhr.open('GET', './data.txt'); // open file with GET request
    xhr.onload = ()=>{
        // console.log(xhr) // you can view all method and property of xhr object
        if (xhr.status === 200){
            console.log(xhr.responseText);
            // xhr have many methods and properties, I should assess that
        }
    }
    xhr.send(); // send data

}