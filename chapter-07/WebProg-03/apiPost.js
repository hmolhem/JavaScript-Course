document.getElementById('send-post').addEventListener('click', sendData);


function sendData(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object

    const  postTitle = document.getElementById('post-title').value;
    const  postBody = document.getElementById('post-body').value;

    const params = {userId: 2, title: postTitle, body: postBody};

    xhr.open('POST', `https://jsonplaceholder.typicode.com/posts/`); 
    xhr.setRequestHeader('content-Type', 'application/json');

    xhr.onload = ()=>{
        if (xhr.status === 201){
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
    xhr.send(JSON.stringify(params)); // send data

};
