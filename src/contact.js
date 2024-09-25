import contactImg from "./images/contact.jpg"

export function contactPage() {
    const content = document.querySelector("#content");
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv")
    const leftContactDiv = document.createElement("div");
    leftContactDiv.classList.add("leftContactDiv");
    const rightContactDiv = document.createElement("div");
    rightContactDiv.classList.add("rightContactDiv");
    content.appendChild(contactDiv);

    contactDiv.appendChild(leftContactDiv);
    const contactImage = document.createElement("img");
    contactImage.src = contactImg;
    contactImage.classList.add("contactImage");
    leftContactDiv.appendChild(contactImage); 


    contactDiv.appendChild(rightContactDiv);
    const contactUpperLineDiv = document.createElement("div");
    rightContactDiv.appendChild(contactUpperLineDiv);
    contactUpperLineDiv.classList.add("contactUpper");
    const contactHeadLine = document.createElement("h1");
    const contactLine = document.createElement("p");
    contactHeadLine.textContent = "Contact Us!";
    contactLine.textContent = "Get in Touch - Experience Filipino Hospitality Beyond the Plate"
    contactUpperLineDiv.appendChild(contactHeadLine);
    contactUpperLineDiv.appendChild(contactLine);

    const contactDownLineDiv = document.createElement("div");
    contactDownLineDiv.classList.add("contactDown")
    rightContactDiv.appendChild(contactDownLineDiv);

    const reserveLine = document.createElement("h3");
    reserveLine.textContent = "Secure Your Seat at the Table - Reserve Now for a Taste of Filipino Elegance"
    const nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", "Your Name");
    const numberInput = document.createElement("input");
    numberInput.setAttribute("placeholder", "Contact Number");
    const messageInput = document.createElement("input");
    messageInput.setAttribute("placeholder", "Message");
    const connectBtn = document.createElement("button");
    connectBtn.textContent = "Send";
    contactDownLineDiv.appendChild(reserveLine);
    contactDownLineDiv.appendChild(nameInput);
    contactDownLineDiv.appendChild(numberInput);
    contactDownLineDiv.appendChild(messageInput);
    contactDownLineDiv.appendChild(connectBtn);

    const locationLine = document.createElement("h4");
    locationLine.textContent = "Come visit us at:";
    const locationLines = document.createElement("span");
    locationLines.innerHTML = "L2 SM Megamall, Julia Vargas Avenue, Ortigas Center </br> Mandaluyong City, Metro Manila </br>+63 (02) 637-8730"
    contactDownLineDiv.appendChild(locationLine);
    contactDownLineDiv.appendChild(locationLines);
    
}