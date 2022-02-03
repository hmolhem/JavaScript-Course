var people =(function() {

    var people = ['Ali', 'Hasan'];

    // cache DOM
    var elpeopleModule = document.getElementById('peopleModule');
    var button = elpeopleModule.querySelectorAll('input')[0];
    var input = elpeopleModule.querySelectorAll('input')[1];
    var elpeopleCard = document.getElementById('peopleCard');
    var ul = elpeopleCard.querySelector('ul');
    var template = document.getElementById('people-template').innerHTML;

    // bind events
    button.addEventListener("click", addPerson);
    ul.addEventListener("click", deletePerson);

    render();

    function render(){
        ul.innerHTML = Mustache.render(template, people);
    }

    function addPerson(value) {
        var name = (typeof value === "string") ?  value : input.value;
        people.people.push(name);
        render();
        input.value = '';
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number"){
            i = event;
        }else {
            let del = event.target.id;
            let name = event.target.parentNode.querySelector('span').innerHTML;
        }
        if (del === 'del') {
            let index = people.people.indexOf(name);
            people.people.splice(index, 1);
            // console.log(index);
        }
        render();
    }

    return {
    addPerson: addPerson,
    deletePerson: deletePerson,
    };
})();
