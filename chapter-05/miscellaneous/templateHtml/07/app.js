
function renderHello() {
  var data = {
    "musketeers": ["Athos", "Aramis", "Porthos", "D'Artagnan"]
  };
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;
  }