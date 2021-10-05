const inputName = document.getElementById("firstname");
const span = document.getElementById("display-firstname");
const inputAge = document.getElementById("age");
const secretSection = document.getElementById("a-hard-truth");
const pwd = document.getElementById("pwd");
const pwdConfirmation = document.getElementById("pwd-confirm");
let passWord;
let passConfirm;
const webTheme = document.getElementById("toggle-darkmode");
const body = document.querySelector("body");

const getFirstName = () => {
  let firstName = inputName.value;
  span.append(firstName);
};

const getAge = () => {
  let age = inputAge.value;
  console.log(age);
  if (age >= 18) {
    secretSection.style.visibility = "visible";
  } else {
    secretSection.style.visibility = "hidden";
  }
};

const getPassWord = () => {
  passWord = pwd.value;
  if (passWord.length < 6) {
    console.log(passWord.length);
    pwd.style.backgroundColor = "red";
    alert(`password should be at list 6 characters`);
  }
  console.log(passWord);
};

const confirmPassWord = () => {
  passConfirm = pwdConfirmation.value;
  if (passWord !== passConfirm) {
    pwdConfirmation.style.backgroundColor = "red";
    alert(
      `password confirmation didn't much\nPlease enter your password again`
    );
  } else if (passWord === passConfirm) {
    pwdConfirmation.style.backgroundColor = "green";
  }
};

const darkMode = () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  console.log("theme changed to Dark-Mode");
};

const lightMode = () => {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  console.log("theme changed to Light-Mode");
};

inputName.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    getFirstName();
  }
});

inputAge.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    getAge();
  }
});

pwd.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    getPassWord();
  }
});

pwdConfirmation.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    confirmPassWord();
  }
});

webTheme.addEventListener("change", (event) => {
  if (event.target.value === "dark") {
    darkMode();
  } else if (event.target.value === "light") {
    lightMode();
  }
});
