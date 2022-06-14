// Your code here
const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft(){
    let left = dodger.style.left
    left = parseInt(left)
    if(left > 0){
        dodger.style.left = `${left-10}px`
    }
    // var newPosition = dodger.style.left
    // newPosition = parseInt(newPosition)
}
moveDodgerLeft()

function moveDodgerRight(){
    let left = dodger.style.left
    left = parseInt(left)
    if(left < 360){
        dodger.style.left = `${left + 10}px`
    }
    
    // var newPosition = dodger.style.left
    // newPosition = parseInt(newPosition)
}
moveDodgerRight()

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });