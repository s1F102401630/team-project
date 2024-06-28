addEventListener("DOMContentLoaded", (event) => {

	const headerElement = document.createElement("div");
	headerElement.classList.add("header");
	headerElement.innerHTML = `
		<div class="logo">
			<img src="./resources/images/logo.png">
		</div>
		<div class="pages">
			<a class="page" href="./index.html">ホーム</a>
			<a class="page" href="./players.html">選手</a>
			<a class="page" href="./history.html">歴史</a>
		</div>
	`;
	document.body.prepend(headerElement);

	const footerElement = document.createElement("div");
	footerElement.classList.add("footer");
	footerElement.innerHTML = `
		<span class="copyright">2024 INIAD Class 3 Team 8</span>
	`;
	document.body.appendChild(footerElement);

	const currentFilename = location.href.split("/").pop();
	Array.from(headerElement.querySelectorAll(".pages > .page")).forEach((element) => {
		const filename = element.getAttribute("href").replace("./", "");
		if (filename === currentFilename) {
			element.classList.add("selected");
		}
	});

});