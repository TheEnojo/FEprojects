
//var clock = document.querySelector("#clock")

function digitalClock() {

    var date = new Date()
    var hh = date.getHours()
    var mm = date.getMinutes()
    var ss = date.getSeconds()
    var td = "PM"

    if (hh == 0) {
         hh = 12;
         td = "AM";
     }

     if (hh > 12) {
         hh = hh - 12
     }
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;

     var timeOfDay = hh + ":" + mm + ":" + ss + " " + td;

     //clock.innerText = timeOfDay
     document.getElementById("clock").innerText = timeOfDay
     

     setInterval(digitalClock, 1000)
  
 } 

 
 digitalClock()





