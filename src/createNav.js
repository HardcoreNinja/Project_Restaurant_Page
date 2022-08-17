import './style.css';
import { createHomeContent } from './homeContent.js';
import { createMenuContent } from './menuContent.js';

function createNav() {
    const nav = document.querySelector("#nav");

    let home = document.createElement("button");
    home.innerHTML = "Home";
    home.classList.add("navButton");
    home.addEventListener("mousedown", createHomeContent);

    let menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.classList.add("navButton");
    menu.addEventListener("mousedown", createMenuContent);

    let contact = document.createElement("button");
    contact.innerHTML = "Contact";
    contact.classList.add("navButton");

    nav.append(home, menu, contact);
}

createNav();
createHomeContent();