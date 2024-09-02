var cover = document.getElementById("thealbum")
cover.addEventListener("mousemove", function(event) {

    var rect = event.target.getBoundingClientRect();
    var x = (event.clientX - rect.left - rect.width/2 )*40 /rect.width; //x position within the element.
    var y = (event.clientY - rect.top  - rect.height/2)*40 /rect.height;  //y position within the element.
    cover.style.transform= "perspective(1000px) rotateX(" + -y + "deg) rotateY(" + x + "deg) scale3d(1, 1, 1)"
    cover.style.transition= "400ms cubic-bezier(0.03, 0.98, 0.52, 0.99)"
})

cover.addEventListener("mouseleave", function(){

    cover.style.transform= ""

})

//will-change: transform;
// transition: 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99);
//transform: perspective(1000px) rotateX(0deg) rotateY(70deg) scale3d(1, 1, 1);