const ul = document.querySelector("ul");
const ulChildNodes = ul.childNodes;
const body = document.querySelector("body");

for (let i = 0; i < ulChildNodes.length; i++) {
  if (ulChildNodes[i].nodeType === 1) {
    // console.log(ulChildNodes[i]);
  }

  let targetLi = ulChildNodes[i];
  targetLi.addEventListener("click", () => {
    if (targetLi.textContent === "Fast and Furious") {
      alert`The most important franchise ever, the story of DOM(inic) Toretto's family.\nIt's not about car, it's about family.`;
    } else {
      alert(targetLi.textContent);
    }
  });
  //---i cant move the li element with class important to the top---/
  if (ulChildNodes[i].textContent === "Fast and Furious") {
    ulChildNodes[i].classList.add("important");
    ul.insertBefore(ulChildNodes[i], ulChildNodes[0]);
    // how to write code which can be accesible out of its local scope
    //if i take out some of these line of codes then it wont work due to scope accessibility
  }
}

// have no clue about the duplicates ?????

const sortList = () => {
  let filteredNodes = [];
  //here i am pushing only the element nodes into the array excluding texts and other childnodes
  for (let i = 0; i < ulChildNodes.length; i++) {
    if (ulChildNodes[i].nodeType === 1) {
      filteredNodes.push(ulChildNodes[i]);
    }
  }

  for (let i = filteredNodes.length; i >= 0; i--) {
    ul.appendChild(filteredNodes[(Math.random() * i) | 0]);
    //here i was trying to constantly keep the fast&Furious at the top of the list but didn't work
    //       if(filteredNodes[i].classList.contains("important")){
    //         ul.insertBefore(filteredNodes[i],filteredNodes[0]);
    //       }
  }
};

//----This one seems not working--strange--//
body.addEventListener("keyup", (event) => {
  if (event.which === 82) {
    sortList();
    console.log("the r character was pressed");
  }
});

const cloneFastNfurious = () => {
  //here i am pushing only the element nodes into the array excluding texts and other childnodes
  let toBeColoned;
  for (let i = 0; i < ulChildNodes.length; i++) {
    if (
      ulChildNodes[i].nodeType === 1 &&
      ulChildNodes[i].classList.contains("important")
    ) {
      //this function doesn't work properly
      toBeColoned = ulChildNodes[i];
      toBeColoned.cloneNode(true);
      ul.insertBefore(toBeColoned, ulChildNodes[0]);
    }
  }
};

body.addEventListener("keyup", (event) => {
  if (event.which === 68) {
    console.log("d charachter detected");
    cloneFastNfurious();
  }
});

const optionContainer = document.createElement("div");
body.insertBefore(optionContainer, ul);

const selectToggle = document.createElement("select");
const importantOpt = document.createElement("option");
importantOpt.innerText = "important franchises";
const normalOpt = document.createElement("option");
normalOpt.innerText = "normal franchises";
selectToggle.append(importantOpt, normalOpt);
optionContainer.appendChild(selectToggle);

const displayImportant = () => {
  for (let item of ulChildNodes) {
    if (item.nodeType === 1) {
      if (item.classList.contains("important")) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    }
  }
};

const displayNormal = () => {
  for (let item of ulChildNodes) {
    if (item.nodeType === 1) {
      item.style.display = "list-item";
    }
  }
  console.log("normal list selected");
};

selectToggle.addEventListener("change", (event) => {
  if (event.target.value === "important franchises") {
    displayImportant();
  }
  if (event.target.value === "normal franchises") {
    displayNormal();
  }
});
