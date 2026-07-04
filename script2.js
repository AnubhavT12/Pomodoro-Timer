const timerCont = document.querySelector(".timer")
const btnCOnt = document.querySelector(".btn-cont");

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

let seconds = 59
let minutes = 45
let isPaused = false


playBtn.addEventListener("click", (e) => { 
    
    playBtn.style.visibility="hidden";
    pauseBtn.style.visibility="visible";

    if(isPaused == false){

    let startSecondTimer = setInterval(function (){
    console.log(`${--seconds}`)
    },1000)

    let stopSecondTimer = setTimeout(() => {
        clearInterval(startSecondTimer)
        console.log("timer stopped after 6 seconds")
    }, 6000);

}

})


pauseBtn.addEventListener("click", (e) => {

    isPaused = true
    pauseBtn.style.visibility="hidden";
    playBtn.style.visibility="visible";
    
if (isPaused == true){

    let startSecondTimer = setInterval(function (){
    },1000)

    stopSecondTimer = setTimeout(() => {
        clearInterval(startSecondTimer)
        console.log("timer stopped")
    })
    
}

})








// let a = setInterval(function(){

//     let currTime = new Date().toLocaleTimeString();
//     // console.log(currTime);
//     clockTime.innerHTML = currTime;

// },1000)