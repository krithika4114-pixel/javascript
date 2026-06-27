window.onload = function(){



    let seconds = 0;
    let milliseconds = 0;
    let Interval;

    const appendmilliseconds = document.getElementById("milliseconds");
    const appendmseconds = document.getElementById("seconds");

    const bottomstart = document.getElementById("bottomstart");
    const bottomstop = document.getElementById("bottomstop");
    const bottomreset = document.getElementById("bottomreset");
    
    function startTimer() {
        milliseconds++;

    if (milliseconds > 10) {
        appendmilliseconds.innerHTML = "0" + milliseconds;
    } else {
      appendmilliseconds.innerHTML = milliseconds;  
    }

    if (milliseconds > 99) {
        milliseconds = 0;
        seconds++;
        
    }   
}