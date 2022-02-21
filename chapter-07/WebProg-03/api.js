document.getElementById('get-post').addEventListener('click', loadData);


function loadData(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object
    const  number = document.getElementById('number-post').value;


    const post = xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${number}`); 
    xhr.onload = ()=>{
        if (xhr.status === 200){
            let post = JSON.parse(xhr.responseText)
            let output = `
                <ul>
                    <li>ID: ${post.id}</li>
                    <li>Title: ${post.title}</li>
                    <li>Body: ${post.body}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send(); // send data

};
