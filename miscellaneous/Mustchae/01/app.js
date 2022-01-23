var TEMPLATE = '<div class="card card-item">'.concat('<span>#{{id}}</span><hr>','<span>{{question}}</span>','<span>{{answer}}</span>','</div>');
var DATA = {
    id:1,
    question: 'What color is the sky?',
    answer: 'blue'
};
document.getElementById('cards').innerHTML =  Mustache.render(TEMPLATE,DATA);
