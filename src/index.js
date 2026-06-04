import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";


function renderPage(pageLoader) {
  const content = document.querySelector("#content");

  content.textContent = "";

  pageLoader();
}

renderPage(loadHome); // load home page initially

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
  renderPage(loadHome);
});

menuBtn.addEventListener("click", () => {
  renderPage(loadMenu);
});

contactBtn.addEventListener("click", () => {
  renderPage(loadContact);
});