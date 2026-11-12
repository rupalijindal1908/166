var numbers = ["1", "2", "3", "4", "5", "6" , "7" , "8" , "9" , "10"];
var stopped = true;
function change() {
    var random = Math.floor(Math.random() *numbers.length);
    number.innerHTML = numbers[random]
}
function start() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    }
    else {
        clearInterval(t);
        stopped = true;
    }
}
var number;
window.onload = function () {
    number = document.getElementById("num");
    start();
}