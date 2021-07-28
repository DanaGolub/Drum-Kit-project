
//Detecting Button Press:
let numberOfDrumButtons = document.querySelectorAll(".drum")

for (let step = 0; step < numberOfDrumButtons.length; step++) {
  document.querySelectorAll(".drum")[step].addEventListener("click", handleClick);
}

function handleClick() {
  let buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Detecting Keyboard Press:
document.addEventListener("keydown", function(event) {
  let keyBoardButton = event.key;
  makeSound(keyBoardButton);
  buttonAnimation(keyBoardButton);
})


function makeSound(key) {
  switch (key) {
    case "w":
      const kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "a":
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "s":
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "d":
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "j":
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "k":
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "l":
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}


function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
  }
