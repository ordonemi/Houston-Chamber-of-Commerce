const modeButton = document.querySelector("#dark-mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("DARK")) {
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "LIGHT";
	} else {
		body.style.background = "#eee";
		body.style.color = "#000";
		modeButton.textContent = "DARK";
	}
});