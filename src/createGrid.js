import './style.css';

function createGrid() {
  const content = document.querySelector("#content");

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  const body = document.createElement("div");
  body.setAttribute("id", "body");

  content.append(nav, body);
}

createGrid();