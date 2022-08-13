let startBtn = document.querySelector(".start");
// let resetBtn = document.querySelector(".reset");
let time = document.querySelector(".time")

let timer;
let msec = 0;
let sec = 0;
let min = 0;
let isWatchStop = true;

const timeOfWatch = () => {
    msec++;
    if (msec == 100) {
        sec++;
        msec = 0;
    }
    if (sec == 60){
        min++;
        sec = 0;
    }
    min = String(min).length < 2 ? "0" + min : min;
    sec = String(sec).length < 2 ? "0" + sec : sec;
    msec = String(msec).length < 2 ? "0" + msec : msec;
    time.innerHTML = `${min}:${sec}:${msec}`;
};
const playTime = () =>{
    timer = setInterval(timeOfWatch, 10);
};
const stopTime = () => {
    clearInterval(timer);
};

startBtn.addEventListener("click", () => {
    isWatchStop =!isWatchStop;
    if(isWatchStop == false){
    playTime();
    startBtn.innerHTML = "STOP";
    } else{
        stopTime();
        startBtn.innerHTML = "START";
    }
});


// resetBtn.addEventListener("click", () => {
//     isWatchStop = false;
//     stopTime();
//     time.innerHTML = `00:00:00`;
// })
