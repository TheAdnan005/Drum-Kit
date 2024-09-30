let btn = document.querySelectorAll(".drum");

function makeSound(key){
    switch (key) {
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    
        default:
          break;
      }
}
$("button").click((e)=>{
  makeSound(e.target.innerHTML)
})
$(document).keypress((e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

function buttonAnimation(key) {
  var activeBtn = document.querySelector("." + key + ".drum");
  if (activeBtn) {
    $(activeBtn).addClass("pressed")
      activeBtn.classList.add("pressed");
      setTimeout(() => {
          activeBtn.classList.remove("pressed");
      }, 200);
  }
}

// document.addEventListener("keypress", (e) => {
//   makeSound(e.key)
//   buttonAnimation(e.key)
// });

// btn.forEach((element) => {
//   element.addEventListener("click", () => {
//     makeSound(element.innerHTML);
//   });
// });