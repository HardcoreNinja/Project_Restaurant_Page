import './style.css';

function createNav() {
    const nav = document.querySelector("#nav");

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
}

createNav();