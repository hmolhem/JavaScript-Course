
let cardContent = [    
    {
        id:0,
        question:"what color is sky",
        answer:"blue"
    },
    {
        id:0,
        question:"what is the capital city of Iran",
        answer:"Tehran"
    },
    {   
        id:0,
        question:"what is the population of Iran",
        answer:"80M"
    }
];


const x = cardContent.map(function(cardInfo,index){
    return {
        id:index+1,
        question:cardInfo.question,
        answer: cardInfo.answer
    };
});

console.log(x);