var angry = 100;
const horsimage = document.getElementById("thehors");
const neighs = document.getElementById("neighing");
neighs.setAttribute("style", "white-space: pre;");  
horsimage.addEventListener("click", function() {
  neighs.textContent+="\r\nneigh";
  angry += 16;
  horsimage.style.filter="contrast("+angry+"%)";
  horsimage.style.animationTimingFunction=angry+"ms";
});