var letters = document.querySelectorAll(".lettertile")
letters.forEach(letter => {
    lettershake(letter)
});

var isplaying = false
beat = 0
var beatbuffer = 0

function firstFunction(_callback){
    setTimeout(() => {
        if (Math.floor(beat) != Math.floor(beatbuffer)){
            beatbuffer = beat;
            _callback();    
        }
    }, 10); 
}

async function lettershake(letter){
    if (isplaying){
        //ms    135b/m  1m/60s 1000ms / s   = 135b/60s   * 1s / 1000ms = 135b/60000ms -> 60000ms / 135b
        //1b   135b/m   60000*x/135 
        delay = 20
    }
    else{
        var delay = Math.random()*250 + 250
    }
    if (isplaying){
        //size = size/1.06
        //letter.style.setProperty("scale", `${1+size}`);
        firstFunction(function(letter) {
            console.log('huzzah, I\'m done!');
            letters.forEach(letter => {
                //size += 0.1
                var value = Math.random()*40-20;
                var xalue = Math.random()*24-12;
                var yalue = Math.random()*24-12;
                letter.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
                var salue = Math.random()*0.8+0.8
                letter.style.setProperty("scale", `${salue}`);
            })
        });    
    }
    else{
        var value = Math.random()*20-10;
        var xalue = Math.random()*4-2;
        var yalue = Math.random()*4-2;
        letter.style.setProperty("scale", `1`);
        letter.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
    }      
    setTimeout(() => {
        lettershake(letter);
    }, delay); 
}