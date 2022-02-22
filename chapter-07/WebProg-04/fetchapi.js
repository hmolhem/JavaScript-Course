document.getElementById('get-post').addEventListener('click', loadData);
document.getElementById('get-posts').addEventListener('click', loadDatas);

function loadData(){

    const  number = document.getElementById('number-post').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw Error(response.status)
            }
        })
        .then(post => {
            let output = "";
                output += `
                    <ul>
                        <li>ID: ${post.id}</li>
                        <li>Title: ${post.title}</li>
                        <li>Body: ${post.body}</li>
                    </ul>
                `;
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => document.getElementById('output').innerHTML = error)
};



function loadDatas(){

    fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => {
            if (response.ok) {
                    return response.json()
            } else {
                throw Error(response.status)    
            }
        })
        .then(post =>{
            let output = "";
            post.forEach(post => {
                output += `
                    <ul>
                        <li>ID: ${post.id}</li>
                        <li>Title: ${post.title}</li>
                        <li>Body: ${post.body}</li>
                    </ul>
                `;
                
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch( error => document.getElementById('output').innerHTML = error)
}