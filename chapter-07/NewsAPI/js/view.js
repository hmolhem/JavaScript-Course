class View {
    constructor(){
        // cache DOM
        this.image = document.getElementById("image");
        this.title = document.getElementById("title");
        this.content = document.getElementById("content");
        this.description = document.getElementById("description");
        this.author = document.getElementById("author");
        this.url = document.getElementById("url");
    }

    display(data){
        this.image.setAttribute('src', data.urlToImage);
        this.title.textContent = data.title;
        this.content.textContent = data.content;
        this.description.textContent = data.description;
        this.author.textContent = data.author;
        this.url.innerHTML = `<a href="${data.url}" target="_blank">see reference</a>`;
    }
}