
function createHomeContent(){
    const body = document.querySelector("#body"); 

    let bodyContainer = document.createElement("div");
    bodyContainer.classList.add("bodyContainer");

    let logoContainer = document.createElement("div");
    logoContainer.classList.add("logoContainer");

   

    let content1 = document.createElement("div");
    content1.classList.add("contentContainer");
    let headline1 = document.createElement("h1");
    headline1.innerHTML = "Headline1";
    let p1 = document.createElement("p");
    p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content1.append(headline1, p1);

    let content2 = document.createElement("div");
    content2.classList.add("contentContainer");
    let headline2 = document.createElement("h1");
    headline2.innerHTML = "Headline2";
    let p2 = document.createElement("p");
    p2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content2.append(headline2, p2)

    let content3 = document.createElement("div");
    content3.classList.add("contentContainer");
    let headline3 = document.createElement("h1");
    headline3.innerHTML = "Headline3";
    let p3 = document.createElement("p");
    p3.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    content3.append(headline3, p3)

    bodyContainer.append(logoContainer, content1, content2, content3);
    body.append(bodyContainer);


}

createHomeContent();