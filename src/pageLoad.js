import './style.css';

function component() {
    const element = document.querySelector("#content");
    let text = document.createTextNode("Hello!");
    element.classList.add("hello");
    element.appendChild(text);
  }
 
  window.onload = component();