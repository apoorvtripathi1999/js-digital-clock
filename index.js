var hours = document.getElementById('h');
var minutes = document.getElementById('m');
var seconds = document.getElementById('s');
var day = document.getElementById('da');
var date = document.getElementById('d');
var dura = document.getElementById('ampm');

function reload() {
    var cont = new Date();

    var hh = cont.getHours();
    var mm = cont.getMinutes();
    var ss = cont.getSeconds();
    var dd = cont.getUTCDate();
    var day_local = cont.getDay();
    var duration;
    
    if(hh==00){
     hh = 12;
     duration = 'AM';
    }
    if(hh==12){
     duration = 'PM';
    }
    if(hh>12){
     hh = hh-12;
     duration = 'PM';
    }
    if(hh<12)
    {
     duration = 'AM';
    }

    hours.textContent = hh; 
    minutes.textContent = mm;
    seconds.textContent = ss;
    date.textContent = dd;
    dura.textContent = duration;
    day.textContent = getday(day_local);
}

function getday(value){
    var dayNames =
    [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return dayNames[value]
}

setInterval(reload,1000);
