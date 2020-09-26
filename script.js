var hamburgerIcon = document.getElementById("hamburgerIcon");
var navUl = document.getElementById("navUL");

let state = "close";
hamburgerIcon.addEventListener("click", () => {
  console.log("clicked");
  if (state == "close") {
    navUl.style.transform = "translate(0%)";
    state = "open";
  } else if (state == "open") {
    navUl.style.transform = "translate(100%)";
    state = "close";
  }
  console.log(state);
});
