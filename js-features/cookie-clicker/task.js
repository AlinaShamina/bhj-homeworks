const cookieImage = document.getElementById("cookie");

let cookieClick = document.getElementById("clicker__counter");
let previousClicks = 0;

cookieImage.onclick = function() {
	let currentClicks = parseInt(cookieClick.textContent);
	cookieClick.textContent = currentClicks + 1;
	if (currentClicks % 2 === 0) {
		cookieImage.width = 250
	} else cookieImage.width = 200
}