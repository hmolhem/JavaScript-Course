const newsObj = new News('bitcoin');
const viewObj = new View();

document.addEventListener('DOMContentLoaded',getNewsData);

function getNewsData(){
    newsObj.getNews()
                .then( result => {
                    // console.log(result);
                    // console.log(result.articles.length);
                    // console.log(result.articles[19].author);
                    // console.log(result.articles[19].title);
                    // console.log(result.articles[19].content);
                    // console.log(result.articles[19].description);
                    // console.log(result.articles[19].url);
                    // console.log(result.articles[19].urlToImage);
                    // console.log(result.articles[19].source);
                    // console.log(result.articles[19].source.id);
                    // console.log(result.articles[19].source.name);
                    const data = result.articles[19]
                    viewObj.display(data);
                })
                .catch( err => console.log(err.message) );
}