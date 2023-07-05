let timeParagraph = document.getElementById('currentTime');
function firstCall(){
    console.log('test');  
    refreshTime(); 
}

function refreshTime(){
    let today = new Date();
    let timeAbbreviation;
    let currentHours = today.getHours();
    let currentMinutes = today.getMinutes();
    let currentSeconds = today.getSeconds();
    if(currentHours >= 12 || (currentHours === 12 && currentMinutes >= 30)){
        timeAbbreviation = 'PM';
    }else{
        timeAbbreviation = 'AM';
    }
    currentHours -= 12;
    if(currentHours < 10){
        currentHours = '0' + currentHours;
    }
    if(currentMinutes < 10){
        currentMinutes = '0' + currentMinutes;
    }
    if(currentSeconds < 10){
        currentSeconds = '0' + currentSeconds;
    }
    timeParagraph.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeAbbreviation}`;
}

window.setInterval(refreshTime, 1000);