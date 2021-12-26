var TEMPLATE = '<div class="card card-item">'.concat('<span>#{{id}}</span><hr>','<span>{{question}}</span>','<span>{{answer}}</span>','</div>');
var DATA = [
    {
        id:1,
        question: 'What color is the sky?',
        answer: 'blue'
    },
    {
        id:2,
        question: 'What is Iran capital city?',
        answer: 'Tehran'
    },
    {
        id:3,
        question: 'what color is my car?',
        answer: 'white'
    },
    {
        id:4,
        question: 'what color is my car?',
        answer: 'white'
    },
    {
        id:5,
        question: 'what color is my car?',
        answer: 'white'
    },
    {
        id:6,
        question: 'what color is my car?',
        answer: 'white'
    },
    {
        id:7,
        question: 'what color is my car?',
        answer: 'white'
    }
    
];

for (index = 0; index < DATA.length; index++){
    document.getElementById('cards').innerHTML +=  Mustache.render(TEMPLATE,DATA[index]);
}
    

