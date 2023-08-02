const menu = document.getElementById("menubar");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  console.log("cliked");
  navbar.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("active");
};
