let generateBtn =
	document.querySelector(".button");
let punNo =
	document.querySelector(".pun-no");
let punText = document.querySelector(
	".pun-content"
);
let punContent;
let punId;
generateBtn.addEventListener(
	"click",
	() => {
		fetch("puns.json")
			.then(res => res.json())
			.then(data => {
				let randomIndex = Math.floor(
					Math.random() * data.length
				);
				punContent =
					data[randomIndex].pun;
				punId = data[randomIndex].id;
				punNo.innerText = `Pun #${punId}`;
				punText.innerText = punContent;
			});
	}
);

document
	.getElementById("downloadBtn")
	.addEventListener("click", () => {
		const element =
			document.querySelector(
				".pun-container"
			);
		html2canvas(element)
			.then(canvas => {
				const image = canvas.toDataURL(
					"image/png"
				);

				const link =
					document.createElement("a");
				link.href = image;
				link.download = `pun-${punId}.png`;
				link.click();
			})
			.catch(err =>
				alert(
					"Error capturing element:",
					err
				)
			);
	});
