var angry = 100;
//const horsimage = document.getElementById("thehors");
const neighs = document.getElementById("neighing");
neighs.setAttribute("style", "white-space: pre-wrap;");  
horsimage.addEventListener("click", function() {
  for (let i=0; i< Math.round(angry/100); i++) {
    neighs.textContent+="neigh ";
  }
  angry += 16;
  horsimage.style.filter="contrast("+angry+"%)";
  horsimage.style.animationTimingFunction=angry+"ms";
});