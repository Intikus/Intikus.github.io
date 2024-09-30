var letters = document.querySelectorAll(".lettertile")
letters.forEach(letter => {
    lettershake(letter)
});

var isplaying = false
beat = 0
function lettershake(letter){
    if (isplaying){
        //ms    135b/m  1m/60s 1000ms / s   = 135b/60s   * 1s / 1000ms = 135b/60000ms -> 60000ms / 135b
        //1b   135b/m   60000*x/135 
        delay = (beat%1*60000)/135
        if(delay < 100){
            delay = 60000/135
        }
    }
    else{
        var delay = Math.random()*250 + 250
    }
    setTimeout(() => {
        if (!isplaying){
            var value = Math.random()*20-10;
            var xalue = Math.random()*4-2;
            var yalue = Math.random()*4-2;
        }
        else{        
            var value = Math.random()*40-20;
            var xalue = Math.random()*24-12;
            var yalue = Math.random()*24-12;
        }
        letter.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
        lettershake(letter);
        
    }, delay); 
}