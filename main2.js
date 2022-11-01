var startBtn = document.getElementById("start"),
    resetBtn = document.getElementById("reset"),
    pauseBtn = document.getElementById("pause"),
    mmDisplay = document.getElementById("mm"),
    secDisplay = document.getElementById("sec"),
    minDisplay = document.getElementById("min");
    let mm = 00,
        sec = 0,
        min = 0,
        interval;


        function startTime(){
            mm = mm + 1;
            mmDisplay.innerHTML ="0" + mm;
            if(mm > 9){
                mmDisplay.innerHTML =mm;
            }
            if(mm==59){
                mm = 0;
                sec = sec + 1;
                secDisplay.innerHTML ="0" + sec;
                if(sec > 9){
                    secDisplay.innerHTML =sec;
                }
                if(sec==59){
                    sec = 0;
                    min = min + 1;
                    minDisplay.innerHTML ="0" + min;
                    if(min > 9){
                        minDisplay = min;
                    }
                }
            }
        };
        

startBtn.addEventListener("click", () =>{
    clearInterval(interval);
    interval = setInterval(startTime, 1);

});


pauseBtn.addEventListener("click", () => {
    clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    mm = 0;
  	sec = 0;
    min = 0;
    mmDisplay.innerHTML ="0" + mm;
  	secDisplay.innerHTML = sec;
})
