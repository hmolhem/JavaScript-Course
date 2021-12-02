
var Solar = [];
var Gregorian = [];
var submitForm = function(event){
    event.preventDefault(); // prevent form refresh
    Gregorian = g2s(Solar);
    let els = document.getElementsByClassName('solar')[0].querySelectorAll('p');
            for (idx=0; idx < els.length; idx++){
            els[idx].innerText = Solar[idx];
    }
};  

var mygetDate = function(date){
        var days = [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ];
        
        return days[date.getDay()];
};
var mygetMonth = function(date){
        var Months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
        
        return Months[date.getMonth()];
};

var setdefault = function(){
        Gregorian[0] = 1;
        Gregorian[1] = 'Jan';
        Gregorian[2] = 2021;
};

var getValueDay = function(event){
        var Day = event.target.value;
        Solar[0]=Day;
};
var getValueMonth = function(event){
        var Month = event.target.value;
        Solar[1]=Month;
};
var getValueYear = function(event){
        var Year = event.target.value;
        Solar[2]=Year;
};


function g2s(gy, gm, gd) {
        var g_d_m, jy, jm, jd, gy2, days;
        g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        gy2 = (gm > 2) ? (gy + 1) : gy;
        days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
        jy = -1595 + (33 * ~~(days / 12053));
        days %= 12053;
        jy += 4 * ~~(days / 1461);
        days %= 1461;
        if (days > 365) {
          jy += ~~((days - 1) / 365);
          days = (days - 1) % 365;
        }
        if (days < 186) {
          jm = 1 + ~~(days / 31);
          jd = 1 + (days % 31);
        } else {
          jm = 7 + ~~((days - 186) / 30);
          jd = 1 + ((days - 186) % 30);
        }
        return [jy, jm, jd];
      }
      
