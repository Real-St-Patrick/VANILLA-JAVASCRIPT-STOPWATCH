let appendSeconds = document.querySelector(".seconds");
let appendTens = document.querySelector(".tens");
let tens = 00;
let seconds = 00;
let form = document.forms["buttons"];
let counter = 0;
let startbtn = form.querySelector(".start");
let stopbtn = form.querySelector(".stop");
let resetbtn = form.querySelector(".reset");
let setInter = '';




 startbtn.addEventListener("click", e =>{
    e.preventDefault()
    const milliSeconds = ()=>{
        appendTens.innerHTML  = tens++; 
        appendTens.style.transition = "all 12s ease-in" ;



     if(tens > 99){
        appendSeconds.innerHTML = "0" + seconds++;
        tens = 0;
    }
     if(seconds > 9){
       appendSeconds.innerHTML = seconds;
    }
    if(seconds == 99){
        clearInterval(setInter)
    }
    }
    setInter = setInterval(milliSeconds, 10)

    
})

stopbtn.addEventListener("click", e =>{
    e.preventDefault()
    clearInterval(setInter)

})
resetbtn.addEventListener("click", e =>{
    e.preventDefault()
    clearInterval(setInter)
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
})

