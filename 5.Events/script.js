const body = document.querySelector("body");
const actionSquares = document.querySelector(".displayedsquare-wrapper");

const greenSqr = document.querySelector(".green");
const violetSqr = document.querySelector(".violet");
const orangeSqr = document.querySelector(".orange");
const actionLog = document.querySelector("ul");

const greenTrigger = (event) => {
  let greenDiv = document.createElement("div");
  greenDiv.classList.add("displayedsquare", "green");
  actionSquares.append(greenDiv);
  let loggedAt = document.createElement("li");
  loggedAt.innerHTML = `Created a new Green sqr: ${new Date()}`;
  actionLog.append(loggedAt);
   //click listner for the generated color squares
  greenDiv.addEventListener("click",()=>{
    alert(`Green!`);
  });
};

greenSqr.addEventListener("click", greenTrigger);

const violetTrigger = () => {
  let violetDiv = document.createElement("div");
  violetDiv.classList.add("displayedsquare", "violet");
  actionSquares.append(violetDiv);
  let loggedAt = document.createElement("li");
  loggedAt.innerHTML = `Created a new Violate sqr: ${new Date()}`;
  actionLog.append(loggedAt);
   //click listner for the generated color squares
  violetDiv.addEventListener("click",()=>{
    alert(`Violet!`);
  });
};
violetSqr.addEventListener("click", violetTrigger);

const orangeTrigger = () => {
  let orangeDiv = document.createElement("div");
  orangeDiv.classList.add("displayedsquare", "orange");
  actionSquares.append(orangeDiv);
  let loggedAt = document.createElement("li");
  loggedAt.innerHTML = `Created a new Orange sqr: ${new Date()}`;
  actionLog.append(loggedAt);
  //click listner for the generated color squares
  orangeDiv.addEventListener("click",()=>{
    alert(`Orange!`);
  });
};
orangeSqr.addEventListener("click", orangeTrigger);


//----Randomizing colors----//
const randomizer = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
//----Log deleting Function----//
const deletLog=()=>{
  actionLog.lastChild.remove();
}
//----Squares deleting Function----//
const deletSquares=()=>{
  actionSquares.lastChild.remove();
}
//----Backgound color changing & logger Function----//
const changeBackGround = () => {
  body.style.backgroundColor = `rgb(${randomizer(255)},${randomizer(
    255
  )},${randomizer(255)})`;
  let loggedAt = document.createElement("li");
  loggedAt.innerHTML = `The spacebar was hitted: ${new Date()}`;
  actionLog.append(loggedAt);
};

//----keyboard listners----//
document.addEventListener("keypress", (event) => {
  if (event.which === 73 || event.which === 105) {
    deletLog();//i uppercase & lowercase
  } else if (event.which === 32) {
    changeBackGround();//space
  }
  else if(event.which === 83 || event.which === 115 ){
    deletSquares();//S uppercase & lowercase

  }
});
