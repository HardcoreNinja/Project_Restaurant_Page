import './style.css';

function createGrid() {
  const content = document.querySelector("#content");

  const logo = document.createElement("div");
  logo.setAttribute("id", "logo");

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  const body = document.createElement("div");
  body.setAttribute("id", "body");
  body.innerHTML = "body";

  content.append(logo, nav, body);
}

createGrid();