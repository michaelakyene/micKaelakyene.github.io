/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
*/
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox-icon.png") {
    myImage.setAttribute("src", "firefox-icon-2.png");
  } else {
    myImage.setAttribute("src", "firefox-icon.png");
  }
});
let mybutton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

mybutton.addEventListener("click", () => {
  setUserName();
});
