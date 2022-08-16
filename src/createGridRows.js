import './style.css';


function createGridRows() {
  const content = document.querySelector("#content");
  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");
  const body = document.createElement("div");
  body.setAttribute("id", "body");
  body.innerHTML = "body";
  content.append(nav, body);
}

createGridRows();