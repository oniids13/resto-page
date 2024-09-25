import menuImg from "./images/menu.jpg";
import lumpiaImg from "./images/lumpia-ubod.jpg";
import kinilawImg from "./images/kinilaw.jpg";
import chicharonImg from "./images/chicharon.jpg";
import adoboImg from "./images/adobo.jpg";
import sinigangImg from "./images/sinigang.jpg";
import bistekImg from "./images/bistek.jpg";
import lechonImg from "./images/lechon.jpg";
import kareKareImg from "./images/karekare.jpg";
import ubeImg from "./images/ube.jpg";
import lecheFlanImg from "./images/lecheFlan.jpg";
import turonImg from "./images/turon.jpg";
import calamansiImg from "./images/calamansi.jpg";
import sagoImg from "./images/sago.jpg";

export function menuPage() {
    const content = document.querySelector("#content");
    const upperDiv = document.createElement("div");
    upperDiv.classList.add("upperDiv");
    content.appendChild(upperDiv);
    const menuTitleDiv = document.createElement("div");
    menuTitleDiv.classList.add("menuTitleDiv");
    const menuImageDiv = document.createElement("div");
    menuImageDiv.classList.add("menuImageDiv");
    upperDiv.appendChild(menuTitleDiv);
    upperDiv.appendChild(menuImageDiv);

    const menuTitle = document.createElement("h1");
    const menuTagLine = document.createElement("p");
    menuTitle.classList.add("menuTitle");
    menuTitle.textContent = "Our Menu";
    menuTagLine.classList.add("menuTagLine");
    menuTagLine.textContent = "Discover the Taste of Tradition - Every Bite a Journey Through Filipino Flavors";
    menuTitleDiv.appendChild(menuTitle);
    menuTitleDiv.appendChild(menuTagLine);

    const menuImage = document.createElement("img");
    menuImage.src = menuImg;
    menuImage.classList.add("menuImg");
    menuImageDiv.appendChild(menuImage);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");
    content.appendChild(menuDiv);

    const appetizer = document.createElement("div");
    const appetizerLine = document.createElement("h1");
    appetizerLine.textContent = "Appetizer"
    appetizer.classList.add("appetizer");
    menuDiv.appendChild(appetizerLine);
    menuDiv.appendChild(appetizer);

    const lumpiaDiv = document.createElement("div");
    const lumpiaImage = document.createElement("img");
    lumpiaImage.src = lumpiaImg;
    lumpiaDiv.classList.add("menuList")
    appetizer.appendChild(lumpiaDiv);
    const lumpia = document.createElement("h2");
    const lumpiaContent = document.createElement("p");
    lumpia.textContent = "Lumpiang Ubod"
    lumpiaContent.textContent = "Fresh coconut heart spring rolls with peanut sauce and garlic bits."
    lumpiaDiv.appendChild(lumpia);
    lumpiaDiv.appendChild(lumpiaImage);
    lumpiaDiv.appendChild(lumpiaContent);

    const kinilawDiv = document.createElement("div");
    const kinilawImage = document.createElement("img");
    kinilawImage.src = kinilawImg;
    kinilawDiv.classList.add("menuList");
    appetizer.appendChild(kinilawDiv);
    const kinilaw = document.createElement("h2");
    const kinilawContent = document.createElement("p");
    kinilaw.textContent = "Kinilaw na Tuna";
    kinilawContent.textContent = "Filipino-style ceviche with fresh tuna, calamansi, and chili, drizzled with coconut cream.";
    kinilawDiv.appendChild(kinilaw);
    kinilawDiv.appendChild(kinilawImage);
    kinilawDiv.appendChild(kinilawContent);

    const chicharonDiv = document.createElement("div");
    const chicharonImage = document.createElement("img");
    chicharonImage.src = chicharonImg;
    chicharonDiv.classList.add("menuList");
    appetizer.appendChild(chicharonDiv);
    const chicharon = document.createElement("h2");
    const chicharonContent = document.createElement("p");
    chicharon.textContent = "Chicharon Bulaklak";
    chicharonContent.textContent = "Crispy deep-fried pork intestines, served with spiced vinegar for dipping.";
    chicharonDiv.appendChild(chicharon);
    chicharonDiv.appendChild(chicharonImage);
    chicharonDiv.appendChild(chicharonContent);

    const mainDish = document.createElement("div");
    const mainDishLine = document.createElement("h1");
    mainDishLine.textContent = "Main Course";
    mainDish.classList.add("mainDish");
    menuDiv.appendChild(mainDishLine);
    menuDiv.appendChild(mainDish);
    
    

    const adoboDiv = document.createElement("div");
    const adoboImage = document.createElement("img");
    adoboImage.src = adoboImg;
    adoboDiv.classList.add("menuList")
    mainDish.appendChild(adoboDiv);
    const adobo = document.createElement("h2");
    const adoboContent = document.createElement("p");
    adobo.textContent = "Adobo Confit"
    adoboContent.textContent = "Tender chicken slow-cooked in soy, vinegar, and garlic, served with garlic rice and pickled vegetables."
    adoboDiv.appendChild(adobo);
    adoboDiv.appendChild(adoboImage);
    adoboDiv.appendChild(adoboContent);

    const sinigangDiv = document.createElement("div");
    const sinigangImage = document.createElement("img");
    sinigangImage.src = sinigangImg;
    sinigangDiv.classList.add("menuList")
    mainDish.appendChild(sinigangDiv);
    const sinigang = document.createElement("h2");
    const sinigangContent = document.createElement("p");
    sinigang.textContent = "Sinigang na Salmon"
    sinigangContent.textContent = "A modern twist on the classic sour tamarind soup with rich salmon fillet, served with local vegetables."
    sinigangDiv.appendChild(sinigang);
    sinigangDiv.appendChild(sinigangImage);
    sinigangDiv.appendChild(sinigangContent);

    const bistekDiv = document.createElement("div");
    const bistekImage = document.createElement("img");
    bistekImage.src = bistekImg;
    bistekDiv.classList.add("menuList")
    mainDish.appendChild(bistekDiv);
    const bistek = document.createElement("h2");
    const bistekContent = document.createElement("p");
    bistek.textContent = "Bistek Tagalog"
    bistekContent.textContent = "Marinated beef sirloin in a savory soy-calamansi sauce, garnished with caramelized onions and a side of garlic mashed potatoes."
    bistekDiv.appendChild(bistek);
    bistekDiv.appendChild(bistekImage);
    bistekDiv.appendChild(bistekContent);

    const lechonDiv = document.createElement("div");
    const lechonImage = document.createElement("img");
    lechonImage.src = lechonImg;
    lechonDiv.classList.add("menuList")
    mainDish.appendChild(lechonDiv);
    const lechon = document.createElement("h2");
    const lechonContent = document.createElement("p");
    lechon.textContent = "Lechon Kawali"
    lechonContent.textContent = "Crispy pork belly with a side of spicy vinegar dipping sauce, served with jasmine rice and sautéed greens."
    lechonDiv.appendChild(lechon);
    lechonDiv.appendChild(lechonImage);
    lechonDiv.appendChild(lechonContent);

    const kareKareDiv = document.createElement("div");
    const kareKareImage = document.createElement("img");
    kareKareImage.src = kareKareImg;
    kareKareDiv.classList.add("menuList")
    mainDish.appendChild(kareKareDiv);
    const kareKare = document.createElement("h2");
    const kareKareContent = document.createElement("p");
    kareKare.textContent = "Kare-Kare Osso Buco"
    kareKareContent.textContent = "Braised beef shank in a rich peanut sauce, served with shrimp paste, eggplant, string beans, and steamed rice."
    kareKareDiv.appendChild(kareKare);
    kareKareDiv.appendChild(kareKareImage);
    kareKareDiv.appendChild(kareKareContent);

    const desserts = document.createElement("div");
    const dessertsLine = document.createElement("h1");
    dessertsLine.textContent = "Desserts";
    desserts.classList.add("desserts");
    menuDiv.appendChild(dessertsLine);
    menuDiv.appendChild(desserts);

    const ubeDiv = document.createElement("div");
    const ubeImage = document.createElement("img");
    ubeImage.src = ubeImg;
    ubeDiv.classList.add("menuList")
    desserts.appendChild(ubeDiv);
    const ube = document.createElement("h2");
    const ubeContent = document.createElement("p");
    ube.textContent = "Ube Cheesecake"
    ubeContent.textContent = "Rich purple yam-infused cheesecake with a graham cracker crust."
    ubeDiv.appendChild(ube);
    ubeDiv.appendChild(ubeImage);
    ubeDiv.appendChild(ubeContent);

    const lecheFlanDiv = document.createElement("div");
    const lecheFlanImage = document.createElement("img");
    lecheFlanImage.src = lecheFlanImg;
    lecheFlanDiv.classList.add("menuList")
    desserts.appendChild(lecheFlanDiv);
    const lecheFlan = document.createElement("h2");
    const lecheFlanContent = document.createElement("p");
    lecheFlan.textContent = "Leche Flan"
    lecheFlanContent.textContent = "Silky smooth caramel custard with a hint of vanilla."
    lecheFlanDiv.appendChild(lecheFlan);
    lecheFlanDiv.appendChild(lecheFlanImage);
    lecheFlanDiv.appendChild(lecheFlanContent);

    const turonDiv = document.createElement("div");
    const turonImage = document.createElement("img");
    turonImage.src = turonImg;
    turonDiv.classList.add("menuList")
    desserts.appendChild(turonDiv);
    const turon = document.createElement("h2");
    const turonContent = document.createElement("p");
    turon.textContent = "Turon ala Mode"
    turonContent.textContent = "Crispy fried banana rolls, served with a scoop of vanilla ice cream and drizzled with chocolate."
    turonDiv.appendChild(turon);
    turonDiv.appendChild(turonImage);
    turonDiv.appendChild(turonContent);

    const beverages = document.createElement("div");
    const beveragesLine = document.createElement("h1");
    beveragesLine.textContent = "Beverages";
    beverages.classList.add("beverages");
    menuDiv.appendChild(beveragesLine);
    menuDiv.appendChild(beverages);

    const calamansiDiv = document.createElement("div");
    const calamansiImage = document.createElement("img");
    calamansiImage.src = calamansiImg;
    calamansiDiv.classList.add("menuList")
    beverages.appendChild(calamansiDiv);
    const calamansi = document.createElement("h2");
    const calamansiContent = document.createElement("p");
    calamansi.textContent = "Calamansi Iced Tea"
    calamansiContent.textContent = "Refreshing iced tea with a zesty calamansi twist."
    calamansiDiv.appendChild(calamansi);
    calamansiDiv.appendChild(calamansiImage);
    calamansiDiv.appendChild(calamansiContent);

    const sagoDiv = document.createElement("div");
    const sagoImage = document.createElement("img");
    sagoImage.src = sagoImg;
    sagoDiv.classList.add("menuList")
    beverages.appendChild(sagoDiv);
    const sago = document.createElement("h2");
    const sagoContent = document.createElement("p");
    sago.textContent = "Sago't Gulaman"
    sagoContent.textContent = "Traditional Filipino drink made with tapioca pearls, jelly, and brown sugar syrup."
    sagoDiv.appendChild(sago);
    sagoDiv.appendChild(sagoImage);
    sagoDiv.appendChild(sagoContent);

}