document.getElementById('send-post').addEventListener('click', sendData);

function sendData(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object

    const  postTitle = document.getElementById('post-title').value;
    const  postBody = document.getElementById('post-body').value;

    // const params = {userId: 2, title: postTitle, body: postBody};

    fetch('https://jsonplaceholder.typicode.com/posts/',{
        method: 'POST',
        body: JSON.stringify({
            userId : 2,
            title : postTitle,
            body : postBody
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    .then(response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
    .then(post => {
        // console.log(post)
            let output = `
                <ul>
                    <li>ID: ${post.id}</li>
                    <li>Title: ${post.title}</li>
                    <li>Body: ${post.body}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;        
    }).catch(error => document.getElementById('output').innerHTML = error);
}
