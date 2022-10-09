/*
var myCounter;

//button
let button = document.getElementById('btn');
button.addEventListener('click', timer);

//Seconds variable
let seconds = 60;

function timer() {
  clearInterval(myCounter); //to stop counter if already counting.
  let mins = parseInt(document.getElementById('min').value);
  var i = mins * seconds;
  myCounter = setInterval(function() {
    if (i < 0) {
      console.log('completed');
      clearInterval(myCounter);

    } else {
      console.log(i--);
      console.log('still going');
      let time = document.getElementById('time');
      time.innerHTML = i;
    }

  }, 1000);
};







<body>
  <input type="text" id="min">
  <button id="btn">Click me</button>
  <p id="time">
    Time
  </p>
  <script src="./main.js"></script>
</body>

*/