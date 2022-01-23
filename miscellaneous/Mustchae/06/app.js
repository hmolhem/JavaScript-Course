
function renderHello() {
  var data = {
    "stooges": [
      { "name": "Moe" },
      { "name": "Larry" },
      { "name": "Curly" }
    ]
  };
    console.log(data);
    var template = document.getElementById('template').innerHTML;
    console.log(template);
    var rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;
  }