import "./index.css";

console.log("This is working");

import { homer } from "./home.js";
import { contactor } from "./contact.js";
import { manure } from "./menu.js";


const content = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const contactButton = document.getElementById("contact-button");
const menuButton = document.getElementById("menu-button");

function cleaner(){
    content.innerHTML="";
}

homeButton.addEventListener("click", () => {
    cleaner();
    homer(content);
});
contactButton.addEventListener("click", () => {
    cleaner();
    contactor(content);
});
menuButton.addEventListener("click", () => {
    cleaner();
    manure(content);
});

homer(content);