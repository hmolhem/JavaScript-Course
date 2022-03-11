const movie = new OMDB();
const view = new View();

document.addEventListener('DOMContentLoaded',getMovieData);

function getMovieData(){
    movie.getMovie()
                .then( result => {
                    // console.log(result);
                    // console.log(result.Poster);
                    // console.log(result.Title);
                    // console.log(result.Rated);
                    // console.log(result.Year);
                    // console.log(result.Actors);
                    // console.log(result.Awards);
                    
                    view.display(result.Poster, result.Title, result.Rated, result.Year, result.Actors, result.Awards);
                } )
                .catch( err => console.log(err.message) );
}