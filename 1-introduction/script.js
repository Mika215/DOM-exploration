/*
 */

const docTitle = document.querySelector("title");
docTitle.innerText = "Modifying the DOM";
console.log(docTitle.innerText);
const mainSection = document.querySelector("main");
const sectionEl = mainSection.querySelector("section");
const imageContainer = document.createElement("div");
imageContainer.innerHTML = `<img src="../assets/html-box-model.png" alt="Conventional-HTML-Representation"></img>`;
sectionEl.appendChild(imageContainer);
document.body.style.background="rgb(173,216,230)";

const array =[document.children[0].children[1].children];

for(let element of array ){
    console.log(element);
}
