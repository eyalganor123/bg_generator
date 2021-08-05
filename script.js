var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var deg = document.querySelector("#degrees");
var random = document.querySelector("#randomize")
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = `linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value} )`
    css.textContent = body.style.background + ';';
}

function getRandomcolor() {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    return rgbToHex(randomRed, randomGreen, randomBlue);
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function randomize() {

    color1.value = getRandomcolor();
    color2.value = getRandomcolor();
    deg.value = Math.floor(Math.random() * 360);
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

deg.addEventListener("input", setGradient);

random.addEventListener('click', randomize);





