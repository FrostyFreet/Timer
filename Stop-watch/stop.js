let seconds=0;
let displaySeconds=0;
let minutes=0;
let displayMinutes=0;
let hours=0;
let displayHours=0;
let intervalId = null;
var started=false;

function loop() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds < 10) {
      $("#timer").text("0" + hours + ":" + displayMinutes + minutes + ":" + displaySeconds + seconds);
    }

    if (seconds === 10) {
      displaySeconds += 1;
      seconds = 0;
      $("#timer").text("" + hours + ":" + displayMinutes + minutes + ":" + displaySeconds + seconds)
    }

    if (displaySeconds === 6) {
      minutes++;
      displaySeconds = 0;
      seconds = 0;
      $("#timer").text("" + displayHours + hours + ":" + displayMinutes + minutes + ":" + displaySeconds + seconds);
    }

    if (minutes === 10) {
      displaySeconds = 0;
      seconds = 0;
      minutes = 0;
      displayMinutes += 1;
      $("#timer").text("" + displayHours + hours + ":" + displayMinutes + minutes + ":" + displaySeconds + seconds);
    }

    if (displayMinutes === 6) {
      displaySeconds = 0;
      seconds = 0;
      minutes = 0;
      displayMinutes = 0;
      hours += 1;
      $("#timer").text("" + displayHours + hours + ":" + displayMinutes + minutes + ":" + displaySeconds + seconds);
    }

  }, 1000);
}

$(".start").click(function () { 
    if(!started){
      loop();
      started=true;
    }


});

$(".reset").click(function () {    
    clearInterval(intervalId);
    seconds=0;
    displaySeconds=0;
    minutes=0;
    displayMinutes=0;
    hours=0;
    displayHours=0;
    $("#timer").text(""+displayHours+hours+":"+displayMinutes+minutes+":"+displaySeconds+seconds);

}
)
    
$(".stop").click(function () { 
    
    clearInterval(intervalId);

}) 




 

