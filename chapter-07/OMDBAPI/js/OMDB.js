class OMDB {
    constructor(){
        this.apiKey = '5bd7f750',
        this.title = 'tt3896198'
    }

    async getMovie(){
        const response = await fetch(`http://www.omdbapi.com/?i=${this.title}&apikey=${this.apiKey}`)
        
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }
        
    }
}