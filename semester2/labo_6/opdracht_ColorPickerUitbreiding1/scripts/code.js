const setup = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}
	document.getElementById("colorBox").style.backgroundColor = "rgb(128, 255, 128)";
	document.getElementById("saveBtn").addEventListener("click", saveColor);
}

const update = () => {
	let red = document.getElementById("red").value;
	let green = document.getElementById("green").value;
	let blue = document.getElementById("blue").value;
	document.getElementById("redValue").textContent = red;
	document.getElementById("greenValue").textContent = green;
	document.getElementById("blueValue").textContent = blue;
	document.getElementById("colorBox").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

const saveColor = () => {
	let red = document.getElementById("red").value;
	let green = document.getElementById("green").value;
	let blue = document.getElementById("blue").value;
	let color = `rgb(${red}, ${green}, ${blue})`;

	let saved = document.createElement("div");
	saved.classList.add("saved");
	saved.style.backgroundColor = color;
	saved.addEventListener("click", () => {
		document.getElementById("red").value = red;
		document.getElementById("green").value = green;
		document.getElementById("blue").value = blue;
		update();
	});

	let deleteBtn = document.createElement("button");
	deleteBtn.textContent = "X";
	deleteBtn.classList.add("delete-btn");
	deleteBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		saved.remove();
	});

	saved.appendChild(deleteBtn);
	document.getElementById("savedColors").appendChild(saved);
}

window.addEventListener("load", setup);