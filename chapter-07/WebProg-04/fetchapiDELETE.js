document.getElementById('send-post').addEventListener('click', sendData);

function sendData(){

    const  postId = document.getElementById('post-id').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        method: 'DELETE',
    })
    .then(response =>{
        if (response.ok) {
            return response.json();
        } else {
            throw Error(response.status);
        }
    })
    .then(post => {
        console.log(post)
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
