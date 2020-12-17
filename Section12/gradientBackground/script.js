var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

window.onload = setGradient();

btn.onclick = getRandomColor;

function getRandomColor() {
    var randomcolor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomcolor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = 
	"linear-gradient(to right, #" 
	+ randomcolor1 
	+ ", #" 
	+ randomcolor2
    + ")";
    
	console.log(randomcolor1, randomcolor2);
	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);