let hambutton = document.querySelector("#menu");
let navigation = document.querySelector(".navigation");

hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
})

let today = new Date();
document.querySelector("#currentYear").textContent=today.getFullYear();
document.querySelector("#lastModified").textContent=document.lastModified;

hero-button