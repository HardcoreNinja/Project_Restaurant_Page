import './style.css';

function createNav() {
    const nav = document.querySelector("#nav");
    const logo = document.querySelector("#logo");

    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");

    let home = document.createElement("button");
    home.innerHTML = "Home";
    home.classList.add("navButton");

    let menu = document.createElement("button");
    menu.innerHTML = "Menu";
    menu.classList.add("navButton");

    let contact = document.createElement("button");
    contact.innerHTML = "Contact";
    contact.classList.add("navButton");

    nav.append(home, menu, contact);
    logo.append(logoDiv);
}

createNav();