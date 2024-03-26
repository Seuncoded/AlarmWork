let timeWatch = document.getElementById('timeWatch');

setInterval(() => {
    let date = new Date();
    let timeCount = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    timeWatch.innerHTML = timeCount;
}, 1000);






let setHours = document.getElementById('setHours');
let setMinutes = document.getElementById('setMinutes');
let index = 0

for(let index =0; index <=23; index++){
   setHours.innerHTML += `<option value=${index}>${index}</option>`
}


for(let index =0; index <=60; index++){
   setMinutes.innerHTML += `<option value=${index}>${index}</option>`
}



let date = new Date();
let hourTime = date.getHours();
let minTime = date.getMinutes();
let secondsTime = date.getSeconds() * 1000;

console.log(hourTime);
console.log(minTime);
console.log(secondsTime);

function setAlarm() {
    if(setHours.value <= hourTime & setMinutes.value <= minTime){
        alert('They set Alarm For Future Idiot')
        return;
    }else{
        let HoursDiff = ( Number(setHours.value) - Number(hourTime)) * 60 * 60 * 1000;
        let minDiff = (Number(setMinutes.value) - Number(minTime)) * 60 * 1000;
        let setTimeDiff =( HoursDiff + minDiff);
    
        console.log(setTimeDiff);
        
        setTimeout(() => {
        alert('Alarm')
        var audio = new Audio('alarm.mp3');
        audio.play();
     }, setTimeDiff - 6000);
    return;
    }

 
}