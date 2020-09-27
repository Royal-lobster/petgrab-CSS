var hamburgerIcon = document.getElementById("hamburger-6");
var navUl = document.getElementById("navUL");

let state = "close";
hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("is-active");

  console.log("clicked");
  if (state == "close") {
    navUl.style.transform = "translate(0%)";
    hamburgerIcon.style.position = "fixed";
    hamburgerIcon.style.right = "40px";
    state = "open";
  } else if (state == "open") {
    navUl.style.transform = "translate(100%)";
    hamburgerIcon.style.position = "unset";
    state = "close";
  }
  console.log(state);
});
