var letters = document.querySelectorAll(".lettertile")
letters.forEach(letter => {
    lettershake(letter)
});

function lettershake(letter){
    var delay = Math.random()*175 + 250
    setTimeout(() => {
        var value = Math.random()*20-10;
        var xalue = Math.random()*6-3;
        var yalue = Math.random()*6-3;
        letter.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
        lettershake(letter);
    }, delay); 
}