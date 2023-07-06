let timeParagraph = document.getElementById('currentTime');
function firstCall(){
    console.log('test');  
    refreshTime(); 
}

function refreshTime(){
    let today = new Date();
    let currentHours = today.getHours();
    let currentMinutes = formatNum(today.getMinutes());
    let currentSeconds = formatNum(today.getSeconds());
    let amOrPm = currentHours >= 12 ? 'PM' : 'AM';
    currentHours = (currentHours % 12) || 12;
    currentHours = formatNum(currentHours);
    timeParagraph.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds} ${amOrPm}`;
}

function formatNum (num){
    return num < 10 ? '0' + num : num;
}

window.setInterval(refreshTime, 1000);