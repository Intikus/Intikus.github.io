var haha = document.getElementById("player")
if (haha == null){
    haha = 0
}
var isplaying = false
var thetimenow = 0
var startedat = 0
//haha.ontimeupdate=(function() {
haha.onplaying=(function() {
    //document.getElementById('tracktime').innerHTML = this.currentTime + ' / ' + Math.floor(this.duration);
    //console.debug(this.currentTime, "hello");
    isplaying = true;
    thetimenow = this.currentTime;
    startedat = Date.now() - thetimenow*1000;
    balls()
});

haha.onpause=(function(){
    isplaying = false;
});

haha.onsuspend=(function(){
    console.debug("I'm waiting")
});

haha.onseeked=(function(){
    thetimenow = this.currentTime;
    startedat = Date.now() - thetimenow*1000;
});
const horsimage = document.getElementById("thehors");
//https://www.w3schools.com/jsref/event_ontimeupdate.asp
function balls(){

    //console.debug(isplaying)
    if (isplaying){
        //console.debug("fuck");
        //if (checker > 10){
        //    var s1 = thetimenow;
        //    thetimenow = (Date.now() - startedat)/1000;
        //    //console.log(Date.now(), startedat, thetimenow)
        //    console.log(s1-thetimenow)
        //    checker = 0
        //}
        setTimeout(() => {
            thetimenow = (Date.now() - startedat)
            //thetimenow += 16/1000

            //135bpm 
            //135b/m * 1m/60s *1s/1000ms * xms
            var beatbuffer = beat
            beat = thetimenow / (1000*60) * 135
            if (Math.floor(beat) != Math.floor(beatbuffer)){
                console.log("Bap")
                //send bap
                cooolor = `color:hsl(${beat*4},100%,50%);`
                document.getElementById('beat').innerHTML += "\nbap";
                var value = Math.random()*200-100;
                var xalue = Math.random()*24-12;
                var yalue = Math.random()*24-12;
                var salue = Math.random()*0.6+0.8
                horsimage.style.setProperty("transform", `rotate(${value}deg) translate( ${xalue}px, ${yalue}px)`);
                horsimage.style.setProperty("scale", `${salue}`);
            }

            //checker += 1
            document.getElementById('tracktime').innerHTML = Math.floor(thetimenow/1000) + ' / ' + Math.floor(haha.duration);

            balls()
        }, 18);
    }
    else{
        horsimage.style.setProperty("scale", `1`);
        horsimage.style.setProperty("transform", `rotate(${0}deg) translate( ${0}px, ${0}px)`);
    }
}
//const gif = new SuperGif({
//    gif: document.querySelector('thehors'),
//    loop_mode: true,
//    auto_play: true,
//    //max_width: 150,
//    // on_end:.
//    // loop_delay:
//    show_progress_bar: false
//    });
//gif.move_to(frame);
