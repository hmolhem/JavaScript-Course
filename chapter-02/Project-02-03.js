var submitForm = function(event){
  event.preventDefault(); // prevent form refresh
  var form = new FormData(document.getElementById("myformdata"));

  gDay = form.get('gDay');
  gMonth = form.get('gMonth');
  gYear = form.get('gYear');

  gDay = isString(gDay) ? parseInt(gDay): gDay;
  gMonth = isString(gDay) ? parseInt(gMonth): gMonth;
  gYear = isString(gYear) ? parseInt(gYear): gYear;

  if (validDay(gDay) && validMonth(gMonth) && validYear(gYear)) {
    var jDate = g2j(gYear,gMonth,gDay);
    document.getElementById('jDay').value = jDate[2] ;
    document.getElementById('jMonth').value = jDate[1];
    document.getElementById('jYear').value = jDate[0];
  }else{
    alert('Enter valid day, month and year. try agin');
  }

};


var currentDate = function(){
  let gDay = dateFns.getDate(new Date());
  let gMonth = dateFns.getMonth(new Date())+1;
  let gYear = dateFns.getYear(new Date());

  document.getElementById('gDay').value = gDay ;
  document.getElementById('gMonth').value = gMonth;
  document.getElementById('gYear').value = gYear;

  gDay = isString(gDay) ? parseInt(gDay): gDay;
  gMonth = isString(gDay) ? parseInt(gMonth): gMonth;
  gYear = isString(gYear) ? parseInt(gYear): gYear;


  var jDate = g2j(gYear,gMonth,gDay);
  console.log(jDate);

  document.getElementById('jDay').value = jDate[2] ;
  document.getElementById('jMonth').value = jDate[1];
  document.getElementById('jYear').value = jDate[0];
  
};


var g2j = function(gy,gm,gd){
  var g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
  var jy=(gy<=1600)?0:979;
  gy-=(gy<=1600)?621:1600;
  var gy2=(gm>2)?(gy+1):gy;
  var days=(365*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+99)/100))
          +(parseInt((gy2+399)/400)) -80 +gd +g_d_m[gm-1];
  jy+=33*(parseInt(days/12053));
  days%=12053;
  jy+=4*(parseInt(days/1461));
  days%=1461;
  jy+=parseInt((days-1)/365);
  if(days > 365)days=(days-1)%365;
  var jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
  var jd=1+((days < 186)?(days%31):((days-186)%30));
  return [jy,jm,jd];
};

var isString = function(myVar){
  return (typeof myVar === 'string' || myVar instanceof String) ?  true :  false;
};

var validDay = function(myVar){
  return (myVar < 0 || myVar > 31) ? false : true;
};

var validMonth = function(myVar){
  return (myVar < 0 || myVar > 12) ? false : true;
};

var validYear = function(myVar){
  return (myVar < 0) ? false : true;
};