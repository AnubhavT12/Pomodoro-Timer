const timerCont = document.querySelector(".timer")
const btnCOnt = document.querySelector(".btn-cont");

const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const CounterSpan = document.querySelector("#countspan")

const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

pauseBtn.style.display="none"


playBtn.addEventListener("click",(e)=>{

    console.log("button was clicked")

    playBtn.style.display="none"
    pauseBtn.style.display="inline"

    function starttimer (duration,display){

    let timer = duration, minutes, seconds
    let cycleCount = 0
    isPaused = false

    const interval = setInterval(function(){

        minutes = Math.floor(timer / 60);
        seconds = timer % 60

        minutes = minutes<10 ? "0" + minutes : minutes
        seconds = seconds<10 ? "0" + seconds : seconds

        console.log(minutes + ":" + seconds)
        
        min.innerHTML=`${minutes}`
        sec.innerHTML=`:${seconds}`

        if (--timer < 0){
            clearInterval(interval)
            alert("times up")
        }

        pauseBtn.addEventListener("click", (evt) => {
            clearInterval(interval)
            isPaused = true
            playBtn.style.display="inline"
            pauseBtn.style.display="none"
        })

        

    },1000)

}





const twentyfiveminutes = 25*60
starttimer(twentyfiveminutes)

})