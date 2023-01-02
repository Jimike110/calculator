function clearScreen() {
	document.querySelector("#result").value = "";
}
function display(value) {
	document.querySelector("#result").value += value;
}
function calculate() {
	var p = document.querySelector("#result").value;
	var q = eval(p);
	document.querySelector("#result").value = q;
}
function backspace() {
	document.querySelector("#result").value = document.querySelector("#result").value.substring(0, document.querySelector("#result").value.length - 1);
}