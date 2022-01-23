
function renderHello() {
  var data = {
    "beatles": [
      { "firstName": "John", "lastName": "Lennon" },
      { "firstName": "Paul", "lastName": "McCartney" },
      { "firstName": "George", "lastName": "Harrison" },
      { "firstName": "Ringo", "lastName": "Starr" }
    ],
    "name": function () {
      return this.firstName + " " + this.lastName;
    }
  };
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;
  }