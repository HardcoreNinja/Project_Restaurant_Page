
function createHomeContent(){
    const body = document.querySelector("#body"); 

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    body.append(bodyContainer);
}

createHomeContent();