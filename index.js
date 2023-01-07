var numberofstrings=document.querySelectorAll(".drum").length;


var audio = new Audio('./sounds/crash.mp3');

function bro(click){
    switch(click){
        case "w":
            var tom1=new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
                var kick=new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
    
        case "k":
                var snare=new Audio('sounds/snare.mp3');
                snare.play();
                break;
        case "l":
                    var crash=new Audio('sounds/crash.mp3');
                    crash.play();
                    break;
        

        
    }
}

for(var i=0;i<numberofstrings;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
 bro(this.innerHTML);
 anime(this.innerHTML);
    })
}

document.addEventListener("keydown",(event)=>{
    bro(event.key);
    anime(event.key);
})
function anime(but){
    document.querySelector("."+but).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("."+but).classList.remove("pressed");
    },100);
   
}