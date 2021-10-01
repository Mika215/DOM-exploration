//**--declaring my array of students--**//
const lesJepsenes = [
  "Antoine Ghysens",
  "Aurore Remy",
  "Baptiste Geron",
  "Batsheba Deepijan",
  "Bruno Presti",
  "Fabrice Castrogiovanni",
  "Fanny Fraiture",
  "Francis François",
  "Freric Van Overmeire",
  "JC Molhant",
  "Maxim K.",
  "Michael Tesfay",
  "Philippe Meulemans",
  "Raoni Gillet",
  "René",
  "Rouslan Boyko",
  "Stephane Genet",
  "Thomas Backers",
  "Tiffany Dessouroux",
];

let article = document.querySelector("article");
//**--declaring my randomizer function--**//
const randomizer = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

//**--declaring brightness checker function--**//
const checkBrightness = () => {
  let r = randomizer(255);
  let g = randomizer(255);
  let b = randomizer(255);
  let rgb = `rgb(${r},${g},${b})`;
  let brightness = Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
  let results = [rgb, brightness];
  return results;
};

//**--looping through my array of students using for...of loop & creating section element for each student --**//
const addSection = () => {
  for (member of lesJepsenes) {
    const sectionEl = document.createElement("section");

    const paragraph = document.createElement("p");
    if (member === "Michael Tesfay" || member === "JC Molhant") {
      console.log(
        "we removed those two bad boys from the list!\nMichael Tesfay\nJC Molhant"
      );
      continue; //skipping my name
    }
    paragraph.textContent = member; //passing the student full name as a textContent of each paragraph.
    sectionEl.appendChild(paragraph);

    //**--here comes the quantem physics sort of concept ? ); =>JC--**//
    //but it is all about checking the balance of textcolor and background brightness.

    let colorArray = checkBrightness();
    sectionEl.style.backgroundColor = colorArray[0];
    if (colorArray[1] > 160) {
      paragraph.style.color = "black";
    } else {
      paragraph.style.color = "white";
    }
    article.appendChild(sectionEl);
  }
};

//**--declaring a fucntion to reShuffle my array everytime the page is refreshed--**//
const arrayShuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    //the Math.floor method avoids a decimal number while randomising the sort
    randomNumber = Math.floor(Math.random() * (i + 1));
    //we declare a temp variable to help us easily swap the previous array position against the randomNumber
    let temp = arr[i];
    arr[i] = arr[randomNumber];
    arr[randomNumber] = temp;
  }
  return arr;
};
arrayShuffle(lesJepsenes);

for (i = 0; i < lesJepsenes.length; i++) {
  addSection(lesJepsenes[i]);
}
