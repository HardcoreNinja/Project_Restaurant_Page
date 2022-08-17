function createContactContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    bodyContainer.append(logoContainer);
    body.append(bodyContainer);
}

createContactContent();

export {
    createContactContent
};