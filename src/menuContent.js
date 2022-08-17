function createMenuContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    let food1 = document.createElement("div");
    food1.classList.add("menuImage1");

    let food2 = document.createElement("div");
    food2.classList.add("menuImage2");

    let food3 = document.createElement("div");
    food3.classList.add("menuImage3");

    bodyContainer.append(logoContainer, food1, food2, food3);
    body.append(bodyContainer);
}

export {
    createMenuContent
};