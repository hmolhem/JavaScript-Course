
(function() {
    
    var people =  ['Will', 'Steve'];

    // Cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    // bind event
    $input.on('click',addPerson);
    $ul.delegate('i.del','click', deletePerson);

    _render(); // underScore means private

    function _render() {
        $ul.html(Mustache.render(template, {people:people}));
    }

    function addPerson(value){
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event){
        var i;
        if (typeof event === "number") {
            i = event;
        }else{
            var $remove = $(value.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i,1);
        _render();
    }

    return{
        addPerson: addPerson,
        deletePerson: deletePerson
    };
})();