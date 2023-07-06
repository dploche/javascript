let displayClock = document.getElementById('displayClock');
let futureTime;
let intervalId;

const buttons = document.getElementsByTagName("button");

Array.from(buttons).forEach(button =>
  button.addEventListener("click", showNumber));

function showNumber(event) { // Listener can access its triggering event
  const button = event.target; // event's `target` property is useful
  addTime(Number(button.value));
}

function addTime(time){
    futureTime = addMinutes(new Date(), time);
    callDifference();
    intervalId = window.setInterval(callDifference, 1000);
}

function addMinutes(date, minutes) {
    let newDate = new Date(date.getTime());
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
}

function calculateTimeDifference(date1, date2) {
  let diff = Math.abs(date2.getTime() - date1.getTime()); //Return diff in milisecods
  let minutes = Math.floor(diff / (1000 * 60));
  let seconds = Math.floor((diff / 1000) % 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `Time remaining: ${minutes}:${seconds}`;
}

function callDifference(){
    let currentTime = new Date();
    if (currentTime >= futureTime) {
        displayClock.innerHTML = "Time remaining: 0:00";
        clearInterval(intervalId);
    } else {
        displayClock.innerHTML = calculateTimeDifference(currentTime, futureTime);
    }
}
