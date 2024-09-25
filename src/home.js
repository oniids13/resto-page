import pageCover from "./images/resto-cover.jpg";
import timeImg from "./images/time.png"
import locImg from "./images/location.png"



export function homePage() {
    const content = document.querySelector("#content");
    const image = document.createElement("img");
    image.src = pageCover;
    image.classList.add("cover");
    content.appendChild(image);

    const headline = document.createElement("h1");
    headline.textContent = "Welcome to Kaon Ta! - Elevating Filipino Cuisine to a Fine Dining Experience";
    headline.classList.add("headline");
    content.appendChild(headline);

    const content1 = document.createElement("p");
    const content2 = document.createElement("p");
    const content3 = document.createElement("p");
    content1.textContent = "At Kaon Ta!, we celebrate the rich and diverse flavors of Filipino cuisine by offering a modern fine dining experience that highlights traditional dishes with a contemporary twist. Our culinary team blends authentic ingredients with innovative techniques to bring you a refined taste of the Philippines. Each plate tells a story of our cultural heritage, crafted to satisfy the most discerning palate.";
    content2.textContent = "Immerse yourself in the elegance of Filipino hospitality and enjoy a curated menu that showcases the best of what our islands have to offer. From our delectable Adobo Confit to the sophisticated Sinigang na Salmon, every dish is an invitation to discover the vibrant flavors of our country.";
    content3.textContent = "Indulge in a luxurious dining atmosphere at Kaon Ta!, where Filipino cuisine meets fine dining. Experience the warmth, passion, and flavor of the Philippines like never before.";
    content.appendChild(content1);
    content.appendChild(content2);
    content.appendChild(content3);

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("contact-info");
    content.appendChild(bottomDiv);

    const leftBottomDiv = document.createElement("div");
    leftBottomDiv.classList.add("leftDiv");
    const rightBottomDiv = document.createElement("div");
    rightBottomDiv.classList.add("rightDiv");
    bottomDiv.appendChild(leftBottomDiv);
    bottomDiv.appendChild(rightBottomDiv);

    const restoHourTitle = document.createElement("h2");
    const timeIcon = document.createElement("img");
    timeIcon.src = timeImg;
    timeIcon.classList.add("icon");
    leftBottomDiv.appendChild(timeIcon);
    restoHourTitle.textContent = "Resto Hours";
    leftBottomDiv.appendChild(restoHourTitle);
    const restoHour = document.createElement("span")
    restoHour.innerHTML = "Monday - Friday: 8:00am - 10:00pm </br> Saturday - Sunday: 7:30am - 12mn"
    leftBottomDiv.appendChild(restoHour);


    const restoLocationTitle = document.createElement("h2");
    const locIcon = document.createElement("img");
    locIcon.src = locImg;
    locIcon.classList.add("icon");
    rightBottomDiv.appendChild(locIcon);
    restoLocationTitle.textContent = "Our Location";
    rightBottomDiv.appendChild(restoLocationTitle);
    const restoLocation = document.createElement("span");
    restoLocation.innerHTML = "L2 SM Megamall, Julia Vargas Avenue, Ortigas Center </br> Mandaluyong City, Metro Manila </br>637-8730 (02)  +63"
    rightBottomDiv.appendChild(restoLocation);
}