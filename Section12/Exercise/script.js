var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listitem = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var deletebutton = document.createElement("button");
	deletebutton.appendChild(document.createTextNode("Delete!"));
	li.appendChild(deletebutton);
	deletebutton.onclick = deleteentry;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick = function(event) {
	var target = event.target;
	target.classList.toggle("done");
}

function deletebutton() {
	var deletebutton = document.createElement("button");
	deletebutton.appendChild(document.createTextNode("Delete!"));
	listitem[i].appendChild(deletebutton);
	deletebutton.onclick = deleteentry;
}

for(i=0;i<listitem.length;i++) {
	deletebutton();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function deleteentry(event) {
	event.target.parentNode.remove();
}