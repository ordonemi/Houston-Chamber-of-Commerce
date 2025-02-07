const banner = document.querySelector("#banner");
const hideButton = document.querySelector("#banner-button");

function displayBanner()
{
    let today = new Date();
    let dayOfWeek = today.getDay();
    if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3) 
    {
        banner.classList.add("show");
        hideButton.classList.add("show");
    }
}

displayBanner();
hideButton.addEventListener('click', () => {
    banner.classList.toggle("hide");
    hideButton.classList.toggle("hide");
});