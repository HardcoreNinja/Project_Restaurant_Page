function createContactContent() {
    const body = document.querySelector("#body");

    while (body.firstChild)
        body.removeChild(body.firstChild);

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

    let form = document.createElement("form");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("inputContainer");
    let nameLabel = document.createElement("label");
    nameLabel.for = "name";
    nameLabel.innerHTML = "Name:";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "name");
    nameInput.type = "text";
    nameInput.required = true;
    nameDiv.append(nameLabel, nameInput);

    let subjectDiv = document.createElement("div");
    subjectDiv.classList.add("inputContainer");
    let subjectLabel = document.createElement("label");
    subjectLabel.for = "subject";
    subjectLabel.innerHTML = "Subject:";
    let subjectInput = document.createElement("input");
    subjectInput.setAttribute("id", "subject");
    subjectInput.type = "text";
    subjectInput.required = true;
    subjectDiv.append(subjectLabel, subjectInput);

    let messageDiv = document.createElement("div");
    messageDiv.classList.add("inputContainer");
    let messageLabel = document.createElement("label");
    messageLabel.for = "message";
    messageLabel.innerHTML = "Message:";
    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    messageInput.classList.add("message");
    messageInput.required = true;
    messageDiv.append(messageLabel, messageInput);

    let submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.innerHTML = "Submit >"
    submitButton.classList.add("submitButton");

    form.append(nameDiv, subjectDiv, messageDiv, submitButton);
    bodyContainer.append(logoContainer, form);
    body.append(bodyContainer);
}

createContactContent();

export {
    createContactContent
};