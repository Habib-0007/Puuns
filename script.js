let generateBtn = document.querySelector(".button");
let punNo = document.querySelector(".pun-no");
let punText = document.querySelector(".pun-content");

generateBtn.addEventListener("click", () => {
    fetch("puns.json")
    .then(res => res.json())
    .then(data => {
        let randomIndex = Math.floor(Math.random() * data.length);
        let punContent = data[randomIndex].pun;
        let punId = data[randomIndex].id;
        punNo.innerText = `Pun #${punId}`;
        punText.innerText = punContent;
    })
});