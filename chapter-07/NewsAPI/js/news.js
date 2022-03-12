class News {
    constructor(title){
        this.apiKey = 'ce44ca1a6def4b6ea56207d3391a482a',
        this.title = title
    }

    async getNews(){
        const response = await fetch(`https://newsapi.org/v2/everything?q=${this.title}&apiKey=${this.apiKey}`)
        
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }
    }
}