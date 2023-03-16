var numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        tunes(this.innerHTML)
        buttonMotion(this.innerHTML)
    })
}

document.addEventListener("keydown", function(event){
    tunes(event.key)
    buttonMotion(event.key)
})


function tunes(key){
    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        default:
            console.log("Hello");
            break;
    }
}

function buttonMotion(key){
    currentButton = document.querySelector("."+key);
    currentButton.classList.add("pressed");

    setTimeout(() => {
        currentButton.classList.remove("pressed");
    },150);
}