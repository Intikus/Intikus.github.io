window.onload = function () {
    const splits = document.querySelectorAll('.lettertile');
    splits.forEach(split => {
        var text = split.textContent;
        split.textContent = "";
        for (let i=0; i< text.length; i++) {
          var letter = document.createElement("span");
          //letter.classList.add("splitletter");
          letter.textContent = text.charAt(i);
          letter.style.setProperty("transform", `rotate(${Math.random()*20-10}deg) translate( ${Math.random()*4-2}px, ${Math.random()*4-2}px)`);
          letter.style.setProperty("white-space", 'pre')
          letter.style.setProperty("display",  'inline-block')
          lettershake(letter)
          split.appendChild(letter);
        }
      });
    const bsplits = document.querySelectorAll('.split');
    bsplits.forEach(bsplit => {
      var text = bsplit.textContent;
      bsplit.textContent = "";
      //console.log(text)
      for (let i=0; i< text.length; i++) {
        var letter = document.createElement("span");
        letter.classList.add("splitletter");
        letter.textContent = text.charAt(i);
        bsplit.appendChild(letter);
        letter.style.animationDelay = (i-text.length)/10 + "s";
      }
    });
}

async function lettershake(letter){
    var delay = Math.random()*250 + 250
    shakeit(letter)
    setTimeout(() => {
        lettershake(letter);
    }, delay); 
}

function shakeit(letter){
    var value = Math.random()*20-10;
    var xalue = Math.random()*4-2  ;
    var yalue = Math.random()*4-2  ;
    //letter.style.setProperty("scale", `1`);
    letter.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
}
