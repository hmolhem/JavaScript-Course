document.getElementById('get-post').addEventListener('click', loadData);

document.getElementById('get-posts').addEventListener('click', loadDatas);

function loadData(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object
    xhr.open('GET', './post.json'); // open JSON with GET request
    xhr.onload = ()=>{
        // console.log(xhr) // you can view all method and property of xhr object
        if (xhr.status === 200){
            // console.log(JSON.parse(xhr.responseText));
            // xhr have many methods and properties, I should assess that
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


function loadDatas(){

    const xhr = new XMLHttpRequest(); // create XMLHttpRequest object
    xhr.open('GET', './posts.json'); // open JSON with GET request
    xhr.onload = ()=>{
        // console.log(xhr) // you can view all method and property of xhr object
        if (xhr.status === 200){
            // console.log(JSON.parse(xhr.responseText));
            // xhr have many methods and properties, I should assess that

            let posts = JSON.parse(xhr.responseText)
            let output = "";
            posts.forEach(post => {
                output += `
                    <ul>
                        <li>ID: ${post.id}</li>
                        <li>Title: ${post.title}</li>
                        <li>Body: ${post.body}</li>
                    </ul>
                `;
                
            });
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send(); // send data

}