class View{
    constructor(){
        // cache DOM
        this.poster = document.getElementById("poster");
        this.title = document.getElementById("title");
        this.rated = document.getElementById("rated");
        this.actor = document.getElementById("actor");
        this.year = document.getElementById("year");
        this.awards = document.getElementById("awards");
    }

    display(Poster, Title, Rated, Year, Actors, Awards){
        this.poster.setAttribute('src', Poster);
        this.title.textContent = Title;
        this.rated.textContent = Rated;
        this.actor.textContent = Actors;
        this.year.textContent = Year;
        this.awards.textContent = Awards;
    }
}