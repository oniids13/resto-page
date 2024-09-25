import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";
import pageLogo from "./images/logo.png"



const header = document.querySelector("header");
const logoImage = document.createElement("img");
const footerYear = document.querySelector(".footer");
const homeButn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");
const content = document.querySelector("#content");

footerYear.innerHTML = new Date().getFullYear();

logoImage.src = pageLogo;
logoImage.classList.add("logo");
header.appendChild(logoImage);




homePage();

homeButn.addEventListener("click", () =>{
    content.innerHTML = '';
    homePage();
});

menuBtn.addEventListener("click", () => {
    content.innerHTML = '';
    menuPage();
})

contactBtn.addEventListener("click", () => {
    content.innerHTML = '';
    contactPage();
})

