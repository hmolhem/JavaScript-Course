
function renderHello() {
    var data = { name: 'Hossein' };
    var template = document.getElementById('template').innerHTML;
    var rendered = Mustache.render(template, data);
    document.getElementById('target').innerHTML = rendered;
  }