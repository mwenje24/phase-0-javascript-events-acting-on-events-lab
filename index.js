// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    var left = dodger.style.left
    left = parseInt(left)
    dodger.style.left = `${left-10}px`
}
moveDodgerLeft()

function moveDodgerRight(){
    var left = dodger.style.left
    left = parseInt(left)
    dodger.style.left = `${left + 10}px`
}
moveDodgerRight()