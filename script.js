const timerCont = document.querySelector(".timer")
const btnCOnt = document.querySelector(".btn-cont");

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");

const min = document.querySelector("#min");
const sec = document.querySelector("#sec");


// console.log(timerCont)
// console.log(btnCOnt)
// console.log(playBtn)
// console.log(pauseBtn)
// console.log(minutes)
// console.log(sec)

let seconds = 59
let minutes = 45
let isPaused = false

function startTimer (count){

    if (isPaused === true){

        let start_sec_count = setInterval( function(){
        sec.innerHTML=`${seconds--}`
        },1000)

        let start_min_count = setInterval( function(){
            min.innerHTML=`${minutes--}`
        },60000)

    }

    else{
        
    }

    playBtn.style.display="none"

}



function PauseTimer(){
    start_sec_count(clearInterval())
    start_min_count(clearInterval())
}



playBtn.addEventListener("click", (e) => {
    startTimer()
})

pauseBtn.addEventListener("click", (e) => {
    PauseTimer()
})