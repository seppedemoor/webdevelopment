const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i=0; i<sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	document.getElementById("colorBox").style.backgroundColor = "rgb(128, 255, 128)";
}

const update = () => {
	let sliders = document.getElementsByClassName("slider");
	let red = sliders[0].value;
	let green = sliders[1].value;
	let blue = sliders[2].value;

	document.getElementById("redValue").textContent = red;
	document.getElementById("greenValue").textContent = green;
	document.getElementById("blueValue").textContent = blue;

	document.getElementById("colorBox").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener("load", setup);