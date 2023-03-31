function addToScreen(value) {
    document.getElementById("screen").innerHTML += value;
}

function clearScreen() {
    document.getElementById("screen").innerHTML = "";
}

function calculate() {
    var expression = document.getElementById("screen").innerHTML;
    var result = eval(expression);
    document.getElementById("screen").innerHTML = result;
}
function del(){
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML.slice(0,-1);
}
